import "@radix-ui/themes/styles.css";
import FooterLinks from "@/components/ui/links";
import { Separator, Flex } from "@radix-ui/themes";
function Footer() {
  <Flex align="center" gap="4" height="96px">
    <Separator orientation="vertical" size="1" />
    <Separator orientation="vertical" size="2" />
    <Separator orientation="vertical" size="3" />
    <Separator orientation="vertical" size="4" />
  </Flex>;

  return (
    <div className=" border-black border h-72 rounded-md relative mt-8">
      <div className="footing text-center  text-xl text-gray-950  flex flex-row p-5">
        <div className="w-2/5 text-4xl text-left ">
          <p>Follow us on Social Media to Stay Updated</p>
        </div>
        <Flex align="center" gap="4" height="15rem">
          <Separator orientation="vertical" size="4" />
        </Flex>
        <div className="flex flex-col w-1/5 justify-center items-center">
          <FooterLinks>Home</FooterLinks>
          <FooterLinks>Services</FooterLinks>
          <FooterLinks>Products</FooterLinks>
          <FooterLinks>About Us</FooterLinks>
        </div>
        <Flex align="center" gap="4" height="15rem">
          <Separator orientation="vertical" size="4" />
        </Flex>
        <div className="flex flex-col w-1/5 justify-center items-center">
          <FooterLinks>Support</FooterLinks>
          <FooterLinks>FAQ</FooterLinks>
          <FooterLinks>Articles</FooterLinks>
          <FooterLinks>Contact Us</FooterLinks>
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
        Copyright © 2023 Orb.IT Studio. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
