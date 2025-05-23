import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div>
      <div className="w-screen flex flex-col lg:flex-row landingly h-screen">
        <div className="w-screen lg:w-2/4 space-y-10">
          <p className="text-2xl lg:text-4xl">Good things happen when you...</p>
          <div className="lg:text-7xl text-6xl">SAY HELLO!!</div>
        </div>

        <div className="w-screen lg:w-2/4">
          <form className="grid grid-cols-2 gap-10 pt-9">
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
