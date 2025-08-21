import Link from "next/link";
import Image from "next/image";

const width = 25;
const height = 25;

export default function Content() {
  return (
    <div className="w-full md:w-1/2 h-auto md:h-screen py-20 md:py-40 px-6 md:px-30 flex flex-col justify-center items-center md:items-start text-center md:text-left">
      {/* Name */}
      <span className="block text-3xl sm:text-4xl md:text-7xl lg:text-8xl">
        Divyesh P K
      </span>

      {/* Role */}
      <span className="block text-xl sm:text-2xl md:text-3xl py-3 md:py-5">
        Network Security Engineer
      </span>

      {/* Tagline */}
      <div className="block text-sm sm:text-base py-2 max-w-md">
        Crafting thoughtful, scalable systems that blend innovation with precision.  
        Driven to create resilient solutions that inspire and endure.
      </div>

      {/* Social Links */}
      <div className="mt-8 md:absolute md:bottom-40 flex gap-5">
        <Link href="https://github.com/pkdiv" target="_blank">
          <Image
            src="github.svg"
            alt="pkdiv's github profile"
            width={width}
            height={height}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/divyeshpk/" target="_blank">
          <Image
            src="linkedin.svg"
            alt="pkdiv's linkedin profile"
            width={width}
            height={height}
          />
        </Link>
        <Link href="mailto:hello@pkdiv.com">
          <Image
            src="email.svg"
            alt="pkdiv's email"
            width={width}
            height={height}
          />
        </Link>
      </div>
    </div>
  );
}
