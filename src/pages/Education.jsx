"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "Master Of Business Administration (MBA)",
    institution: "Dr D. Y. Patil Vidyapeeth (Online Centre)",
    location: "India",
    year: "August 2022",
    type: "degree",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Université Gamal Abdel Nasser de Conakry (UGANC)",
    location: "Guinea",
    year: "July 2019",
    type: "degree",
  },
]

const certifications = [
  {
    name: "Junior Cybersecurity Analyst",
    issuer: "Certificate",
    date: "March 2024",
  },
  {
    name: "Big DATA Hadoop & Spark Developer Training",
    issuer: "Certificate",
    date: "December 2023",
  },
  {
    name: "Introduction to Cloud Computing",
    issuer: "Certificate",
    date: "November 2023",
  },
]

export default function Education() {
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
          <h2 className="text-3xl font-bold">Education & Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold">Academic Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card bg-secondary/10 backdrop-blur-sm border-secondary/20">
                    <div className="card-header">
                      <h3 className="card-title text-lg">{edu.degree}</h3>
                    </div>
                    <div className="card-content">
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex justify-between mt-2">
                        <span className="text-muted-foreground text-sm">{edu.location}</span>
                        <span className="text-muted-foreground text-sm">{edu.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <Award className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card bg-secondary/10 backdrop-blur-sm border-secondary/20">
                    <div className="card-header">
                      <h3 className="card-title text-lg">{cert.name}</h3>
                    </div>
                    <div className="card-content">
                      <p className="text-primary font-medium">{cert.issuer}</p>
                      <div className="flex justify-end mt-2">
                        <span className="text-muted-foreground text-sm">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
