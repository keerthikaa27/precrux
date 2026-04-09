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
      subject: `New Booking — ${data.service.join(", ")}`,
      html: `
      <p style="color:#888; font-size:12px;">
Source: Booking Form | precrux.com
</p>
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f1117; border-bottom: 2px solid #C8F135; padding-bottom: 10px;">New Booking Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;"><b>Service</b></td><td style="padding: 8px 0;">${data.service.join(", ")}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Date</b></td><td style="padding: 8px 0;">${data.date}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Time</b></td><td style="padding: 8px 0;">${data.time}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Name</b></td><td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Email</b></td><td style="padding: 8px 0;">${data.email}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Phone</b></td><td style="padding: 8px 0;">${data.phone || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Comments</b></td><td style="padding: 8px 0;">${data.comments || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return Response.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}