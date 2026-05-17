import FooterLinks from "@/components/ui/links";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border rounded-md relative mt-8 px-4 py-6 lg:px-8">
      <div className="footing flex flex-col lg:flex-row gap-8 lg:gap-0 text-center lg:text-left">
        {/* Social media tagline */}
        <div className="lg:w-2/5 lg:text-4xl text-xl font-light lg:text-left text-center">
          <p>Follow us on Social Media to Stay Updated</p>
        </div>

        {/* Divider — hidden on mobile */}
        <div className="hidden lg:flex lg:w-px lg:bg-plum lg:mx-6 lg:self-stretch" />

        {/* Site links */}
        <div className="flex flex-col lg:w-1/5 justify-center items-center gap-1">
          <FooterLinks>
            <Link href="/">Home</Link>
          </FooterLinks>
          <FooterLinks>
            <Link href="/solutions">Solutions</Link>
          </FooterLinks>
          <FooterLinks>
            <Link href="/agency/">Agency</Link>
          </FooterLinks>
          <FooterLinks>
            <Link href="/contact/">Contact Us</Link>
          </FooterLinks>
        </div>

        <div className="hidden lg:flex lg:w-px lg:bg-border lg:mx-6 lg:self-stretch" />

        {/* Support links */}
        <div className="flex flex-col lg:w-1/5 justify-center items-center gap-1">
          <FooterLinks>Support</FooterLinks>
          <FooterLinks>FAQ</FooterLinks>
          <FooterLinks>Articles</FooterLinks>
        </div>

        <div className="hidden lg:flex lg:w-px lg:bg-border lg:mx-6 lg:self-stretch" />

        {/* Social links */}
        <div className="flex flex-col lg:w-1/5 justify-center items-center gap-1">
          <FooterLinks>LinkedIn</FooterLinks>
          <FooterLinks>Instagram</FooterLinks>
          <FooterLinks>TikTok</FooterLinks>
        </div>
      </div>

      {/* Copyright */}
      <div className="footnote flex justify-center lg:justify-start text-gray-500 mt-6 text-sm">
        Copyright &copy; 2024 Studio Mizan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
