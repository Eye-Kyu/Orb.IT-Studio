import { Button } from "./button";

export default function Intouch() {
  return (
    <div className="w-full lg:h-[60vh] px-4 lg:px-0">
      <div className="intouch flex-col items-center justify-center text-center lg:text-wrap lg:m-auto my-20 lg:my-40">
        <div className="lg:text-7xl lg:text-nowrap text-3xl sm:text-4xl text-wrap">
          TALK WITH US
        </div>
        <div className="w-full lg:w-3/4 m-auto mt-6">
          <p className="mb-12 lg:mb-20 text-center text-wrap">
            Have a project in mind or want to learn more about what Studio Mizan
            can do for you? Reach out — we&apos;d love to hear from you.
          </p>
        </div>

        <p>Drop us a line at</p>
        <div className="lg:text-5xl text-teal-600 text-3xl sm:text-4xl">
          <Button className="lg:text-5xl text-teal-600 text-3xl sm:text-4xl" variant="link">
            hello@studiomizan.com
          </Button>
        </div>
      </div>
    </div>
  );
}
