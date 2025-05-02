"use client"

import { motion } from "framer-motion"
import { Crown, Briefcase, Users, Award } from "lucide-react"

const stats = [
  {
    value: "5+",
    label: "Years Experience",
    icon: Crown,
  },
  {
    value: "10+",
    label: "Projects Completed",
    icon: Briefcase,
  },
  {
    value: "20+",
    label: "Satisfied Clients",
    icon: Users,
  },
  {
    value: "3+",
    label: "Certifications",
    icon: Award,
  },
]

export default function Stats() {
  return (
    <section className="py-16 grid-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-secondary/10 backdrop-blur-sm rounded-lg border border-secondary/20"
            >
              <stat.icon className="h-8 w-8 text-primary mb-4" />
              <span className="text-4xl font-bold">{stat.value}</span>
              <span className="text-muted-foreground text-sm mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
