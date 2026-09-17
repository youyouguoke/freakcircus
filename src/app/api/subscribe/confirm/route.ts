import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type KV = { get(k: string): Promise<string | null>; put(k: string, v: string): Promise<void>; delete(k: string): Promise<void> };

// ── GET /api/subscribe/confirm?token=xxx ───────────────────
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/day-3-release-date?sub=invalid", req.url));
  }

  try {
    const { env } = getCloudflareContext();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const kv = (env as any).SUBSCRIBERS as KV | undefined;

    if (!kv) {
      return NextResponse.redirect(new URL("/day-3-release-date?sub=error", req.url));
    }

    const email = await kv.get(`pending:${token}`);
    if (!email) {
      return NextResponse.redirect(new URL("/day-3-release-date?sub=invalid", req.url));
    }

    const existing = await kv.get(`sub:${email}`);
    if (!existing) {
      return NextResponse.redirect(new URL("/day-3-release-date?sub=invalid", req.url));
    }

    const subscriber = JSON.parse(existing) as { status: string };
    if (subscriber.status === "confirmed") {
      return NextResponse.redirect(new URL("/day-3-release-date?sub=already", req.url));
    }

    const updated = { ...JSON.parse(existing), status: "confirmed", confirmedAt: new Date().toISOString() };
    await kv.put(`sub:${email}`, JSON.stringify(updated));
    await kv.delete(`pending:${token}`);

    return NextResponse.redirect(new URL("/day-3-release-date?sub=ok", req.url));
  } catch (err) {
    console.error("[confirm] error:", err);
    return NextResponse.redirect(new URL("/day-3-release-date?sub=error", req.url));
  }
}
