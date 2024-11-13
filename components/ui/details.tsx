/*
"use client";
import React, { useState } from "react";
import "@radix-ui/themes/styles.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Persons = [
  {
    message:
      "Great work, communicaion was timely and clear.I am in awe of the results. Highly recommend",
    name: "Njoroge Muiruri",
    designation: "Founder, Kyu.Firm",
    picture: "https://github.com/shadcn.png",
    id: 1,
  },
  {
    message:
      "Over the years, The Agency Creative have worked with us on everything from brand design, video, photography, copy, online and print. Projects are always approached with enthusiasm, care and a focus to deliver on-time and within the agreed budget",
    name: "Brian Mwangi",
    designation: "Founder, Mwakie Visuals",
    picture: "https://github.com/shadcn.png",
    id: 2,
  },
  {
    message:
      "I worked with the team to create our branding and website for our Restaurant. The Agency Creative helped us to create this by understanding what we wanted to achieve. Our branding that we achieved is exactly what we set out to achieve and we are very happy with all of the work. I would highly recommend The Agency Creative",
    name: "Kaggia Nganga",
    designation: "Managing Director, Hatespeare",
    picture: "https://github.com/shadcn.png",
    id: 3,
  },
];

export default function Titros() {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

  const currentPerson = Persons[currentPersonIndex];

  const handleNext = () => {
    setCurrentPersonIndex((prevIndex) => (prevIndex + 1) % Persons.length);
  };

  const handlePrevious = () => {
    setCurrentPersonIndex(
      (prevIndex) => (prevIndex - 1 + Persons.length) % Persons.length
    );
  };

  /*useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPersonIndex((prevIndex) => (prevIndex + 1) % Persons.length);
    }, 10000); // Change person every 10 seconds

    return () => clearInterval(interval);
  }, []);

  */

/*
  return (
    <div className=" flex relative mb-4">
      <div
        key={currentPerson.id}
        className="flex flex-col items-center space-x-4"
      >
        <div className="flex-grow text-sm text-gray-500">
          <p className="text-xl">{currentPerson.message}</p>
        </div>
        <div className="testimonials-info">
          <Avatar className="mr-3">
            <AvatarImage src={currentPerson.picture} />
            <AvatarFallback>{currentPerson.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-grow text-sm text-gray-500">
            <p className="font-semibold">{currentPerson.name}</p>
            <p className="text-xs">{currentPerson.designation}</p>
          </div>
        </div>
        <div className="mt-2 flex relative flex-col  justify-end">
          <button onClick={handleNext} className="mb-2">
            Next
          </button>
          <button onClick={handlePrevious} className="mt-2">
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}

*/
import { cn } from "../../lib/utils";
import Marquee from "./marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={img}
          alt=""
          className="rounded-full"
          width="32"
          height="32"
        ></Image>

        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} />*/}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeDemo;
