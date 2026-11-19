"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import {
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  estimateBrief,
  formatWeeks,
  sanitizeServices,
  scoreLead,
} from "@/lib/brief";

export interface ContactFormState {
  success: boolean;
  error?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const LIMITS = { name: 100, email: 200, company: 150, referral: 150, message: 5000 };

// Best-effort per-IP rate limit. On serverless hosting each instance keeps its
// own map, so this slows abuse rather than stopping it outright — swap for
// Upstash/Vercel KV if the form starts getting hammered.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // keep memory bounded
  return false;
}

function field(formData: FormData, key: string) {
  return (formData.get(key)?.toString() ?? "").trim();
}

function oneLine(s: string) {
  return s.replace(/[\r\n]+/g, " ");
}

export async function submitContactForm(
  _prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "website")) return { success: true };

  const name = oneLine(field(formData, "name"));
  const email = field(formData, "email");
  const message = field(formData, "message");
  const company = oneLine(field(formData, "company"));
  const referral = oneLine(field(formData, "referral"));
  const rawBudget = field(formData, "budget");
  const rawTimeline = field(formData, "timeline");
  const budget = (BUDGET_OPTIONS as readonly string[]).includes(rawBudget) ? rawBudget : "";
  const timeline = (TIMELINE_OPTIONS as readonly string[]).includes(rawTimeline) ? rawTimeline : "";
  const services = sanitizeServices(field(formData, "services").split(","));

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    company.length > LIMITS.company ||
    referral.length > LIMITS.referral ||
    message.length > LIMITS.message
  ) {
    return { success: false, error: "One of the fields is too long — please shorten it." };
  }

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const h = headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return {
      success: false,
      error: "You've sent a few messages already — please wait a few minutes, or email hello@studiomizani.com.",
    };
  }

  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "Studio Mizan <onboarding@resend.dev>";
  const toAddress = process.env.CONTACT_TO_EMAIL ?? "hello@studiomizani.com";

  const priority = scoreLead(budget, timeline, services.length);
  const estimate = estimateBrief(services, budget, timeline);
  const serviceTitles = estimate.services.map((s) => s.title).join(", ");

  try {
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `[${priority.toUpperCase()} LEAD] New inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        `Services: ${serviceTitles || "—"}`,
        `Budget: ${budget || "—"}`,
        `Timeline: ${timeline || "—"}`,
        `Referral: ${referral || "—"}`,
        `Indicative delivery: ${formatWeeks(estimate.weeks)}`,
        `Fit: ${estimate.fit}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    // Auto-reply deliberately contains no free text typed by the visitor, so the
    // form can't be used to send arbitrary content from our domain. Services,
    // budget and timeline are allow-listed values above.
    const briefLines = estimate.services.length
      ? [
          "Here's the brief you put together:",
          "",
          `  Services:  ${serviceTitles}`,
          `  Budget:    ${budget || "Not specified"}`,
          `  Timeline:  ${timeline || "Not specified"}`,
          `  Indicative delivery: ${formatWeeks(estimate.weeks)}`,
          `  Phases:    ${estimate.phases.join(" → ")}`,
          "",
          estimate.fitMessage,
          "",
        ]
      : [];

    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "Karibu — we've got your message · Studio Mizan",
      text: [
        "Hi there,",
        "",
        "Thanks for reaching out to Studio Mizan. Your message is in, and you'll hear from us within 24 hours (Nairobi time) — usually sooner.",
        "",
        ...briefLines,
        "In the meantime, have a look at recent work: https://studiomizani.com/work",
        "",
        "— Studio Mizan, Nairobi",
      ].join("\n"),
    });
  } catch (err) {
    console.error("[Contact Form] Failed to send email", err);
    return {
      success: false,
      error: "Something went wrong sending your message. Please try again or email hello@studiomizani.com directly.",
    };
  }

  return { success: true };
}
