"use client";
import "@radix-ui/themes/styles.css";
import Subtopic from "./subheader";
import { Separator, Flex } from "@radix-ui/themes";

export default function Services({ ...props }) {
  <Flex direction="column" gap="4">
    <Separator orientation="horizontal" size="1" />
    <Separator orientation="horizontal" size="2" />
    <Separator orientation="horizontal" size="3" />
    <Separator orientation="horizontal" size="4" />
  </Flex>;

  const Maservices = [
    {
      id: "1",
      Solution: "IT Consulting Services",
    },
    {
      id: "2",
      Solution: "Brand Design",
    },
    {
      id: "3",
      Solution: "Graphic Design",
    },
    {
      id: "4",
      Solution: "Digital Marketing",
    },
    {
      id: "5",
      Solution: "Support & Maintenance",
    },
    {
      id: "6",
      Solution: "Web Design & Development",
    },
    {
      id: "7",
      Solution: "Mobile App Development",
    },
    {
      id: "8",
      Solution: "Search Engine Optimisation",
    },
  ];
  return (
    <div className="services flex-col">
      <div className="w-screen block placecenter">
        <Subtopic>What Do We Do. . .</Subtopic>
      </div>

      <div className="flex flex-col space-y-11">
        <div className="flex-col flex">
          <ul {...props} className="h-screen flex-col ">
            {Maservices.map((service) => (
              <li
                key={service.id}
                className="cursor-pointer hover:text-teal-700 h-20 justify-center items-center"
              >
                <div className="text-3xl">
                  <Flex direction="column" gap="4">
                    <Separator orientation="horizontal" size="4" />

                    <p className="text-5xl">{service.Solution}</p>
                  </Flex>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
