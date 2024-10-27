import Image from "next/image";

export default function Missingpage() {
  return (
    <div className="Missing page">
      <Image
        className="error-404"
        src="/static/starwars-404.webp"
        alt="web design"
        objectFit="cover"
        layout="fill"
      />
    </div>
  );
}
