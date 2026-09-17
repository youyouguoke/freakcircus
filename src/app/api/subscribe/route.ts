import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { getResend, FROM_EMAIL, buildConfirmEmail } from "@/lib/resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type KV = { get(k: string): Promise<string | null>; put(k: string, v: string, o?: any): Promise<void>; delete(k: string): Promise<void>; list(o?: any): Promise<{ keys: { name: string }[] }> };

// ── POST /api/subscribe ────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { email?: string };
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();

    const { env } = getCloudflareContext();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const kv = (env as any).SUBSCRIBERS as KV | undefined;

    if (!kv) {
      console.error("[subscribe] SUBSCRIBERS KV binding not found");
      return NextResponse.json({ error: "Service configuration error. Please try again later." }, { status: 500 });
    }

    const existing = await kv.get(`sub:${normalized}`);
    if (existing) {
      const data = JSON.parse(existing) as { status: string; token: string };
      if (data.status === "confirmed") {
        return NextResponse.json({ message: "You're already subscribed to Day 3 release notifications." });
      }
      if (data.status === "pending") {
        const { subject, html } = buildConfirmEmail(data.token);
        await getResend().emails.send({ from: FROM_EMAIL, to: normalized, subject, html });
        return NextResponse.json({ message: "Confirmation email re-sent — check your inbox." });
      }
    }

    const token = randomBytes(32).toString("hex");
    const subscriber = {
      email: normalized,
      status: "pending",
      token,
      createdAt: new Date().toISOString(),
    };

    await kv.put(`sub:${normalized}`, JSON.stringify(subscriber));
    await kv.put(`pending:${token}`, normalized);

    const { subject, html } = buildConfirmEmail(token);
    await getResend().emails.send({ from: FROM_EMAIL, to: normalized, subject, html });

    return NextResponse.json({ message: "Confirmation email sent — check your inbox." });
  } catch (err) {
    console.error("[subscribe] error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }
}

// ── GET /api/subscribe ─────────────────────────────────────
export async function GET() {
  try {
    const { env } = getCloudflareContext();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const kv = (env as any).SUBSCRIBERS as KV | undefined;

    if (!kv) return NextResponse.json({ count: 0 });

    const list = await kv.list({ prefix: "sub:" });
    return NextResponse.json({ count: list.keys.length });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
