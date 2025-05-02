"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 grid-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <div className="space-y-6">
              <span className="inline-block text-pink-500">
                <span className="text-muted-foreground">{"<span>"}</span>
                Hey, I&apos;m Yamoussa KEITA
                <span className="text-muted-foreground">{"</span>"}</span>
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-primary">{"{Cloud, AI & Blockchain}"}</span>
                <br /> Engineer
              </h1>

              <p className="text-muted-foreground max-w-lg">
                <span className="text-pink-500">{"<p>"}</span> With expertise in cutting-edge technologies such as
                <span className="text-primary"> JavaScript</span>, <span className="text-primary">Python</span>,{" "}
                <span className="text-primary">React</span>, and <span className="text-primary">NextJS</span>. I deliver
                cloud solutions that are both innovative and robust.
                <span className="text-pink-500">{"</p>"}</span>
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {["AWS", "Azure", "NodeJS", "React", "NextJS", "Laravel", "Django"].map((tech, index) => (
                  <div key={index} className="tech-icon">
                    <span className="text-primary">{tech}</span>
                  </div>
                ))}
              </div>

              <a href="/docs/cv.pdf" download className="btn btn-default btn-lg inline-flex gap-2 mt-8">
                <Download className="h-4 w-4" />
                Download My CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative hexagon bg-gradient-to-br from-primary/20 to-pink-500/20 w-64 h-64 md:w-80 md:h-80 overflow-hidden flex items-center justify-center">
              <img
                src="/images/profile.png?height=100&width=400"
                alt="Yamoussa KEITA"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-6 bg-primary rounded-full p-4">
                <span className="text-xl font-bold text-primary-foreground">&lt;/&gt;</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
