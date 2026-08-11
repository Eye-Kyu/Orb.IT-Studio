"use server";

import { Resend } from "resend";

export interface ContactFormState {
  success: boolean;
  error?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  _prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const services = formData.get("services")?.toString().trim();
  const budget = formData.get("budget")?.toString().trim();
  const referral = formData.get("referral")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "Studio Mizan <onboarding@resend.dev>";
  const toAddress = process.env.CONTACT_TO_EMAIL ?? "hello@studiomizani.com";

  try {
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        `Services: ${services || "—"}`,
        `Budget: ${budget || "—"}`,
        `Referral: ${referral || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "We received your message — Studio Mizan",
      text: `Hi ${name},\n\nThanks for reaching out to Studio Mizan. We've received your message and will get back to you within 24 hours — usually sooner.\n\n— Studio Mizan`,
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
