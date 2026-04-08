import { otpStore } from "../send-otp/route";

export async function POST(req: Request) {
  const { email, code } = await req.json();
  const stored = otpStore.get(email);
  if (stored && stored === code) {
    otpStore.delete(email);
    return Response.json({ ok: true });
  }
  return Response.json({ ok: false, error: "Invalid code" }, { status: 400 });
}