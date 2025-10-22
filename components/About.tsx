'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Float } from './Animated'

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-12"
    >
      {/* Left side: Text */}
      <div className="flex-1 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
        >
          Hi, I’m <span className="text-primary">Ayush</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-6 max-w-lg"
        >
          I develop <strong>full-stack web applications</strong> and manage <strong>scalable cloud infrastructure</strong>.  
          Experienced in Next.js, Node.js, MongoDB, AWS, Kubernetes, Terraform, CI/CD pipelines, and monitoring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button size="lg" onClick={() => window.alert('Contact clicked!')}>
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Right side: Floating avatar */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Float>
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 shadow-xl flex items-center justify-center overflow-hidden border border-border">
            <span className="text-muted-foreground text-lg font-medium">
              DevOps & Full-Stack
            </span>
          </div>
        </Float>
      </div>
    </section>
  )
}
