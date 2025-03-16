import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Consulto | Strategic Business Consulting",
    template: "%s | Consulto",
  },
  description: "Professional consulting services to help your business grow and succeed",
  keywords: ["consulting", "business strategy", "organizational development", "market analysis"],
  authors: [{ name: "Consulto" }],
  creator: "Consulto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://consulto.com",
    title: "Consulto | Strategic Business Consulting",
    description: "Professional consulting services to help your business grow and succeed",
    siteName: "Consulto",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Consulto - Strategic Business Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulto | Strategic Business Consulting",
    description: "Professional consulting services to help your business grow and succeed",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'