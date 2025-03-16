"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ]

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                C
              </div>
              Consulto
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <motion.nav className="flex flex-col p-6" variants={menuVariants} initial="hidden" animate="visible">
            {menuItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors py-4 border-b flex items-center justify-between"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <motion.div whileHover={{ x: 5 }} className="h-5 w-5 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          <div className="mt-auto p-6 border-t">
            <Button asChild className="w-full" onClick={() => setOpen(false)}>
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

