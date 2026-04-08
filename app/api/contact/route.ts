import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Message from ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f1117; border-bottom: 2px solid #C8F135; padding-bottom: 10px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;"><b>Name</b></td><td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Email</b></td><td style="padding: 8px 0;">${data.email}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Company</b></td><td style="padding: 8px 0;">${data.company || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Service</b></td><td style="padding: 8px 0;">${data.service || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Message</b></td><td style="padding: 8px 0;">${data.message || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return Response.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}