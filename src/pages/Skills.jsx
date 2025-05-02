"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "Python", "Bash", "PowerShell"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["Node.js", "React", "NextJS", "Express", "Django", "Laravel"],
  },
  {
    category: "Infrastructure & Cloud",
    skills: ["AWS", "Azure", "Google Cloud Platform (GCP)", "Terraform", "Ansible", "AWS CloudFormation"],
  },
  {
    category: "CI/CD & DevOps",
    skills: ["Git", "GitHub Actions", "Docker", "Kubernetes"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Security & Compliance",
    skills: ["Firewalls", "SSL Certificates", "Security Best Practices"],
  },
]

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card h-full bg-secondary/10 backdrop-blur-sm border-secondary/20">
                <div className="card-content pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-secondary/20 text-muted-foreground rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
