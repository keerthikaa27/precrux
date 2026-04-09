import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [ process.env.RESEND_TO_EMAIL!,
  "maheshwari01vaibhav@gmail.com"],
      replyTo: data.email,
      subject: `New Lead — ${data.name}`,
      html: `
      <p style="color:#888; font-size:12px;">
Source: Homepage | precrux.com
</p>
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f1117; border-bottom: 2px solid #C8F135; padding-bottom: 10px;">
            New Lead Captured
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666;"><b>Name</b></td><td>${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Email</b></td><td>${data.email}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Company</b></td><td>${data.company || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Description</b></td><td>${data.description || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    return Response.json({ ok: true });

  } catch (err) {
    console.error(err);
    return Response.json({ ok: false }, { status: 500 });
  }
}