import type { Metadata } from "next";
import { Suspense } from "react";
import ContactHeroAndLayout from "@/components/ui/contact-hero-layout";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Studio Mizan. Reach out for enquiries, collaborations, design consultations, or project support. We are based in Nairobi and work globally.",
  openGraph: {
    title: "Contact Us | Studio Mizan",
    description:
      "Reach out to Studio Mizan for enquiries, collaborations, or support. We are here to help you achieve your goals.",
    url: "https://studiomizan.com/contact",
  },
  alternates: {
    canonical: "https://studiomizan.com/contact",
  },
};

export default function Contact() {
  return (
    <main className="w-full overflow-x-hidden">
      <Suspense>
        <ContactHeroAndLayout />
      </Suspense>
    </main>
  );
}
