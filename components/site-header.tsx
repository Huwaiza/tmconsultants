"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import ScrollToSection from "@/components/scroll-to-section"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const complianceItems = [
  { label: "Who Must File Return", href: "/#tax-returns" },
  { label: "Registration Documents", href: "/#registration-docs" },
]

const resourceItems = [
  { label: "Tax Laws & Rules", href: "/#tax-laws" },
  { label: "Online Verifications", href: "/#verifications" },
  { label: "Latest Tax Updates", href: "/#tax-updates" },
  { label: "FAQs", href: "/faqs" },
]

function DropdownNav({
  label,
  items,
}: {
  label: string
  items: { label: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md transition-colors",
          open ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
        )}
      >
        {label}
        <ChevronDown
          className={cn("h-3 w-3 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full mt-1.5 z-50 w-52 rounded-md border border-border bg-popover shadow-lg overflow-hidden"
          >
            <ul className="grid gap-0.5 p-1.5">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.startsWith("/#") ? href.substring(2) : href.startsWith("#") ? href.substring(1) : null
    if (targetId) {
      const el = document.getElementById(targetId)
      if (el) {
        e.preventDefault()
        setMobileOpen(false)
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 300)
        return
      }
    }
    setMobileOpen(false)
  }

  return (
    <>
      <ScrollToSection />
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-background"
        )}
      >
        <div className="flex h-16 md:h-20 items-center justify-between max-w-7xl mx-auto px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/design-mode/Logo.jpg.jpeg"
              alt="T.M Tax Consultants"
              width={120}
              height={48}
              className="h-10 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="/#about"
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              About
            </a>
            <a
              href="/#services"
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="/#team"
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Our Team
            </a>
            <DropdownNav label="Compliance" items={complianceItems} />
            <DropdownNav label="Resources" items={resourceItems} />
            <a
              href="/#calculator"
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Tax Tools
            </a>
            <a
              href="/#contact"
              className="text-sm font-medium px-4 py-2 rounded-md bg-brand-blue text-white hover:bg-brand-blue-dark transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Right side: theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-border bg-background"
            >
              <nav className="px-4 py-4 flex flex-col gap-1 max-w-7xl mx-auto">
                {[
                  { label: "About", href: "/#about" },
                  { label: "Services", href: "/#services" },
                  { label: "Our Team", href: "/#team" },
                  { label: "Tax Tools", href: "/#calculator" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleMobileNavClick(e, item.href)}
                    className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-accent transition-colors"
                  >
                    {item.label}
                  </a>
                ))}

                {/* Compliance accordion */}
                <div>
                  <button
                    onClick={() =>
                      setExpandedMobile(expandedMobile === "compliance" ? null : "compliance")
                    }
                    className="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium hover:bg-accent transition-colors flex items-center justify-between"
                  >
                    <span>Compliance</span>
                    <span className="text-muted-foreground text-xs">
                      {expandedMobile === "compliance" ? "▲" : "▼"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {expandedMobile === "compliance" && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {complianceItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleMobileNavClick(e, item.href)}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Resources accordion */}
                <div>
                  <button
                    onClick={() =>
                      setExpandedMobile(expandedMobile === "resources" ? null : "resources")
                    }
                    className="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium hover:bg-accent transition-colors flex items-center justify-between"
                  >
                    <span>Resources</span>
                    <span className="text-muted-foreground text-xs">
                      {expandedMobile === "resources" ? "▲" : "▼"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {expandedMobile === "resources" && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {resourceItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleMobileNavClick(e, item.href)}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="/#contact"
                  onClick={(e) => handleMobileNavClick(e, "/#contact")}
                  className="mt-2 px-4 py-2.5 rounded-md bg-brand-blue text-white text-sm font-medium text-center hover:bg-brand-blue-dark transition-colors"
                >
                  Contact Us
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
