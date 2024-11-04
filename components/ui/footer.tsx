import "@radix-ui/themes/styles.css";
import FooterLinks from "@/components/ui/links";
import { Separator, Flex } from "@radix-ui/themes";
import Link from "next/link";
function Footer() {
  return (
    <div className=" border h-72 rounded-md relative mt-8">
      <div className="footing text-center  text-xl  flex flex-row p-5">
        <div className="w-2/5 lg:text-4xl text-left text-base ">
          <p>Follow us on Social Media to Stay Updated</p>
        </div>
        <Flex align="center" gap="4" height="15rem">
          <Separator color="plum" orientation="vertical" size="4" />
        </Flex>
        <div className="flex flex-col w-1/5 justify-center items-center">
          <FooterLinks>
            <Link href="/">Home</Link>
          </FooterLinks>
          <FooterLinks>
            <Link href="/solutions">Solutions</Link>
          </FooterLinks>
          <FooterLinks>
            <Link href="/agency/"> Agency</Link>
          </FooterLinks>
          <FooterLinks>
            <Link href="/contact/"> Contact Us</Link>
          </FooterLinks>
        </div>
        <Flex align="center" gap="4" height="15rem">
          <Separator orientation="vertical" size="4" />
        </Flex>
        <div className="flex flex-col w-1/5 justify-center items-center">
          <FooterLinks>Support</FooterLinks>
          <FooterLinks>FAQ</FooterLinks>
          <FooterLinks>Articles</FooterLinks>
        </div>
        <Flex align="center" gap="4" height="15rem">
          <Separator orientation="vertical" size="4" />
        </Flex>
        <div className="flex flex-col w-1/5 justify-center items-center">
          <FooterLinks>LinkedIn</FooterLinks>
          <FooterLinks>Instagram</FooterLinks>
          <FooterLinks>Tik Tok</FooterLinks>
        </div>
      </div>
      <div className="footnote flex left-1/3 relative text-gray-500 mt-4 bottom-0 ">
        Copyright © 2024 YOGI.Studio. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
