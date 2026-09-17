import { Resend } from "resend";

// Lazy initialization to avoid build-time errors when API key is not set
let _resend: Resend | null = null;

export function getResend(): Resend {
  if (!_resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }
    _resend = new Resend(apiKey);
  }
  return _resend;
}

export const FROM_EMAIL = "Freak Circus Hub <noreply@freak-circus.com>";
export const CONFIRM_URL = "https://freak-circus.com/api/subscribe/confirm";

// ── Confirmation email (Double Opt-in) ──────────────────────
export function buildConfirmEmail(token: string) {
  const confirmLink = `${CONFIRM_URL}?token=${token}`;
  return {
    subject: "Confirm your Day 3 release alert — Freak Circus Hub",
    html: `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;color:#1a1a1a;">
        <p>Hey,</p>
        <p>You signed up to be notified when The Freak Circus Day 3 is released. We'll only ever send you one email — when it's actually out.</p>
        <p>Click below to confirm:</p>
        <p style="margin:24px 0;">
          <a href="${confirmLink}" style="display:inline-block;background:#1a1a1a;color:#fff;padding:12px 28px;text-decoration:none;border-radius:4px;font-weight:600;">
            Confirm Subscription
          </a>
        </p>
        <p style="color:#666;font-size:13px;">If you didn't request this, just ignore this email — you won't be added to anything.</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
        <p style="color:#999;font-size:12px;">— Freak Circus Hub (unofficial fan archive)</p>
      </div>
    `,
  };
}

// ── Day 3 release notification email ────────────────────────
export function buildDay3Email() {
  return {
    subject: "🎪 Day 3 is out — The Freak Circus",
    html: `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;color:#1a1a1a;">
        <p>Hey,</p>
        <p>The wait is over — <strong>The Freak Circus Day 3 is now available.</strong></p>
        <p style="margin:24px 0;">
          <a href="https://garula.itch.io/the-freak-circus" style="display:inline-block;background:#1a1a1a;color:#fff;padding:12px 28px;text-decoration:none;border-radius:4px;font-weight:600;">
            Play on itch.io
          </a>
        </p>
        <p>We're also updating our guides if you want to check them out:</p>
        <ul style="padding-left:20px;">
          <li><a href="https://freak-circus.com/day-3" style="color:#1a1a1a;">Day 3 Walkthrough (updating)</a></li>
          <li><a href="https://freak-circus.com/endings" style="color:#1a1a1a;">All Confirmed Endings</a></li>
        </ul>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
        <p style="color:#666;font-size:13px;">This is the only email you'll receive — your subscription is now complete.</p>
        <p style="color:#999;font-size:12px;">— Freak Circus Hub (unofficial fan archive, not affiliated with Garula)</p>
      </div>
    `,
  };
}
