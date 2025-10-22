'use client'

import React from 'react'
import Image from 'next/image'
import { FadeIn, Float } from './Animated'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-screen flex items-center bg-background">
      {/* Background Glow */}
      <div
        className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full opacity-30 blur-3xl"
        style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
        {/* Left Side - Text */}
        <div className="flex-1">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Hi, I’m Ayush 👋 <br />
              I build full-stack applications & scalable cloud infrastructure
            </h1>
          </FadeIn>

          {/* Animated Roles */}
          <FadeIn delay={0.1}>
            <motion.div
              className="mt-2 text-lg text-primary font-semibold"
              animate={{ opacity: [0, 1, 0], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
            >
              Full-Stack Developer &nbsp;•&nbsp; DevOps Engineer &nbsp;•&nbsp; Cloud Enthusiast
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Passionate about designing interactive web apps and deploying robust, automated cloud solutions using modern technologies.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex gap-3">
              <Button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => window.alert('Contact clicked!')}
              >
                Contact Me
              </Button>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.45}>
            <div className="mt-6 flex gap-4 justify-start text-sm font-medium">
              <a
                href="https://github.com/ayushmishrakth"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ayushmishra9858"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <FadeIn delay={0.6}>
            <div className="mt-12 flex justify-center md:justify-start">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-4 h-4 border-b-2 border-r-2 border-primary rotate-45 mb-2"
              />
            </div>
          </FadeIn>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Float>
            <div className="w-[30rem] h-[20rem] md:w-[36rem] md:h-[24rem] rounded-2xl shadow-xl overflow-hidden border bg-background flex items-center justify-center">
              <Image
                src="/hero-image.png" // Make sure this exists in `public/`
                width={900}
                height={700}
                alt="Full-stack & DevOps Illustration"
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Float>
        </div>
      </div>
    </section>
  )
}
