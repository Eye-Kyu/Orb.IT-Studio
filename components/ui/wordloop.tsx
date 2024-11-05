import { ReactNode } from "react";
import { Separator, Flex } from "@radix-ui/themes";

interface wordloopProps {
  children: ReactNode;
}
export default function Wordloop({ children }: wordloopProps) {
  return (
    <div className="my-20">
      <Flex direction="column" gap="4">
        <Separator color="yellow" orientation="horizontal" size="4" />
      </Flex>
      <div className="text-5xl lg:text-7xl">{children}</div>
      <Flex direction="column" gap="4">
        <Separator color="yellow" orientation="horizontal" size="4" />
      </Flex>
    </div>
  );
}
