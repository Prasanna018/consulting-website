import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              C
            </div>
            Consulto
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/#team" className="text-sm font-medium hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="/#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Consulto</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're a team of experienced consultants dedicated to helping businesses achieve sustainable growth and
                  operational excellence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                width={550}
                height={550}
                alt="Our Story"
                className="rounded-lg object-cover"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Story</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Founded in 2008, Consulto began with a simple mission: to provide businesses with the strategic
                    guidance they need to thrive in an increasingly complex marketplace.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Over the past 15 years, we've grown from a small team of three consultants to a diverse group of
                    experts serving clients across industries and continents.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 lg:order-last">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Approach</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We believe in a collaborative, data-driven approach to consulting. We don't just provide
                    recommendations—we work alongside your team to implement solutions and drive measurable results.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Deep industry expertise</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Data-driven methodologies</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Collaborative implementation</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Measurable outcomes</p>
                  </div>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                width={550}
                height={550}
                alt="Our Approach"
                className="rounded-lg object-cover lg:order-first"
              />
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-muted rounded-lg">
                <div className="text-4xl font-bold text-primary">500+</div>
                <h3 className="text-xl font-bold">Clients Served</h3>
                <p className="text-muted-foreground">Across diverse industries and markets</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-muted rounded-lg">
                <div className="text-4xl font-bold text-primary">15+</div>
                <h3 className="text-xl font-bold">Years of Experience</h3>
                <p className="text-muted-foreground">Delivering exceptional consulting services</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-muted rounded-lg">
                <div className="text-4xl font-bold text-primary">30+</div>
                <h3 className="text-xl font-bold">Expert Consultants</h3>
                <p className="text-muted-foreground">With specialized industry knowledge</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These core principles guide everything we do at Consulto.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col space-y-2 p-6 bg-background rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every project, delivering results that exceed expectations.
                </p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-background rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty, transparency, and the highest ethical standards.
                </p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-background rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace creative thinking and innovative approaches to solve complex challenges.
                </p>
              </div>
              <div className="flex flex-col space-y-2 p-6 bg-background rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work as partners with our clients, fostering collaborative relationships built on trust.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Work With Us?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to schedule a consultation with our expert team.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
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
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Strategic Planning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Market Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Organizational Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Process Optimization
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#team" className="text-muted-foreground hover:text-foreground">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
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

