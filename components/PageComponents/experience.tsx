"use client"

export default function Experience() {
  const experiences = [
    {
      role: "Network Security Engineer",
      company: "Betsol India Pvt Ltd",
      period: "Jan, 2024 – Present",
      details: [
        "Configured EC2, firewalls,  routers, and switches across AWS and data centers.",
        "Deployed Gitea, RANCID, and monitoring stacks (ELK, Zabbix, Prometheus, Grafana)",
        "Led network migrations and documented failover procedures to ensure uptime ."
      ],
    },
    {
      role: "Associate Network Engineer",
      company: "Betsol Software India Ltd",
      period: "Jun 2022 – Jan, 2024",
      details: [
        "Installed and managed packages on offline Linux VMs in isolated environments.",
        "Troubleshot network issues across AWS and data center setups with minimal downtime.",
        "Configured RADIUS and proxy authentication for network and firewall devices."
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Vaazu India Pvt Ltd",
      period: "Aug 2021 – Dec, 2021",
      details: [
        "Developed and deployed REST APIs",
        "Designed and managed AWS RDS (MySQL) database",
        "Built UI interfaces using PyQt5 for user-friendly access to fingerprint data",
      ],
    },
  ];

  return (
    <div className="px-8 py-12 pt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>

      <div className="space-y-8 pb-16">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-gray-300">
            <div className="absolute -left-3 top-1.5 w-5 h-5 rounded-full bg-blue-950" />
            <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
            <p className="text-sm text-gray-600">{exp.company} • {exp.period}</p>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
              {exp.details.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
