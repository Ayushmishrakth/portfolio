'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const mockProjects = [
  {
    title: 'Full-Stack E-Commerce App',
    desc: 'Next.js + Node.js + MongoDB. Features authentication, cart, and payment integration.',
    image: '/ecommerce.png',
    link: 'https://github.com/Ayushmishrakth/website-clone.git',
  },
  {
    title: 'Social Media Web App',
    desc: 'React + Node.js + PostgreSQL. Real-time chat and interactive feed using WebSockets.',
    image: '/social.png',
    link: '#', // Add actual link if available
  },
  {
    title: 'Observability & Alerting System',
    desc: 'Prometheus, Grafana, Loki; automated deployment with Docker Compose.',
    image: '/observability.png',
    link: 'https://github.com/Ayushmishrakth/monitoring-stack.git',
  },
  {
    title: 'CI/CD Pipeline Automation',
    desc: 'Jenkins, GitHub Actions, Terraform; reduced deployment time by 35%.',
    image: '/cicd.png',
    link: 'https://github.com/Ayushmishrakth/ci-pipeline.git', 
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Showcasing full-stack applications and DevOps projects demonstrating modern web development, automation, and cloud expertise.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="group relative overflow-hidden border border-border/40 backdrop-blur-xl bg-card/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="relative w-full h-48 rounded-xl overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center text-white text-sm font-medium">
                      {p.desc}
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {p.title.includes('DevOps') || p.title.includes('CI/CD') ? 'DevOps Project' : 'Full-Stack Project'}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
