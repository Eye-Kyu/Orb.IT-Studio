import { Button } from "./button";

export default function Intouch() {
  return (
    <div className="w-screen h-screen lg:h-[60vh]">
      <div className="intouch flex-col items-center justify-center text-center lg:text-wrap lg:m-auto my-40">
        <div className="lg:text-7xl lg:text-nowrap text-5xl text-wrap">
          TALK WITH US
        </div>
        <div className="lg:w-screen w-11/12 m-auto">
          <p className="mb-20 text-center flex text-wrap lg:mr-28 lg:ml-9">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            exercitationem expedita doloribus voluptatibus atque pariatur
            officiis voluptatem a optio ea, nihil vel similique nam quas
            veritatis eum deserunt qui. Debitis.
          </p>
        </div>

        <p>Drop us a line at</p>
        <div className="lg:text-6xl text-teal-600 text-5xl">
          <Button className="lg:text-6xl text-teal-600 text-5xl" variant="link">
            hello@Yogi.studio
          </Button>
        </div>
      </div>
    </div>
  );
}
