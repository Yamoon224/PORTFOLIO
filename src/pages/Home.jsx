"use client"

import { useEffect } from "react"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div>
      <Hero />
      <Stats />
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Welcome to My Portfolio</h2>
            <p className="text-muted-foreground mb-6">
              I am a professional specialized in designing, developing, and deploying cloud-based IT solutions,
              integrating artificial intelligence (AI) technologies and Web3 (Blockchain) development.
            </p>
            <p className="text-muted-foreground">
              Explore my portfolio to learn more about my skills, experience, and projects.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
