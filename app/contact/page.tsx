import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

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
    <div>
      <div className="w-full flex flex-col lg:flex-row landingly min-h-screen px-4 lg:px-0 gap-10">
        <div className="w-full lg:w-2/4 space-y-6 lg:space-y-10">
          <p className="text-xl sm:text-2xl lg:text-4xl">Good things happen when you...</p>
          <div className="text-4xl sm:text-5xl lg:text-7xl">SAY HELLO!!</div>
        </div>

        <div className="w-full lg:w-2/4">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 pt-6 lg:pt-9">
            <label className="">
              Name* :
              <input
                className="mt-3 text-black"
                type="text"
                name="name"
                required
                placeholder="Enter your name here"
              />
            </label>
            <label>
              Email* :
              <input
                type="email"
                name="email"
                required
                className="mt-3  text-black"
              />
            </label>
            <label>
              Company Name* :
              <input
                type="text"
                name="origin"
                required
                className="mt-3  text-black"
              />
            </label>
            <label>
              Budget :
              <input type="number" name="budget" className="mt-3  text-black" />
            </label>
            <label>
              Where did you hear about us?* :
              <input
                type="text"
                name="origin"
                required
                className="mt-3  text-black"
              />
            </label>
            <label className="col-span-full">
              Message :
              <textarea
                className="mb-9 mt-3  text-black"
                name="message"
                required
                placeholder="Enter your Message here"
              ></textarea>
            </label>

            <Button
              type="submit"
              value="Submit"
              className="lg:w-20 bg-yellow-600 text-black text-lg rounded-lg shadow-neutral-950"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
