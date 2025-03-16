"use client"

import type React from "react"

import { motion } from "framer-motion"

interface HoverCardProps {
  children: React.ReactNode
  className?: string
}

export function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

