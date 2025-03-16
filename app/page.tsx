"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import { useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { ParallaxSection } from "@/components/animations/parallax-section"
import { ScrollSection, ScrollItem } from "@/components/animations/scroll-section"
import { HoverCard } from "@/components/animations/hover-card"
import { SectionHeading } from "@/components/ui/section-heading"

export default function Home() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        anchor.origin + anchor.pathname === window.location.origin + window.location.pathname
      ) {
        e.preventDefault()
        const targetId = anchor.hash.slice(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          })

          // Update URL without scrolling
          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.9])

  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        style={{ opacity: headerOpacity }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-bold text-xl"
          >
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              C
            </div>
            Consulto
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex gap-6"
          >
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <ThemeToggle />
            <AnimatedButton asChild className="hidden md:flex">
              <Link href="#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </AnimatedButton>
            <MobileNav />
          </motion.div>
        </div>
      </motion.header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute -z-10 top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            />
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-2"
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      Strategic Consulting
                    </span>{" "}
                    for Business Growth
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We help businesses transform challenges into opportunities with data-driven strategies and expert
                    guidance.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <AnimatedButton asChild size="lg">
                    <Link href="#contact">
                      Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton variant="outline" size="lg">
                    <Link href="#services">Explore Services</Link>
                  </AnimatedButton>
                </motion.div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2} className="flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-md opacity-30"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                    width={550}
                    height={550}
                    alt="Business team collaborating on strategy"
                    className="rounded-lg object-cover relative z-10"
                    priority
                  />
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
          <ParallaxSection
            direction="down"
            className="absolute -z-10 top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          />
          <ParallaxSection
            direction="up"
            className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          />
          <div className="container px-4 md:px-6">
            <SectionHeading
              label="Our Services"
              title="Comprehensive Business Solutions"
              subtitle="We offer a range of specialized services designed to help your business thrive in today's competitive landscape."
              centered
            />
            <ScrollSection className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <ScrollItem>
                <HoverCard className="grid gap-4 p-6 bg-background rounded-lg shadow-sm h-full">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
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
                        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                        <path d="M13 5v2" />
                        <path d="M13 17v2" />
                        <path d="M13 11v2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Strategic Planning</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Develop comprehensive business strategies aligned with your goals and market opportunities.
                  </p>
                  <motion.div whileHover={{ x: 5 }} className="mt-auto">
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                </HoverCard>
              </ScrollItem>
              <ScrollItem>
                <HoverCard className="grid gap-4 p-6 bg-background rounded-lg shadow-sm h-full">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
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
                        <path d="M3 3v18h18" />
                        <path d="m19 9-5 5-4-4-3 3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Market Analysis</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Gain insights into market trends, competitor landscapes, and customer behaviors to inform decisions.
                  </p>
                  <motion.div whileHover={{ x: 5 }} className="mt-auto">
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                </HoverCard>
              </ScrollItem>
              <ScrollItem>
                <HoverCard className="grid gap-4 p-6 bg-background rounded-lg shadow-sm h-full">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Organizational Development</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Optimize your organizational structure, culture, and processes for maximum efficiency and growth.
                  </p>
                  <motion.div whileHover={{ x: 5 }} className="mt-auto">
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                </HoverCard>
              </ScrollItem>
            </ScrollSection>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-grid-primary/20 bg-[length:20px_20px] mask-fade-out"
          />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal className="flex flex-col justify-center space-y-4">
                <SectionHeading
                  label="About Us"
                  title="Trusted Advisors for Business Excellence"
                  subtitle="With over 15 years of experience, we've helped hundreds of businesses across industries achieve sustainable growth and operational excellence."
                />
                <ScrollSection className="space-y-2" delay={0.3}>
                  <ScrollItem className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Data-driven approach to problem-solving</p>
                  </ScrollItem>
                  <ScrollItem className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Customized strategies for your unique challenges</p>
                  </ScrollItem>
                  <ScrollItem className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Experienced consultants across diverse industries</p>
                  </ScrollItem>
                  <ScrollItem className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Proven track record of delivering results</p>
                  </ScrollItem>
                </ScrollSection>
                <ScrollItem>
                  <AnimatedButton asChild>
                    <Link href="#team">Meet Our Team</Link>
                  </AnimatedButton>
                </ScrollItem>
              </ScrollReveal>
              <FadeIn direction="up" className="flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-lg blur-md opacity-70"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                    width={550}
                    height={550}
                    alt="Business professionals in a meeting"
                    className="rounded-lg object-cover relative z-10"
                  />
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
          <ParallaxSection
            direction="up"
            speed={0.1}
            className="absolute -z-10 top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          />
          <ParallaxSection
            direction="down"
            speed={0.15}
            className="absolute -z-10 bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          />
          <div className="container px-4 md:px-6">
            <SectionHeading
              label="Testimonials"
              title="What Our Clients Say"
              subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
              centered
            />
            <ScrollSection className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <ScrollItem>
                <HoverCard className="grid gap-4 p-6 bg-background rounded-lg shadow-sm h-full">
                  <div className="flex flex-col gap-2">
                    <div className="flex text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      "Consulto transformed our business strategy, resulting in a 30% increase in revenue within the
                      first year. Their insights were invaluable."
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                      width={40}
                      height={40}
                      alt="Client"
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
                    </div>
                  </div>
                </HoverCard>
              </ScrollItem>
              <ScrollItem>
                <HoverCard className="grid gap-4 p-6 bg-background rounded-lg shadow-sm h-full">
                  <div className="flex flex-col gap-2">
                    <div className="flex text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      "The organizational restructuring led by Consulto helped us streamline operations and reduce costs
                      by 25%. Highly recommended."
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                      width={40}
                      height={40}
                      alt="Client"
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">COO, Global Manufacturing Ltd.</p>
                    </div>
                  </div>
                </HoverCard>
              </ScrollItem>
              <ScrollItem>
                <HoverCard className="grid gap-4 p-6 bg-background rounded-lg shadow-sm h-full">
                  <div className="flex flex-col gap-2">
                    <div className="flex text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      "Working with Consulto gave us the clarity and direction we needed during a critical growth phase.
                      Their expertise was instrumental to our success."
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                      width={40}
                      height={40}
                      alt="Client"
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Emily Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Founder, Innovate Solutions</p>
                    </div>
                  </div>
                </HoverCard>
              </ScrollItem>
            </ScrollSection>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-grid-primary/10 bg-[length:20px_20px] mask-fade-out"
          />
          <div className="container px-4 md:px-6">
            <SectionHeading
              label="Our Team"
              title="Meet Our Experts"
              subtitle="Our team of experienced consultants brings diverse expertise to solve your most complex business challenges."
              centered
            />
            <ScrollSection className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <ScrollItem>
                <HoverCard className="grid gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop"
                      width={300}
                      height={300}
                      alt="Team Member"
                      className="aspect-square object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold">David Mitchell</h3>
                    <p className="text-muted-foreground">Founder & CEO</p>
                  </div>
                </HoverCard>
              </ScrollItem>
              <ScrollItem>
                <HoverCard className="grid gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                      width={300}
                      height={300}
                      alt="Team Member"
                      className="aspect-square object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold">Jennifer Lee</h3>
                    <p className="text-muted-foreground">Strategic Planning Director</p>
                  </div>
                </HoverCard>
              </ScrollItem>
              <ScrollItem>
                <HoverCard className="grid gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                      width={300}
                      height={300}
                      alt="Team Member"
                      className="aspect-square object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold">Robert Taylor</h3>
                    <p className="text-muted-foreground">Market Analysis Lead</p>
                  </div>
                </HoverCard>
              </ScrollItem>
              <ScrollItem>
                <HoverCard className="grid gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                      width={300}
                      height={300}
                      alt="Team Member"
                      className="aspect-square object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold">Sophia Williams</h3>
                    <p className="text-muted-foreground">Organizational Development Specialist</p>
                  </div>
                </HoverCard>
              </ScrollItem>
            </ScrollSection>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
          <ParallaxSection
            direction="up"
            speed={0.1}
            className="absolute -z-10 top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          />
          <ParallaxSection
            direction="down"
            speed={0.15}
            className="absolute -z-10 bottom-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          />
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
                <SectionHeading
                  label="Contact Us"
                  title="Get in Touch"
                  subtitle="Ready to transform your business? Contact us today to schedule a consultation with our expert team."
                />
                <ScrollSection className="space-y-4" delay={0.3}>
                  <ScrollItem className="flex items-center gap-2">
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
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </ScrollItem>
                  <ScrollItem className="flex items-center gap-2">
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
                      className="h-5 w-5 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <p className="font-medium">info@consulto.com</p>
                  </ScrollItem>
                  <ScrollItem className="flex items-center gap-2">
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
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="font-medium">123 Business Ave, Suite 500, New York, NY 10001</p>
                  </ScrollItem>
                </ScrollSection>
              </FadeIn>
              <FadeIn
                direction="right"
                delay={0.2}
                className="flex flex-col gap-4 rounded-lg bg-background p-6 shadow-sm"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="grid gap-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="first-name" className="text-sm font-medium leading-none">
                        First name
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="last-name" className="text-sm font-medium leading-none">
                        Last name
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="company" className="text-sm font-medium leading-none">
                      Company
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      id="company"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                </motion.div>
                <AnimatedButton type="submit" className="w-full">
                  Submit
                </AnimatedButton>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  C
                </div>
                Consulto
              </div>
              <p className="text-sm text-muted-foreground">
                Strategic consulting services to help businesses achieve sustainable growth and operational excellence.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Strategic Planning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Market Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Organizational Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Process Optimization
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Consulto. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

