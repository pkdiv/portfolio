"use client"

export default function Experience() {
  const experiences = [
    {
      role: "Network Security Engineer",
      company: "Betsol India Pvt Ltd",
      period: "Jan, 2024 – Present",
      details: [
        "Configured EC2, firewalls, routers, and switches across AWS and data centers.",
        "Deployed Gitea, RANCID, and monitoring stacks (ELK, Zabbix, Prometheus, Grafana).",
        "Led network migrations and documented failover procedures to ensure uptime.",
      ],
    },
    {
      role: "Associate Network Engineer",
      company: "Betsol Software India Ltd",
      period: "Jun 2022 – Jan, 2024",
      details: [
        "Installed and managed packages on offline Linux VMs in isolated environments.",
        "Troubleshot network issues across AWS and data center setups with minimal downtime.",
        "Configured RADIUS and proxy authentication for network and firewall devices.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Vaazu India Pvt Ltd",
      period: "Aug 2021 – Dec, 2021",
      details: [
        "Developed and deployed REST APIs.",
        "Designed and managed AWS RDS (MySQL) database.",
        "Built UI interfaces using PyQt5 for user-friendly access to fingerprint data.",
      ],
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 py-12 pt-16">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
        Experience
      </h2>

      <div className="space-y-10 md:space-y-8 pb-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative pl-4 sm:pl-6 border-l-2 border-gray-300"
          >
            {/* Timeline dot */}
            <div className="absolute -left-2 sm:-left-3 top-1.5 w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-blue-950" />

            {/* Role */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              {exp.role}
            </h3>

            {/* Company & Period */}
            <p className="text-xs sm:text-sm text-gray-600">
              {exp.company} • {exp.period}
            </p>

            {/* Details */}
            <ul className="mt-3 list-disc list-inside text-xs sm:text-sm md:text-base text-gray-700 space-y-1">
              {exp.details.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
