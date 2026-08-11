import type { Metadata } from "next";
import Missingpage from "@/components/ui/missingPage";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return <Missingpage />;
}
