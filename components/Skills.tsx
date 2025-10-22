'use client'

import React from 'react'
import { motion } from 'framer-motion'

const fullStackSkills = [
  { name: 'Next.js', level: 90 },
  { name: 'React', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'REST API', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
]

const devOpsSkills = [
  { name: 'AWS', level: 85 },
  { name: 'Docker', level: 90 },
  { name: 'Kubernetes', level: 80 },
  { name: 'Terraform', level: 75 },
  { name: 'CI/CD', level: 90 },
  { name: 'Prometheus & Grafana', level: 80 },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-background flex flex-col items-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12"
      >
        My <span className="text-primary">Skills</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-16 max-w-5xl w-full px-6 justify-center">
        {/* Full-Stack Skills */}
        <div className="flex-1 text-left">
          <h3 className="text-xl font-semibold mb-6">Full-Stack Development</h3>
          <div className="space-y-4">
            {fullStackSkills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-105 transform transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps & Cloud Skills */}
        <div className="flex-1 text-left">
          <h3 className="text-xl font-semibold mb-6">DevOps & Cloud</h3>
          <div className="space-y-4">
            {devOpsSkills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full group-hover:scale-105 transform transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
