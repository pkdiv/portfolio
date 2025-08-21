"use client";

import { Mail, Linkedin, Github, Twitter, Phone } from "lucide-react"

export default function ContactMeContent() {

    const socials = [
        {
            name: "Email",
            icon: <Mail className="w-6 h-6 text-red-500" />,
            link: "mailto:hello@pkdiv.com",
            info: "hello@pkdiv.com"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-6 h-6 text-blue-600" />,
            link: "https://linkedin.com/in/divyeshpk",
            info: "divyeshpk"
        },
        {
            name: "GitHub",
            icon: <Github className="w-6 h-6 text-gray-800" />,
            link: "https://github.com/pkdiv",
            info: "pkdiv"
        },
        {
            name: "Twitter",
            icon: <Twitter className="w-6 h-6 text-sky-500" />,
            link: "https://twitter.com/pkdiv",
            info: "pkdiv"
        },
    ];

    return (
        <div className="relative z-10 px-8 py-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                Contact Me
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {socials.map((s, idx) => (
                    <a
                        key={idx}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border shadow-md rounded-xl p-6 flex flex-col items-center 
                         transition-transform hover:scale-[1.05] hover:shadow-xl"
                    >
                        {s.icon}
                        <p className="mt-3 font-medium text-gray-700">{s.info}</p>
                        <p className="mt-3 font-small text-gray-700">{s.name}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}
