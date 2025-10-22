'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const experiences = [
  {
    company: 'Klypto App',
    role: 'Freelance DevOps Engineer',
    period: 'July 2025 – Sept 2025',
    points: [
      'Deployed and managed cloud-native applications on AWS, ensuring high availability and minimal downtime.',
      'Automated CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline.',
      'Implemented infrastructure monitoring and alerting with Prometheus and Grafana.',
      'Managed GitOps workflows with enhanced IAM policies and secrets management.',
    ],
  },
  {
    company: 'Startups Squad',
    role: 'Software Intern',
    period: 'Oct 2025 – Present',
    points: [
      'Contributing to full-stack and DevOps projects for the startup’s SaaS platform.',
      'Helping with container orchestration, CI/CD pipelines, and cloud deployment automation.',
      'Collaborating with the engineering team to optimize infrastructure and monitoring.',
    ],
  },
  {
    company: 'Clouds Analytics',
    role: 'Cloud & DevOps Intern',
    period: 'Apr 2025 – Jun 2025',
    points: [
      'Automated infrastructure provisioning with AWS CloudFormation and Hetzner Cloud.',
      'Built a custom observability stack using Prometheus, Grafana, Loki, Tempo, and Alloy.',
      'Implemented centralized logging and tracing across microservices.',
    ],
  },
  {
    company: 'StudyPointKloud Solutions LLP',
    role: 'DevOps Intern',
    period: 'Jan 2024 – Jun 2024',
    points: [
      'Developed cloud solutions on GCP using Terraform with secure IAM roles and encryption policies.',
      'Automated container deployment and scaling on Kubernetes clusters.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12"
        >
          My <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-border/40 backdrop-blur-xl bg-card/60 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
