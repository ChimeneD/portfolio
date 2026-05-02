import nodemailer from "nodemailer";

type SendEmailArgs = {
  emailHtml: string;
  replyTo: string;
  subject: string;
  text?: string;
  to?: string;
};

const smtpPort = Number(process.env.SMTP_PORT ?? 465);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp.zeptomail.com",
  port: Number.isFinite(smtpPort) ? smtpPort : 465,
  secure: true,
  auth:
    smtpUser && smtpPass
      ? {
          user: smtpUser,
          pass: smtpPass,
        }
      : undefined,
});

export const sendEmail = async ({
  emailHtml,
  replyTo,
  subject,
  text,
  to: recipient,
}: SendEmailArgs) => {
  const from = process.env.SMTP_FROM ?? smtpUser;
  const to = recipient ?? process.env.SMTP_TO ?? "hello@chimene.dev";

  if (!from || !to) {
    throw new Error("SMTP sender and recipient are not configured.");
  }

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    html: emailHtml,
    text,
  });
};
