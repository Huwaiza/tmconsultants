"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calculator,
  ChevronRight,
  Clock,
  FileText,
  Mail,
  MapPin,
  Shield,
  Users,
  MessageSquare,
  Target,
  Lightbulb,
  Heart,
  CheckCircle,
  Building2,
  Sparkles,
  Eye,
  Briefcase,
} from "lucide-react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"

import { TaxCalculator } from "@/components/tax-calculator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { HeroGeometric } from "@/components/hero-geometric"

// Section badge component
function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full bg-brand-red/10 px-3 py-1 text-xs font-display font-semibold uppercase tracking-widest text-brand-red border border-brand-red/20 dark:bg-brand-red/20">
      {children}
    </div>
  )
}

// 3D tilt card component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [6, -6])
  const rotateY = useTransform(x, [-100, 100], [-6, 6])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative bg-[#3a5a81] text-white overflow-hidden section-angle-bottom min-h-[600px] flex items-center">
        <HeroGeometric />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-display font-semibold uppercase tracking-widest text-white/80 w-fit"
              >
                Pakistan&#39;s Trusted Tax Consultants
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
              >
                T.M Tax Consultants
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-white/70 leading-relaxed max-w-lg"
              >
                Expert tax solutions for individuals &amp; businesses. Maximize your returns and
                minimize your tax burden with confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-red text-white font-semibold hover:bg-brand-red-dark transition-colors"
                >
                  Get Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Our Services
                </a>
              </motion.div>

              {/* Stats bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="flex flex-wrap gap-8 pt-4 border-t border-white/15 mt-2"
              >
                {[
                  { target: 15, suffix: "+", label: "Years Experience" },
                  { target: 500, suffix: "+", label: "Clients Served" },
                  { target: 100, suffix: "%", label: "Compliance Rate" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-display font-bold text-2xl text-white">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </span>
                    <span className="text-xs text-white/60 font-medium">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: decorative visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-[drift_12s_ease-in-out_infinite]" />
                <div className="absolute inset-8 rounded-full border border-white/15 animate-[drift-slow_18s_ease-in-out_infinite]" />
                <div className="absolute inset-16 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display font-bold text-4xl text-white">T.M</div>
                    <div className="text-xs text-white/60 tracking-widest uppercase mt-1">
                      Tax Consultants
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>About Us</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Your Trusted Tax Partner
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col items-center">
            <div className="space-y-8 max-w-4xl mx-auto w-full">
              <ScrollReveal delay={0.1}>
                <div className="space-y-4 text-muted-foreground text-justify md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  <p>
                    T.M TAX CONSULTANTS is a trusted tax consultancy firm dedicated to providing
                    precise and tailored solutions for individuals and businesses. With extensive
                    expertise across industries, we specialize in tax planning, compliance, and
                    advisory services, ensuring our clients achieve their financial goals while
                    adhering to the latest regulatory standards.
                  </p>
                  <p>
                    Driven by integrity, professionalism, and innovation, we deliver personalized
                    guidance to simplify complex tax matters. Our client-centric approach focuses on
                    building lasting relationships based on trust, transparency, and results.
                  </p>
                  <p>
                    At T.M TAX CONSULTANTS, we are committed to empowering our clients with peace
                    of mind and sustainable financial success.
                  </p>
                  <p className="font-medium text-brand-blue dark:text-brand-blue-light text-center">
                    Your trust. Our expertise.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <ul className="grid gap-2 max-w-md mx-auto">
                  {[
                    "Personalized Tax Solutions",
                    "Industry-Specific Expertise",
                    "Client-Centric Approach",
                    "Regulatory Compliance",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-brand-red" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <div className="space-y-6 mt-12 pt-8 border-t border-border">
                {/* Vision */}
                <ScrollReveal delay={0.1}>
                  <div className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-brand-blue pl-6 py-2">
                    <div className="flex-shrink-0">
                      <div className="rounded-full bg-brand-blue/10 p-4">
                        <Target className="h-8 w-8 text-brand-blue" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-brand-blue dark:text-brand-blue-light mb-2">
                        Vision
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To be the most trusted advisor in every client&#39;s financial journey,
                        transforming tax compliance from a burden into a strategic advantage.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Mission */}
                <ScrollReveal delay={0.2}>
                  <div className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-brand-red pl-6 py-2">
                    <div className="flex-shrink-0">
                      <div className="rounded-full bg-brand-red/10 p-4">
                        <Lightbulb className="h-8 w-8 text-brand-red" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-brand-red mb-2">
                        Mission
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To provide expert, proactive tax strategies and compliance services that
                        minimize liability, maximize opportunity and eliminate stress for our clients.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Core Values */}
                <ScrollReveal delay={0.1}>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="rounded-full bg-brand-blue/10 p-4">
                        <Sparkles className="h-8 w-8 text-brand-blue" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-brand-blue dark:text-brand-blue-light mb-4">
                        Core Values
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-stretch">
                        {[
                          { icon: Heart, label: "Integrity", color: "text-brand-red" },
                          { icon: CheckCircle, label: "Excellence", color: "text-brand-blue dark:text-brand-blue-light" },
                          { icon: Users, label: "Client First", color: "text-brand-red" },
                          { icon: Shield, label: "Confidentiality", color: "text-brand-blue dark:text-brand-blue-light" },
                          { icon: Lightbulb, label: "Innovation", color: "text-brand-red" },
                          { icon: FileText, label: "Compliance & Accountability", color: "text-brand-blue dark:text-brand-blue-light" },
                          { icon: Users, label: "Collaboration", color: "text-brand-red" },
                          { icon: Eye, label: "Clarity & Transparency", color: "text-brand-blue dark:text-brand-blue-light" },
                        ].map((value, index) => {
                          const Icon = value.icon
                          return (
                            <ScrollReveal key={index} delay={index * 0.05} className="h-full">
                              <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-muted hover:bg-accent transition-colors h-full min-h-[80px]">
                                <Icon className={`h-6 w-6 flex-shrink-0 ${value.color}`} />
                                <span className="font-medium text-foreground text-sm text-center leading-tight">
                                  {value.label}
                                </span>
                              </div>
                            </ScrollReveal>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>Our Services</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Comprehensive Tax Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                We offer a wide range of specialized tax services to meet your personal and business
                needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="py-8 space-y-6">
            {/* Income Tax */}
            <ScrollReveal delay={0.05}>
              <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-brand-blue/10 p-3">
                    <FileText className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Income Tax</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    {[
                      "Returns Filing for Individuals, Companies, and Partnerships",
                      "Tax Deduction Certificates (TDS Certificates)",
                      "Advance Tax Payments",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {[
                      "Tax Appeals and Refunds",
                      "Tax Treaty Benefits",
                      "Point of Sale (POS) Integration",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Sales Tax */}
            <ScrollReveal delay={0.1}>
              <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-brand-blue/10 p-3">
                    <Calculator className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Sales Tax</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    {["Sales Tax Registration & Returns Filing", "Input Tax Adjustments"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Sales Tax Refunds</span>
                    </li>
                  </ul>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Federal Excise Duty */}
            <ScrollReveal delay={0.15}>
              <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-brand-blue/10 p-3">
                    <FileText className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Federal Excise Duty</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Excise Duty Registration & Returns Filing",
                    "Excise Duty on Services",
                    "Excise Duty on Goods",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </ScrollReveal>

            {/* Two columns */}
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.2}>
                <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-brand-blue/10 p-3">
                      <Shield className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-display font-bold">Withholding Taxes</h3>
                  </div>
                  <ul className="space-y-2">
                    {["Withholding Tax Compliance", "Withholding Tax Adjustments"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-brand-blue/10 p-3">
                      <Users className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-display font-bold">Customs Duty</h3>
                  </div>
                  <ul className="space-y-2">
                    {["Customs Duty Compliance", "Import & Export Procedures"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.3}>
                <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-brand-blue/10 p-3">
                      <Clock className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-display font-bold">International Tax</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Double Taxation Avoidance Treaties",
                      "International Tax Planning",
                      "Cross-border Transactions",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </ScrollReveal>
              <ScrollReveal delay={0.35}>
                <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-brand-red/10 p-3">
                      <FileText className="h-6 w-6 text-brand-red" />
                    </div>
                    <h3 className="text-xl font-display font-bold">Tax Audits &amp; Investigations</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Representation before tax authorities during audits and investigations",
                      "Dispute resolution and litigation support",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </ScrollReveal>
            </div>

            {/* Intellectual Property */}
            <ScrollReveal delay={0.4}>
              <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-brand-blue/10 p-3">
                    <Shield className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Intellectual Property</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Comprehensive intellectual property services including:
                </p>
                <ul className="grid md:grid-cols-2 gap-2">
                  {["Trade Mark", "Patent", "Design", "Copyright", "Geographical Indications"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </TiltCard>
            </ScrollReveal>

            {/* Company Registration */}
            <ScrollReveal delay={0.45}>
              <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-brand-blue/10 p-3">
                    <Building2 className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Company Registration</h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-2">
                  {[
                    "Registration with Securities and Exchange Commission of Pakistan (SECP)",
                    "Name Reservation",
                    "Issuance of Certificate of Incorporation",
                    "Single Member Company (SMC)",
                    "Private Limited Company",
                    "Partnership",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </ScrollReveal>

            {/* Services For Freelancers */}
            <ScrollReveal delay={0.5}>
              <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-brand-blue/10 p-3">
                    <Briefcase className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Services For Freelancers</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    {[
                      "Foreign Income",
                      "Local Income",
                      "Pakistan Software Export Board (PSEB)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {[
                      "Information Technology (IT)",
                      "IT-enabled Services (ITeS)",
                      "Proceeds Realization Certificate (PRC)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Federal Tax Ombudsman */}
            <ScrollReveal delay={0.55}>
              <TiltCard className="rounded-lg border bg-card p-6 shadow-sm hover:border-brand-red transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-brand-red/10 p-3">
                    <Shield className="h-6 w-6 text-brand-red" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">
                    Federal Tax Ombudsman (FTO) Complaint &amp; Representation Services
                  </h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Filing complaints with the Federal Tax Ombudsman against FBR maladministration",
                    "Representation before FTO for taxpayer grievance redressal",
                    "Follow-up and implementation of FTO recommendations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Slogan Video Section */}
      <section id="slogan" className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>Our Slogan</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Our Commitment to Excellence
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Watch our video to learn more about our mission and values.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mx-auto max-w-3xl mt-8">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border">
                <video className="w-full h-auto" controls poster="/placeholder.svg?height=600&width=800">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Our%20Slogan-Gk16fPHGYyoOhPn9SoAzkm4qyqJiyH.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg font-display font-medium text-brand-blue dark:text-brand-blue-light">
                  &quot;Your trust. Our expertise. Your success.&quot;
                </p>
                <p className="text-muted-foreground mt-2">
                  At T.M Tax Consultants, we&#39;re dedicated to providing exceptional tax services
                  that help our clients achieve financial success.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>Our Team</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Meet Our Experts
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our team of certified professionals is dedicated to providing you with the best tax
                consulting services.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            {[
              {
                src: "/images/design-mode/WEA.jpg.jpeg",
                name: "Tahir Mahmood (ACMA)",
                role: "Founder & Principal Consultant",
                qualification: "ACMA",
                bio: "With over 15 years of experience in tax consulting, Tahir leads our team with expertise in complex tax matters.",
              },
              {
                src: "/images/design-mode/1742284212766.jpg.jpeg",
                name: "Muhammad Yasir Ehsan (ACCA)",
                role: "Senior Tax Consultant",
                qualification: "ACCA",
                bio: "Muhammad Yasir specializes in corporate taxation and has helped numerous businesses optimize their tax strategies.",
              },
              {
                src: "/images/design-mode/1742285757638.jpg.jpeg",
                name: "Muhammad Huwaiza Tahir (BSCS)",
                role: "Tax Compliance Specialist",
                qualification: "BSCS",
                bio: "Muhammad Huwaiza ensures our clients remain compliant with the latest tax regulations and helps navigate complex compliance issues.",
              },
              {
                src: "/images/design-mode/1742289512602.jpg.jpeg",
                name: "Anam Fatima (ACCA)",
                role: "International Tax Consultant",
                qualification: "ACCA",
                bio: "Anam Fatima provides expert guidance on Double Taxation Avoidance Treaties (DTATs). She offers strategic advice on Cross-border Transactions.",
              },
            ].map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.src}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <p className="text-white text-sm font-medium">{member.role}</p>
                        <p className="text-white/70 text-xs mt-1">{member.qualification}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-foreground text-lg">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>Testimonials</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Don&#39;t just take our word for it. Here&#39;s what our satisfied clients have to say.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {[
              {
                text: "T.M Tax Consultants saved me thousands on my business taxes. Their expertise and attention to detail is unmatched.",
                name: "Rifaqat Ali Shah",
                role: "Director",
              },
              {
                text: "I've been using T.M Tax Consultants for 5 years now. They're always available to answer my questions and provide guidance.",
                name: "Rashid Mahmood",
                role: "Senior Engineer",
              },
              {
                text: "When I got audited, T.M Tax Consultants represented me and handled everything professionally. I couldn't be more grateful.",
                name: "Nisar Faiz",
                role: "Junior Engineer",
              },
              {
                text: "Reliable, knowledgeable, and fully up-to-date with Pakistan's complex tax laws — T.M Tax Consultants truly sets the standard for tax consultancy services.",
                name: "Muhammad Asad",
                role: "Civil Engineer",
              },
              {
                text: "We had a good experience with T.M Tax Consultants. The team is highly intelligent and our working relationship has been excellent. Their service is also very fast and efficient.",
                name: "Zahid Mahmood",
                role: "Evaluator",
              },
              {
                text: "T.M Tax Consultants provided exceptional services, making my tax filing process smooth and stress-free. Their team was knowledgeable and professional.",
                name: "Farooq Ahmed",
                role: "Transport Manager",
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.08}>
                <div className="flex flex-col justify-between space-y-4 rounded-xl border border-border bg-card p-6 hover:border-brand-blue/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="space-y-3">
                    <div className="text-6xl font-display text-brand-red/20 leading-none">&quot;</div>
                    <div className="flex gap-1 text-brand-red">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-display font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Returns Section */}
      <section id="tax-returns" className="w-full bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>Persons To File Return</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Persons Required To Furnish A Return Of Income
              </h2>
              <p className="max-w-[900px] text-muted-foreground text-justify md:text-xl/relaxed">
                According to the Income Tax Ordinance 2001, the following persons are required to
                file income tax returns:
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mx-auto max-w-4xl space-y-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-brand-red mt-1 flex-shrink-0" />
                  <span className="text-justify">Every company</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-brand-red mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Every person (other than a company) whose taxable income for the year exceeds the
                    maximum amount that is not chargeable to tax under Income Tax Ordinance 2001 for
                    the year
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-brand-red mt-1 flex-shrink-0" />
                  <span className="text-justify">Any Non-Profit Organization (NPO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-brand-red mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Every person whose income for the year is subject to final taxation under any
                    provision of Income Tax Ordinance 2001
                  </span>
                </li>
                <li className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-brand-red mt-1 flex-shrink-0" />
                    <span>Any person who:</span>
                  </div>
                  <ul className="space-y-3 pl-8">
                    {[
                      "has been charged to tax in respect of any of the two preceding tax years",
                      "claims a loss carried forward under Income Tax Ordinance 2001 for a tax year",
                      "owns immovable property with a land area of 500 square yards or more or owns any flat located in areas falling within the municipal limits existing immediately before the commencement of Local Government laws in the provinces or areas in a Cantonment or the Islamabad Capital Territory (ICT)",
                      "is the holder of commercial or industrial connection of electricity where the amount of annual bill exceeds Rs.500,000",
                      "is a resident person registered with any Chamber of Commerce and Industry or any trade or business association or any market committee or any professional body including Pakistan Engineering Council, Pakistan Medical and Dental Council, Pakistan Bar Council or any Provincial Bar Council, Institute of Chartered Accountants of Pakistan (ICAP) or Institute of Cost and Management Accountants of Pakistan (ICMAP)",
                      "is a resident person being an individual required to file foreign income and assets statement",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-1 flex-shrink-0" />
                        <span className="text-justify text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Registration Documents Section */}
      <section id="registration-docs" className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>Registration Documents</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Documents Required For Registration
              </h2>
              <p className="max-w-[900px] text-muted-foreground text-justify md:text-xl/relaxed">
                The following documents are required for registration with the Federal Board of
                Revenue (FBR) based on the type of taxpayer:
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-4xl space-y-8">
            {[
              {
                title: "DOCUMENTS REQUIRED FOR REGISTRATION OF AN INDIVIDUAL",
                items: [
                  "Original CNIC.",
                  "Cell phone with SIM registered against his own CNIC.",
                  "Personal Email address belonging to him.",
                  "Original certificate of maintenance of personal bank account in his own name.",
                  "Original evidence of tenancy / ownership of business premises, if having a business.",
                  "Original paid utility bill of business premises not older than 3 months, if having a business.",
                ],
              },
              {
                title: "DOCUMENTS REQUIRED FOR REGISTRATION OF AN AOP",
                items: [
                  "Original partnership deed, in case of Firm.",
                  "Original registration certificate from Registrar of Firms, in case of Firm.",
                  "CNICs of all Members / Partners.",
                  "Original letter on letterhead of the AOP signed by all Members / Partners, authorizing anyone of the Members / Partners for Income / Sales Tax Registration.",
                  "Cell phone with SIM registered against his own CNIC but not already registered with the FBR.",
                  "Email address belonging to the AOP.",
                  "Original certificate of maintenance of bank account in AOP's name.",
                  "Original evidence of tenancy / ownership of business premises, if having a business.",
                  "Original paid utility bill of business premises not older than 3 months, if having a business.",
                ],
              },
              {
                title: "DOCUMENTS REQUIRED FOR REGISTRATION OF A COMPANY",
                items: [
                  "Incorporation Certificate of the Company.",
                  "CNICs of all Directors.",
                  "Original letter on letterhead of the company signed by all Directors, verifying the Principal Officer and authorizing him for Income Tax / Sales Tax Registration.",
                  "Cell phone with SIM registered against his own CNIC but not already registered with the FBR.",
                  "Email address belonging to the Company.",
                  "Original certificate of maintenance of bank account in Company's name.",
                  "Original evidence of tenancy / ownership of business premises, if having a business.",
                  "Original paid utility bill of business premises not older than 3 months, if having a business.",
                ],
              },
            ].map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.15}>
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-display font-bold text-brand-blue dark:text-brand-blue-light mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-1 flex-shrink-0" />
                        <span className="text-justify text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Calculator Section */}
      <section id="calculator" className="w-full bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>Tax Calculator</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Calculate Your Tax Liability
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Use our free tax calculator to estimate your income tax based on the latest FBR tax
                slabs for 2025-26.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <TaxCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Tax Laws Section — dark full-bleed background */}
      <section id="tax-laws" className="w-full bg-[#3a5a81] dark:bg-[#2c4a6b] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-display font-semibold uppercase tracking-widest text-white border border-white/20">
                Pakistan Tax Laws &amp; Rules
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-white">
                Understanding Pakistan Tax Laws &amp; Rules
              </h2>
              <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                Access and download the complete texts of Pakistan&#39;s key tax statutes, including
                the Income Tax Ordinance, 2001; Sales Tax Act, 1990; Federal Excise Act, 2005;
                Customs Act, 1969; Income Tax Rules, 2002; Sales Tax Rules, 2006; Federal Excise
                Rules, 2005; and Customs Rules, 2001.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "https://download1.fbr.gov.pk/Docs/2025881983148210Income-Tax-Ordinance,-2001-Amended-upto-31.07.2025.pdf",
                title: "Income Tax Ordinance, 2001",
                date: "Amended up to 31.07.2025",
              },
              {
                href: "https://download1.fbr.gov.pk/Docs/202586148252375SalesTaxActupdatedupto2025-26.pdf",
                title: "Sales Tax Act, 1990",
                date: "Updated up to 2025-26",
              },
              {
                href: "https://download1.fbr.gov.pk/Docs/202588138517680FEDAct,2005withindexupdatedupto30-06-2025.pdf",
                title: "Federal Excise Act, 2005",
                date: "Updated up to 30.06.2025",
              },
              {
                href: "https://download1.fbr.gov.pk/Docs/20258121285942396CustomsAct1969(June2025)-(12.8.25).pdf",
                title: "Customs Act, 1969",
                date: "June 2025 Version",
              },
              {
                href: "https://download1.fbr.gov.pk/Docs/2023112416114319348IncomeTaxRules2002AmendedUpto24.11.2023.pdf",
                title: "Income Tax Rules, 2002",
                date: "Amended up to 24.11.2023",
              },
              {
                href: "https://download1.fbr.gov.pk/Docs/2025881385446623STR-2006-UpdatedUpto06-08-2025(ver-iv).pdf",
                title: "Sales Tax Rules, 2006",
                date: "Updated up to 06.08.2025",
              },
              {
                href: "https://download1.fbr.gov.pk/Docs/2023111018112130929FED-Rules-2005-updated-upto-31.10.2023.pdf",
                title: "Federal Excise Rules, 2005",
                date: "Updated up to 31.10.2023",
              },
              {
                href: "https://download1.fbr.gov.pk/Docs/2023102014103110714Customs-Rules-SRO-450(I)-2001.pdf",
                title: "Customs Rules, 2001",
                date: "SRO 450(I)",
              },
            ].map((doc, index) => (
              <ScrollReveal key={doc.title} delay={index * 0.06}>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition-colors group h-full"
                >
                  <FileText className="w-12 h-12 text-white/80 mb-3 group-hover:text-white transition-colors" />
                  <h3 className="font-display font-semibold text-center mb-2 text-white">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-white/60 text-center">{doc.date}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Online Verifications Section */}
      <section id="verifications" className="w-full bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>Online Verifications</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Verify Tax Status Online
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Access FBR&#39;s IRIS system to verify tax status, registration status, and other
                important information.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border bg-card p-8 shadow-sm">
                <div className="flex flex-col items-center space-y-6">
                  <div className="rounded-full bg-brand-blue/10 p-4">
                    <FileText className="h-10 w-10 text-brand-blue" />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-display font-bold">FBR IRIS Verification Portal</h3>
                    <p className="text-muted-foreground">
                      Verify the authenticity of tax documents, check registration status, and
                      validate tax-related information through the official FBR IRIS portal.
                    </p>
                  </div>
                  <ul className="space-y-2 text-left w-full max-w-md">
                    {[
                      "NTN/STRN Verification",
                      "Tax Payment Verification",
                      "Active Taxpayer Status",
                      "Sales Tax Invoice Verification",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://iris.fbr.gov.pk/#verifications"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-brand-blue px-8 text-sm font-medium text-white shadow transition-colors hover:bg-brand-blue-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Access FBR IRIS Verification Portal
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Latest Tax Updates Section */}
      <section id="tax-updates" className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>Latest Tax Updates</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Stay Informed
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Keep up with the latest tax regulations, deadlines, and policy changes in Pakistan.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-4xl space-y-6">
            {[
              {
                title: "FBR Finance Act, 2025",
                date: "July 1, 2025",
                desc: "The Finance Act, 2025 has introduced major amendments to the Income Tax Ordinance, 2001. These include updates in withholding tax structure, treatment of pensions, capital gains, and digital compliance. These reforms aim to broaden the tax base and simplify compliance for all taxpayers.",
                link: "https://fbr.gov.pk/Budget2025-26/FinanceBill/Finance-Bill-2025.pdf",
                linkText: "FBR Finance Act 2025",
              },
              {
                title: "Amendment in SRO 1724(I)/2024 Regarding Valuation Tables of Immoveable Property of (Karachi)",
                date: "February 11, 2025",
                desc: "In exercise of the powers conferred by sub-section (4) of section 68 of the Income Tax Ordinance, 2001 (XLX of 2001), the Federal Board of Revenue (FBR) has made amendments in its Notification No. S.R.O.1724(l)/2024, dated the 29th October 2024.",
                link: "https://download1.fbr.gov.pk/SROs/20252111624752700SRO144.pdf",
                linkText: "Read official notification",
              },
              {
                title: "Changes to Property Tax Assessment",
                date: "October 29, 2024",
                desc: "The government has announced revisions to property valuation tables for major cities. The new valuation rates will affect capital gains tax calculations and property transfer taxes.",
                link: "https://fbr.gov.pk/valuation-of-immovable-properties/51147/131220",
                linkText: "Check updated valuation tables",
              },
              {
                title: "Withholding Tax Regime (Rates Card) 2025",
                date: "July 1, 2025",
                desc: "It serves as a comprehensive guideline for taxpayers, tax collectors, and withholding agents, detailing the applicable withholding tax rates under various sections of the Income Tax Ordinance, 2001, as updated by the Finance Act, 2025.",
                link: "https://download1.fbr.gov.pk/Docs/20258181281745641WHT-RateCard.pdf",
                linkText: "View Complete Withholding Tax Card",
              },
            ].map((update, index) => (
              <ScrollReveal key={update.title} direction="left" delay={index * 0.1}>
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="rounded-full bg-brand-blue/10 p-3 flex-shrink-0">
                      <FileText className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <h3 className="text-xl font-display font-bold">{update.title}</h3>
                        <span className="inline-flex items-center rounded-full bg-brand-blue/10 text-brand-blue dark:text-brand-blue-light border border-brand-blue/20 px-2 py-0.5 text-xs font-medium whitespace-nowrap">
                          {update.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{update.desc}</p>
                      <div className="pt-2">
                        <Link
                          href={update.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-blue dark:text-brand-blue-light font-medium hover:underline inline-flex items-center"
                        >
                          {update.linkText}
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <div className="flex justify-center mt-8">
              <Link
                href="https://www.fbr.gov.pk/sros"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-brand-blue px-8 text-sm font-medium text-white shadow transition-colors hover:bg-brand-blue-dark"
              >
                View All Tax Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <SectionBadge>Contact Us</SectionBadge>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Get in Touch
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left: contact info */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="rounded-xl border bg-card p-8 shadow-sm h-full">
                <h3 className="text-2xl font-display font-bold text-brand-blue dark:text-brand-blue-light mb-6">
                  We&#39;re Here to Help
                </h3>
                <p className="text-muted-foreground mb-6">
                  Have questions or ready to get started? Reach out to our team today.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-brand-red flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        House 163, Street F179, Block D, DHA Phase 9 Town, DHA, Lahore, Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-brand-red flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">WhatsApp</h4>
                      <div className="flex flex-col gap-1 mt-1">
                        <a
                          href="https://wa.me/923006699423"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-600/10 text-green-700 dark:text-green-400 border border-green-600/20 hover:bg-green-600/20 transition-colors text-sm w-fit"
                        >
                          +923006699423
                        </a>
                        <a
                          href="https://wa.me/923226392423"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-600/10 text-green-700 dark:text-green-400 border border-green-600/20 hover:bg-green-600/20 transition-colors text-sm w-fit"
                        >
                          +923226392423
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-brand-red flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:tmtaxconsultants2@gmail.com"
                        className="text-brand-blue dark:text-brand-blue-light text-sm mt-1 hover:underline"
                      >
                        tmtaxconsultants2@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-brand-red flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Hours</h4>
                      <div className="text-muted-foreground text-sm mt-1 space-y-1">
                        <p>Monday – Thursday: 10am – 10pm</p>
                        <p>Friday: 3pm – 10pm</p>
                        <p>Saturday &amp; Sunday: 10am – 10pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: social links */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="rounded-xl border bg-card p-8 shadow-sm h-full">
                <h3 className="text-2xl font-display font-bold text-brand-blue dark:text-brand-blue-light mb-6">
                  Follow Us
                </h3>
                <p className="text-muted-foreground mb-6">
                  Stay connected with us on social media for the latest tax updates and insights.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      href: "https://www.facebook.com/profile.php?id=61564913033812",
                      label: "Facebook",
                      color: "#1877F2",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://www.instagram.com/tm_tax_consultants/",
                      label: "Instagram",
                      color: "#E4405F",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://www.linkedin.com/company/t-m-tax-consultants/?viewAsMember=true",
                      label: "LinkedIn",
                      color: "#0A66C2",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://www.youtube.com/@TMTaxConsultants",
                      label: "YouTube",
                      color: "#FF0000",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://www.tiktok.com/@tm_tax_consultants",
                      label: "TikTok",
                      color: "#000000",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.41v13.67a2.89 2.89 0 0 1-5.0 1.96 2.89 2.89 0 0 1 2.47-5.18c.34 0 .68.06 1.0.17v-3.52A6.32 6.32 0 0 0 5.4 10.52a6.34 6.34 0 1 0 9.39 8.4v-5.5a8.16 8.16 0 0 0 4.8 1.5v-3.45a4.85 4.85 0 0 1-1.84-.45z" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://x.com/TM_Tax_Con",
                      label: "X (Twitter)",
                      color: "#000000",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.1-6.72-5.85 6.72h-3.306l7.73-8.835L2.882 2.25h6.6l4.759 6.318L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://www.google.com/maps/place/T.M+Tax+Consultants/@31.4363995,74.435064,17z",
                      label: "Google Maps",
                      color: "#4285F4",
                      icon: <MapPin className="h-5 w-5" />,
                    },
                  ].map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-brand-blue/30 hover:bg-accent transition-colors text-sm font-medium"
                      style={{ color: social.color }}
                    >
                      {social.icon}
                      <span className="text-foreground">{social.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
