import type React from "react"
import type { Metadata } from "next"
import { Jost, Urbanist } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
})

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
})

export const metadata: Metadata = {
  title: "Rainsong Ngoutsop - Software Engineer",
  description:
    "Professional portfolio of Rainsong Ngoutsop, a software engineer with expertise in React.js, TypeScript, and modern web technologies.",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Rainsong Ngoutsop - Software Engineer",
    description:
      "Professional portfolio of Rainsong Ngoutsop, a software engineer with expertise in React.js, TypeScript, and modern web technologies.",
    url: "https://rainsong-portfolio.vercel.app",
    siteName: "Rainsong Ngoutsop",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rainsong Ngoutsop - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainsong Ngoutsop - Software Engineer",
    description:
      "Professional portfolio of Rainsong Ngoutsop, a software engineer with expertise in React.js, TypeScript, and modern web technologies.",
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          html {
            font-family: ${jost.style.fontFamily};
            --font-sans: ${urbanist.variable};
            --font-mono: ${jost.variable};
          }
        `}</style>
      </head>
      <body className={`${urbanist.variable} ${jost.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
