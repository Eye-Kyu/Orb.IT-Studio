"use server";

export interface ContactFormState {
  success: boolean;
  error?: string;
}

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

  // TODO: wire up email service (Resend, Nodemailer, etc.)
  console.log("[Contact Form Submission]", {
    name,
    email,
    company: company || "—",
    services: services || "—",
    budget: budget || "—",
    referral: referral || "—",
    message,
  });

  return { success: true };
}
