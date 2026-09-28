import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: 100,
  company: 150,
  email: 254,
  phone: 40,
  service: 150,
  message: 5000,
} as const;

type Field = keyof typeof LIMITS;

function readField(body: Record<string, unknown>, field: Field): string | null {
  const value = body[field];
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length <= LIMITS[field] ? trimmed : null;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      throw new Error("Invalid body");
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots don't retry.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = readField(body, "name");
  const company = readField(body, "company");
  const email = readField(body, "email");
  const phone = readField(body, "phone");
  const service = readField(body, "service");
  const message = readField(body, "message");

  if (
    name === null ||
    company === null ||
    email === null ||
    phone === null ||
    service === null ||
    message === null
  ) {
    return NextResponse.json(
      { error: "One or more fields are invalid or too long" },
      { status: 400 },
    );
  }

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields" },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL ?? user;
  const from = process.env.SMTP_FROM ?? user;

  if (!host || !user || !pass || !to || !from) {
    console.error("Contact form: SMTP environment variables are not configured");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    // Collapse whitespace so user input can never inject extra header lines.
    const subject = `New inquiry from ${name} — ${service}`.replace(/\s+/g, " ");

    const text = [
      `Name: ${name}`,
      `Company: ${company || "-"}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Service: ${service}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <h2>New contact inquiry</h2>
      <table style="border-collapse:collapse">
        <tr><td><strong>Name</strong></td><td style="padding-left:12px">${escapeHtml(name)}</td></tr>
        <tr><td><strong>Company</strong></td><td style="padding-left:12px">${escapeHtml(company || "-")}</td></tr>
        <tr><td><strong>Email</strong></td><td style="padding-left:12px">${escapeHtml(email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td style="padding-left:12px">${escapeHtml(phone || "-")}</td></tr>
        <tr><td><strong>Service</strong></td><td style="padding-left:12px">${escapeHtml(service)}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: { name: name.replace(/\s+/g, " "), address: email },
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
