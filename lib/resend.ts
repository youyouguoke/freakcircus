import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const FROM_EMAIL = "Freak Circus Hub <noreply@freak-circus.com>";
export const CONFIRM_URL = "https://freak-circus.com/api/subscribe/confirm";

// ── Confirmation email (Double Opt-in) ──────────────────────
export function buildConfirmEmail(token: string) {
  const confirmLink = `${CONFIRM_URL}?token=${token}`;
  return {
    subject: "确认订阅：Day 3 发布提醒",
    html: `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;color:#1a1a1a;">
        <p>嗨，</p>
        <p>感谢订阅 Freak Circus Hub 的 Day 3 发布提醒。</p>
        <p>请点击下方链接确认订阅，我们只会在 Day 3 正式发布时给你发一封邮件，不会有其他内容：</p>
        <p style="margin:24px 0;">
          <a href="${confirmLink}" style="display:inline-block;background:#1a1a1a;color:#fff;padding:12px 28px;text-decoration:none;border-radius:4px;font-weight:600;">
            确认订阅
          </a>
        </p>
        <p style="color:#666;font-size:13px;">如果这不是你本人的操作，忽略这封邮件即可，你不会被添加到任何列表。</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
        <p style="color:#999;font-size:12px;">—— Freak Circus Hub（非官方粉丝档案站）</p>
      </div>
    `,
  };
}

// ── Day 3 release notification email ────────────────────────
export function buildDay3Email() {
  return {
    subject: "🎪 Day 3 正式发布了 —— The Freak Circus",
    html: `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;color:#1a1a1a;">
        <p>嗨，</p>
        <p>你订阅的消息来了：<strong>The Freak Circus 的 Day 3 内容已正式发布。</strong></p>
        <p style="margin:24px 0;">
          <a href="https://garula.itch.io/the-freak-circus" style="display:inline-block;background:#1a1a1a;color:#fff;padding:12px 28px;text-decoration:none;border-radius:4px;font-weight:600;">
            前往官方 itch.io 下载/更新
          </a>
        </p>
        <p>我们也在同步更新以下内容，如果你想先了解剧情走向再玩：</p>
        <ul style="padding-left:20px;">
          <li><a href="https://freak-circus.com/day-3" style="color:#1a1a1a;">Day 3 攻略（更新中）</a></li>
          <li><a href="https://freak-circus.com/endings" style="color:#1a1a1a;">目前已确认的结局一览</a></li>
        </ul>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
        <p style="color:#666;font-size:13px;">本邮件仅发送这一次，无需退订，订阅已自动结束。</p>
        <p style="color:#999;font-size:12px;">—— Freak Circus Hub（非官方粉丝档案站，与开发者 Neko Bueno/Garula 无关联）</p>
      </div>
    `,
  };
}
