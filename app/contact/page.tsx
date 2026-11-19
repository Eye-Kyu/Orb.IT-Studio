import type { Metadata } from "next";
import { Suspense } from "react";
import ContactHeroAndLayout from "@/components/ui/contact-hero-layout";

export const metadata: Metadata = {
  title: "Contact — Start a Web or Branding Project",
  description:
    "Get in touch with Studio Mizani. Reach out for enquiries, collaborations, design consultations, or project support. We are based in Nairobi and work globally.",
  openGraph: {
    title: "Contact Us | Studio Mizani",
    description:
      "Reach out to Studio Mizani for enquiries, collaborations, or support. We are here to help you achieve your goals.",
    url: "https://studiomizani.com/contact",
  },
  alternates: {
    canonical: "https://studiomizani.com/contact",
  },
};

export default function Contact() {
  return (
    <main id="main" className="w-full overflow-x-hidden">
      <Suspense>
        <ContactHeroAndLayout />
      </Suspense>
    </main>
  );
}
