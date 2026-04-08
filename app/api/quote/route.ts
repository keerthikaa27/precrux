import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    console.log("Quote route hit"); 

  try {
    const data = await req.json();

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Quote Request — ${data.services.join(", ")}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f1117; border-bottom: 2px solid #C8F135; padding-bottom: 10px;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;"><b>Services</b></td><td style="padding: 8px 0;">${data.services.join(", ") || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Budget</b></td><td style="padding: 8px 0;">${data.budget || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Timeline</b></td><td style="padding: 8px 0;">${data.timeline || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Name</b></td><td style="padding: 8px 0;">${data.name || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Email</b></td><td style="padding: 8px 0;">${data.email || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Company</b></td><td style="padding: 8px 0;">${data.company || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><b>Description</b></td><td style="padding: 8px 0;">${data.description || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Quote email error:", error);
    return Response.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}