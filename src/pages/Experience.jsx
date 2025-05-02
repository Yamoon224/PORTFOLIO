"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Tech Lead",
    company: "DIRECT IMPACT PARTNERS",
    location: "Abidjan",
    period: "March 2025 - Present",
    responsibilities: [
      "Architecture of AI solutions",
      "Design of blockchain solutions",
      "Development of ERP applications",
    ],
  },
  {
    title: "IT Consultant",
    company: "GROUP MAFAMO",
    location: "Conakry",
    period: "April 2025 - Present",
    responsibilities: [
      "Implementation of hotel reservation site and ERP system",
      "Monitoring and maintenance of the site and system (admin.groumafamo.com & groupmafamo.com)",
    ],
  },
  {
    title: "IT Consultant",
    company: "JAGUAR SECURITY SERVICES",
    location: "Conakry",
    period: "October 2020 - Present",
    responsibilities: [
      "Implementation of showcase site and ERP system",
      "Monitoring and maintenance of the portal and system (admin.jss-gn.com & jss-gn.com)",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "ORTRA-TECH",
    location: "Abidjan",
    period: "October 2022 - March 2025",
    responsibilities: [
      "Development of Web, Mobile application and API (BARAPAY)",
      "Web development of a Sports Betting site (BESTOBET)",
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Professional Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card h-full bg-secondary/10 backdrop-blur-sm border-secondary/20">
                <div className="card-header">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="card-title text-xl">{exp.title}</h3>
                      <p className="text-primary font-medium mt-1">{exp.company}</p>
                    </div>
                    <span className="badge badge-outline">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{exp.location}</p>
                </div>
                <div className="card-content">
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
