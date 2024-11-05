import { Separator, Flex } from "@radix-ui/themes";

export default function Startproject() {
  return (
    <div>
      <div className="h-96">
        <Flex direction="column" gap="4">
          <Separator color="yellow" orientation="horizontal" size="4" />
        </Flex>
        <div className="project placecenter flex-col mt-9">
          <p>START A</p>
          <h2 className="mt-16 text-7xl text-center lg:text-8xl headish">
            NEW PROJECT
          </h2>
        </div>
      </div>
      <Flex direction="column" gap="4">
        <Separator color="yellow" orientation="horizontal" size="4" />
      </Flex>
    </div>
  );
}
