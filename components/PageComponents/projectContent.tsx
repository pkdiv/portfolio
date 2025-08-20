"use client";

import { Github } from "lucide-react";

export default function ProjectContent() {
    const projects = [
        {
            title: "Conway’s Game of Life",
            description:
                "A browser-based version of Conway's Game of Life using Python - pyodide",
            github: "https://github.com/yourusername/conway-game",
            demo: "https://conwaygol.pkdiv.com/",
        },
    ];

    return (


        <div className="relative z-10 px-8 py-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-[1.02]"
                    >
                        <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                        <p className="text-gray-600 mb-4">{proj.description}</p>
                        <div className="flex space-x-4">
                            {proj.github && (
                                <a
                                    href={proj.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:underline"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    GitHub
                                </a>
                            )}
                            {proj.demo && (
                                <a
                                    href={proj.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
