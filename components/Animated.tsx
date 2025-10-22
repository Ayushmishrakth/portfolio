// components/Animated.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

type WrapperProps = {
  children: React.ReactNode
  className?: string
}

export const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: WrapperProps & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const Float = ({ children, className = '' }: WrapperProps) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    }}
    className={className}
  >
    {children}
  </motion.div>
)

export default FadeIn
