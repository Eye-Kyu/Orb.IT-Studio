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
