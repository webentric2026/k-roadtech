import nodemailer from "nodemailer";
import { CONTACT_META } from "@/app/_pages/shared/data/navigation";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 100, email: 254, phone: 30, subject: 150, message: 5000 };

function clean(value, max) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

/**
 * POST /api/contact — validate the enquiry and relay it to the site owner via SMTP.
 * Configure via env: SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS,
 * CONTACT_TO (defaults to the site contact email), CONTACT_FROM (defaults to SMTP_USER).
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(body?.name, MAX.name);
  const email = clean(body?.email, MAX.email);
  const phone = clean(body?.phone, MAX.phone);
  const subject = clean(body?.subject, MAX.subject);
  const message = clean(body?.message, MAX.message);

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } =
    process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return Response.json(
      { error: "Contact service is not configured. Please try again later." },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO || CONTACT_META.email;
  const from = process.env.CONTACT_FROM || SMTP_USER;
  const port = Number(SMTP_PORT || 587);
  const secure =
    String(SMTP_SECURE || "").toLowerCase() === "true" || port === 465;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const mailSubject = subject
      ? `Website enquiry: ${subject}`
      : `Website enquiry from ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      subject ? `Subject: ${subject}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    await transporter.sendMail({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: mailSubject,
      text,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Could not send your message. Please try again later." },
      { status: 500 }
    );
  }
}
