"use client"

import { motion } from "framer-motion"

export default function About() {
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
          <h2 className="text-3xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">Professional Profile</h3>
            <p className="text-muted-foreground">
              I am a professional specialized in designing, developing, and deploying cloud-based IT solutions,
              integrating artificial intelligence (AI) technologies and Web3 (Blockchain) development.
            </p>
            <p className="text-muted-foreground">
              With a strong background in full-stack development and cloud architecture, I deliver innovative solutions
              that help businesses leverage cutting-edge technologies to solve complex problems and achieve their goals.
            </p>
            <p className="text-muted-foreground">
              My expertise spans across multiple domains including cloud infrastructure, AI implementation, and
              blockchain development, allowing me to provide comprehensive solutions that address the evolving needs of
              modern businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">My Approach</h3>
            <p className="text-muted-foreground">
              I believe in a holistic approach to technology solutions, focusing on not just the technical
              implementation but also the business value and user experience. My work is guided by the following
              principles:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Building scalable and maintainable solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Embracing innovation while ensuring reliability</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Prioritizing security and performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Continuous learning and adaptation to emerging technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Collaborative problem-solving with clients and teams</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
