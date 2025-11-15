import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>T.M Tax Consultants</title>
        <meta name="description" content="Expert Tax Solutions for Individuals & Businesses" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
