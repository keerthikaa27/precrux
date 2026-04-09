import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ ok: false }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!, 
      subject: "New Newsletter Subscriber",
      html: `
        <div style="font-family: sans-serif;">
          <h2>New Subscriber</h2>
          <p><b>Email:</b> ${email}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}