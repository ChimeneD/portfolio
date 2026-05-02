import { sendEmail } from "@/utils/functions";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type ContactEmailPayload = {
  email: string;
  name: string;
  subject: string;
  message: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const buildContactEmailTemplate = ({
  email,
  name,
  subject,
  message,
}: ContactEmailPayload) => {
  const palette = {
    background: "#1f1f1f",
    card: "#2a2a2a",
    primary: "#fd105e",
    text: "#f4f4f4",
    textAlt: "#c7c7c7",
    border: "rgba(244, 244, 244, 0.16)",
  };
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const submittedAt = new Date().toLocaleString("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
  });

  return `
    <div style="background:${palette.background};padding:28px 14px;font-family:Arial,sans-serif;color:${palette.text};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;background:${palette.card};border:1px solid ${palette.border};border-radius:14px;overflow:hidden;">
        <tr>
          <td style="padding:0;">
            <div style="height:6px;background:${palette.primary};"></div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 28px 12px 28px;">
            <p style="margin:0;color:${palette.textAlt};font-size:11px;letter-spacing:1.8px;text-transform:uppercase;">New Contact Form Submission</p>
            <h1 style="margin:10px 0 0 0;font-size:28px;line-height:1.2;font-weight:700;color:${palette.text};">${safeSubject}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px 28px 28px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:rgba(31,31,31,0.52);border:1px solid ${palette.border};border-radius:10px;">
              <tr>
                <td style="padding:14px 16px;border-bottom:1px solid ${palette.border};font-size:12px;color:${palette.textAlt};width:130px;letter-spacing:0.08em;text-transform:uppercase;">From</td>
                <td style="padding:14px 16px;border-bottom:1px solid ${palette.border};font-size:14px;color:${palette.text};font-weight:600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:14px 16px;border-bottom:1px solid ${palette.border};font-size:12px;color:${palette.textAlt};letter-spacing:0.08em;text-transform:uppercase;">Email</td>
                <td style="padding:14px 16px;border-bottom:1px solid ${palette.border};font-size:14px;color:${palette.text};">
                  <a href="mailto:${safeEmail}" style="color:${palette.primary};text-decoration:none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 16px;font-size:12px;color:${palette.textAlt};letter-spacing:0.08em;text-transform:uppercase;">Received</td>
                <td style="padding:14px 16px;font-size:14px;color:${palette.text};">${submittedAt}</td>
              </tr>
            </table>
            <div style="margin-top:20px;border:1px solid ${palette.border};background:rgba(31,31,31,0.68);padding:18px;border-radius:10px;">
              <p style="margin:0 0 10px 0;font-size:12px;color:${palette.textAlt};letter-spacing:0.08em;text-transform:uppercase;">Message</p>
              <p style="margin:0;font-size:14px;line-height:1.75;color:${palette.text};">${safeMessage}</p>
            </div>
            <p style="margin:16px 0 0 0;font-size:12px;line-height:1.6;color:${palette.textAlt};">
              Reply directly to this email to respond to ${safeName}.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Partial<ContactEmailPayload>;
    const email = data.email?.trim() ?? "";
    const name = data.name?.trim() ?? "";
    const subject = data.subject?.trim() ?? "";
    const message = data.message?.trim() ?? "";

    if (!email || !name || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    const emailHtml = buildContactEmailTemplate({
      email,
      name,
      subject,
      message,
    });

    await sendEmail({
      emailHtml,
      replyTo: email,
      subject: `New Contact Request: ${subject}`,
      to: "hello@chimene.dev",
      text: `New contact form submission\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
