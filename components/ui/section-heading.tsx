"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
  label?: string
  className?: string
  labelClassName?: string
  centered?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  label,
  className = "",
  labelClassName = "",
  centered = false,
}: SectionHeadingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`space-y-2 ${centered ? "text-center" : ""} ${className}`}
    >
      {label && (
        <motion.div
          variants={itemVariants}
          className={`inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground ${labelClassName}`}
        >
          {label}
        </motion.div>
      )}
      <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
        {title}
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className={`${centered ? "max-w-[900px] mx-auto" : "max-w-[600px]"} text-muted-foreground md:text-xl`}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  )
}

