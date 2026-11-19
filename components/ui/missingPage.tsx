import Image from "next/image";
import Link from "next/link";

export default function Missingpage() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-6 px-4 text-center">
      <Image
        src="/static/starwars-404.webp"
        alt="Page not found"
        width={480}
        height={480}
        className="h-auto w-full max-w-md object-cover"
        priority
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-neutral-500">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-full border border-neutral-700 px-6 py-2 text-sm uppercase tracking-widest transition-colors hover:border-teal-500 hover:text-teal-500 lg:text-base"
      >
        Back home
      </Link>
    </div>
  );
}
