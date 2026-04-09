import { Resend } from "resend";
import { otpStore } from "@/lib/otpStore";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory store (resets on server restart — fine for MVP)

export async function POST(req: Request) {
  const { email } = await req.json();
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(email, code);

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: email,
    subject: "Your PreCrux Verification Code",
    html: `
  <div style="font-family:sans-serif">
    <h2>Your verification code</h2>
    <p style="font-size:18px;"><strong>${code}</strong></p>
    <p>This code expires in 10 minutes.</p>
  </div>
`,
  });

  return Response.json({ ok: true });
}