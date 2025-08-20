import Link from "next/link";
import Image from "next/image"

const width = 25;
const height = 25;


export default function Content() {
    return (
        <div className="w-1/2 h-screen py-40 px-30">
            <span className="block text-8xl">
                Divyesh P K
            </span>
            <span className="block text-3xl py-5 pl-2">
                Network Security Engineer
            </span>
            <div className="block text-base py-2 pl-2">
                Crafting thoughtful, scalable systems that blend innovation with precision.
                Driven to create resilient solutions that inspire and endure.
            </div>
            <div className="absolute bottom-40 flex gap-5 pl-2">
                <Link href="https://github.com/pkdiv" target="_blank">
                    <Image src="github.svg" alt="pkdiv's github profile" width={width} height={height} />
                </Link>
                <Link href="https://www.linkedin.com/in/divyeshpk/" target="_blank">
                    <Image src="linkedin.svg" alt="pkdiv's linkedin profile" width={width} height={height} />
                </Link>
                <Link href="mailto:hello@pkdiv.com">
                    <Image src="email.svg" alt="pkdiv's linkedin profile" width={width} height={height} className="text-gray-900 hover:text-pink-500"  />
                </Link>
            </div>
        </div>
    )
}