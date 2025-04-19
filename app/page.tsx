"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calculator, ChevronRight, Clock, FileText, Mail, MapPin, Shield, Users, MessageSquare, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TaxCalculator } from "@/components/tax-calculator"
import ScrollToSection from "@/components/scroll-to-section"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Add the scroll handler component */}
      <ScrollToSection />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 md:h-20 items-center justify-between px-2 md:px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-O4IcwhGPwUjnEHmSYrqEuEwfkz0Jli.jpeg"
              alt="T.M Tax Consultants Logo"
              width={180}
              height={72}
              className="h-10 md:h-14 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center">
            <div className="flex gap-2 lg:gap-4">
              <Link
                href="#about"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </Link>
              <Link
                href="#slogan"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("slogan")}
              >
                Our Slogan
              </Link>
              <Link
                href="#team"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("team")}
              >
                Our Team
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </Link>
              <Link
                href="#tax-returns"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("tax-returns")}
              >
                Persons To File Return
              </Link>
              <Link
                href="#registration-docs"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("registration-docs")}
              >
                Registration Documents
              </Link>
              <Link
                href="#calculator"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("calculator")}
              >
                Tax Calculator
              </Link>
              <Link
                href="#verifications"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("verifications")}
              >
                Online Verifications
              </Link>
              <Link
                href="#tax-updates"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("tax-updates")}
              >
                Latest Tax Updates
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Link>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
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
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <nav className="container px-2 flex flex-col space-y-3">
              <Link
                href="#about"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </Link>
              <Link
                href="#slogan"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("slogan")}
              >
                Our Slogan
              </Link>
              <Link
                href="#team"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("team")}
              >
                Our Team
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </Link>
              <Link
                href="#tax-returns"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("tax-returns")}
              >
                Persons To File Return
              </Link>
              <Link
                href="#registration-docs"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("registration-docs")}
              >
                Registration Documents
              </Link>
              <Link
                href="#calculator"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("calculator")}
              >
                Tax Calculator
              </Link>
              <Link
                href="#verifications"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("verifications")}
              >
                Online Verifications
              </Link>
              <Link
                href="#tax-updates"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("tax-updates")}
              >
                Latest Tax Updates
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Rest of the page content remains the same */}
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#3a5a81] to-[#4a6fa5] py-6 md:py-10 lg:py-14">
        <div className="container px-2 md:px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Tahir Mahmood Tax Consultants
            </h1>
            <p className="text-xl font-medium text-white md:text-2xl">
              Expert Tax Solutions for Individuals & Businesses
            </p>
            <p className="max-w-[600px] mx-auto text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Maximize your returns and minimize your tax burden with our professional tax consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Trusted Tax Partner</h2>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="space-y-4 text-gray-500 text-justify md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <p>
                  T.M TAX CONSULTANTS is a trusted tax consultancy firm dedicated to providing precise and tailored
                  solutions for individuals and businesses. With extensive expertise across industries, we specialize in
                  tax planning, compliance, and advisory services, ensuring our clients achieve their financial goals
                  while adhering to the latest regulatory standards.
                </p>
                <p>
                  Driven by integrity, professionalism, and innovation, we deliver personalized guidance to simplify
                  complex tax matters. Our client-centric approach focuses on building lasting relationships based on
                  trust, transparency, and results.
                </p>
                <p>
                  At T.M TAX CONSULTANTS, we are committed to empowering our clients with peace of mind and sustainable
                  financial success.
                </p>
                <p className="font-medium text-[#3a5a81] text-center">Your trust. Our expertise.</p>
              </div>
              <ul className="grid gap-2 mt-6 max-w-md mx-auto">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-[#e63946]" />
                  <span>Personalized Tax Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-[#e63946]" />
                  <span>Industry-Specific Expertise</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-[#e63946]" />
                  <span>Client-Centric Approach</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-[#e63946]" />
                  <span>Regulatory Compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Tax Solutions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a wide range of specialized tax services to meet your personal and business needs.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl py-12 space-y-12">
            {/* Income Tax */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-[#3a5a81]/10 p-3">
                  <FileText className="h-6 w-6 text-[#3a5a81]" />
                </div>
                <h3 className="text-2xl font-bold">Income Tax</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Returns Filing for Individuals, Companies, and Partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Tax Deduction Certificates (TDS Certificates)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Advance Tax Payments</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Tax Appeals and Refunds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Tax Treaty Benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Point of Sale (POS) Integration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sales Tax */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-[#3a5a81]/10 p-3">
                  <Calculator className="h-6 w-6 text-[#3a5a81]" />
                </div>
                <h3 className="text-2xl font-bold">Sales Tax</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Sales Tax Registration & Returns Filing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Input Tax Adjustments</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Sales Tax Refunds</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Federal Excise Duty */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-[#3a5a81]/10 p-3">
                  <FileText className="h-6 w-6 text-[#3a5a81]" />
                </div>
                <h3 className="text-2xl font-bold">Federal Excise Duty</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                  <span>Excise Duty Registration & Returns Filing</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                  <span>Excise Duty on Services</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                  <span>Excise Duty on Goods</span>
                </li>
              </ul>
            </div>

            {/* Two columns for smaller service categories */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Withholding Taxes */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-[#3a5a81]/10 p-3">
                    <Shield className="h-6 w-6 text-[#3a5a81]" />
                  </div>
                  <h3 className="text-xl font-bold">Withholding Taxes</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Withholding Tax Compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Withholding Tax Adjustments</span>
                  </li>
                </ul>
              </div>

              {/* Customs Duty */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-[#3a5a81]/10 p-3">
                    <Users className="h-6 w-6 text-[#3a5a81]" />
                  </div>
                  <h3 className="text-xl font-bold">Customs Duty</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Customs Duty Compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Import & Export Procedures</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Another two columns for remaining service categories */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* International Tax */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-[#3a5a81]/10 p-3">
                    <Clock className="h-6 w-6 text-[#3a5a81]" />
                  </div>
                  <h3 className="text-xl font-bold">International Tax</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Double Taxation Avoidance Treaties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>International Tax Planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Cross-border Transactions</span>
                  </li>
                </ul>
              </div>

              {/* Tax Audits & Investigations */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-[#e63946]/10 p-3">
                    <FileText className="h-6 w-6 text-[#e63946]" />
                  </div>
                  <h3 className="text-xl font-bold">Tax Audits & Investigations</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Representation before tax authorities during audits and investigations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Dispute resolution and litigation support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-[#3a5a81]/10 p-3">
                  <Shield className="h-6 w-6 text-[#3a5a81]" />
                </div>
                <h3 className="text-2xl font-bold">Intellectual Property</h3>
              </div>
              <p className="mb-4 text-gray-600">Comprehensive intellectual property services including:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                  <span>Trade Mark</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                  <span>Patent</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                  <span>Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                  <span>Copyright</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                  <span>Geographical Indications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Video Section */}
      <section id="slogan" className="w-full py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">Our Slogan</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Commitment to Excellence
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Watch our video to learn more about our mission and values.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-12">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <video className="w-full h-auto" controls poster="/placeholder.svg?height=600&width=800">
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slogan%281080%20x%201350%20px%29-aNYHwarE7zFtxfenbgjTzagfMGGKvL.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium text-[#3a5a81]">"Your trust. Our expertise. Your success."</p>
              <p className="text-gray-500 mt-2">
                At T.M Tax Consultants, we're dedicated to providing exceptional tax services that help our clients
                achieve financial success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Experts</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of certified professionals is dedicated to providing you with the best tax consulting services.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WEA.jpg-oN4Xotfh0KtGaVZpGjQlZ6yDG4gXt7.jpeg"
                  alt="Tahir Mahmood"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Tahir Mahmood (ACMA)</h3>
                <p className="text-sm text-gray-500">Founder & Principal Consultant</p>
              </div>
              <p className="text-center text-gray-500">
                With over 15 years of experience in tax consulting, Tahir leads our team with expertise in complex tax
                matters.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1742284212766.jpg-HJ9bXTDXOXzX8bTWbkF5bjwrB7V907.jpeg"
                  alt="Muhammad Yasir Ehsan"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Muhammad Yasir Ehsan (ACCA)</h3>
                <p className="text-sm text-gray-500">Senior Tax Consultant</p>
              </div>
              <p className="text-center text-gray-500">
                Muhammad Yasir specializes in corporate taxation and has helped numerous businesses optimize their tax
                strategies.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1742285757638.jpg-bzFKPSQRUJvC0QGhWJQGfL2wiHa8EA.jpeg"
                  alt="Muhammad Huwaiza Tahir"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Muhammad Huwaiza Tahir (BSCS)</h3>
                <p className="text-sm text-gray-500">Tax Compliance Specialist</p>
              </div>
              <p className="text-center text-gray-500">
                Muhammad Huwaiza ensures our clients remain compliant with the latest tax regulations and helps navigate
                complex compliance issues.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1742289512602.jpg-uLJcvZsprTXCIZGPKDymKPhbl1P2in.jpeg"
                  alt="Anam Fatima"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Anam Fatima (ACCA)</h3>
                <p className="text-sm text-gray-500">International Tax Consultant</p>
              </div>
              <p className="text-center text-gray-500">
                Anam Fatima provides expert guidance on Double Taxation Avoidance Treaties (DTATs). She offers strategic
                advice on Cross-border Transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our satisfied clients have to say.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex gap-1 text-[#e63946]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500">
                  "T.M Tax Consultants saved me thousands on my business taxes. Their expertise and attention to detail
                  is unmatched."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-1">
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
                    className="h-8 w-8 text-gray-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Rifaqat Ali Shah</p>
                  <p className="text-sm text-gray-500">Director</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex gap-1 text-[#e63946]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500">
                  "I've been using T.M Tax Consultants for 5 years now. They're always available to answer my questions
                  and provide guidance."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-1">
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
                    className="h-8 w-8 text-gray-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Rashid Mahmood</p>
                  <p className="text-sm text-gray-500">Senior Engineer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex gap-1 text-[#e63946]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500">
                  "When I got audited, T.M Tax Consultants represented me and handled everything professionally. I
                  couldn't be more grateful."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-1">
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
                    className="h-8 w-8 text-gray-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Nisar Faiz</p>
                  <p className="text-sm text-gray-500">Junior Engineer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex gap-1 text-[#e63946]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500">
                  "T.M Tax Consultants provided exceptional services, making my tax filing process smooth and
                  stress-free. Their team was knowledgeable and professional."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-1">
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
                    className="h-8 w-8 text-gray-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Farooq Ahmed</p>
                  <p className="text-sm text-gray-500">Transport Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persons Required To Furnish A Return Of Income Section */}
      <section id="tax-returns" className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">
                Persons To File Return
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Persons Required To Furnish A Return Of Income
              </h2>
              <p className="max-w-[900px] text-gray-500 text-justify md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                According to the Income Tax Ordinance 2001, the following persons are required to file income tax
                returns:
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                <span className="text-justify">Every company</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                <span className="text-justify">
                  Every person (other than a company) whose taxable income for the year exceeds the maximum amount that
                  is not chargeable to tax under Income Tax Ordinance 2001 for the year
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                <span className="text-justify">Any Non-Profit Organization (NPO)</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                <span className="text-justify">
                  Every person whose income for the year is subject to final taxation under any provision of Income Tax
                  Ordinance 2001
                </span>
              </li>
              <li className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span>Any person who:</span>
                </div>
                <ul className="space-y-3 pl-8">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                    <span>has been charged to tax in respect of any of the two preceding tax years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                    <span>claims a loss carried forward under Income Tax Ordinance 2001 for a tax year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                    <span className="text-justify">
                      owns immovable property with a land area of 500 square yards or more or owns any flat located in
                      areas falling within the municipal limits existing immediately before the commencement of Local
                      Government laws in the provinces or areas in a Cantonment or the Islamabad Capital Territory (ICT)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                    <span>
                      owns immoveable property with a land area of 500 square yards or more located in a rating area
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                    <span>owns a flat having covered area of 2000 square feet or more located in a rating area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                    <span>owns a motor vehicle having engine capacity above 1000 CC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                    <span>has obtained National Tax Number (NTN)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                    <span className="text-justify">
                      is the holder of commercial or industrial connection of electricity where the amount of annual
                      bill exceeds Rs.500,000
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                    <span className="text-justify">
                      is a resident person registered with any Chamber of Commerce and Industry or any trade or business
                      association or any market committee or any professional body including Pakistan Engineering
                      Council, Pakistan Medical and Dental Council, Pakistan Bar Council or any Provincial Bar Council,
                      Institute of Chartered Accountants of Pakistan (ICAP) or Institute of Cost and Management
                      Accountants of Pakistan (ICMAP)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                    <span>
                      is a resident person being an individual required to file foreign income and assets statement
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Documents Required For Registration Section */}
      <section id="registration-docs" className="w-full bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">
                Registration Documents
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Documents Required For Registration
              </h2>
              <p className="max-w-[900px] text-gray-500 text-justify md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The following documents are required for registration with the Federal Board of Revenue (FBR) based on
                the type of taxpayer:
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            {/* Individual Registration */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3a5a81] mb-4">
                DOCUMENTS REQUIRED FOR REGISTRATION OF AN INDIVIDUAL
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">Original CNIC.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">Cell phone with SIM registered against his own CNIC.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">Personal Email address belonging to him.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original certificate of maintenance of personal bank account in his own name.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original evidence of tenancy / ownership of business premises, if having a business.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original paid utility bill of business premises not older than 3 months, if having a business.
                  </span>
                </li>
              </ul>
            </div>

            {/* AOP Registration */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3a5a81] mb-4">DOCUMENTS REQUIRED FOR REGISTRATION OF AN AOP</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">Original partnership deed, in case of Firm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original registration certificate from Registrar of Firms, in case of Firm.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">CNICs of all Members / Partners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original letter on letterhead of the AOP signed by all Members / Partners, authorizing anyone of the
                    Members / Partners for Income / Sales Tax Registration.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Cell phone with SIM registered against his own CNIC but not already registered with the FBR.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">Email address belonging to the AOP.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original certificate of maintenance of bank account in AOP's name.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original evidence of tenancy / ownership of business premises, if having a business.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original paid utility bill of business premises not older than 3 months, if having a business.
                  </span>
                </li>
              </ul>
            </div>

            {/* Company Registration */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#3a5a81] mb-4">
                DOCUMENTS REQUIRED FOR REGISTRATION OF A COMPANY
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">Incorporation Certificate of the Company.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">CNICs of all Directors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original letter on letterhead of the company signed by all Directors, verifying the Principal
                    Officer and authorizing him for Income Tax / Sales Tax Registration.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Cell phone with SIM registered against his own CNIC but not already registered with the FBR.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">Email address belonging to the Company.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original certificate of maintenance of bank account in Company's name.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original evidence of tenancy / ownership of business premises, if having a business.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-[#e63946] mt-1 flex-shrink-0" />
                  <span className="text-justify">
                    Original paid utility bill of business premises not older than 3 months, if having a business.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Calculator Section */}
      <section id="calculator" className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">Tax Calculator</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Calculate Your Tax Liability
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Use our free tax calculator to estimate your income tax based on the latest FBR tax slabs for 2024-25.
              </p>
            </div>
          </div>
          <TaxCalculator />
        </div>
      </section>

      {/* Online Verifications Section */}
      <section id="verifications" className="w-full bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">
                Online Verifications
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Verify Tax Status Online</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Access FBR's IRIS system to verify tax status, registration status, and other important information.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center space-y-6">
                <div className="rounded-full bg-[#3a5a81]/10 p-4">
                  <FileText className="h-10 w-10 text-[#3a5a81]" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold">FBR IRIS Verification Portal</h3>
                  <p className="text-gray-500">
                    Verify the authenticity of tax documents, check registration status, and validate tax-related
                    information through the official FBR IRIS portal.
                  </p>
                </div>
                <ul className="space-y-2 text-left w-full max-w-md">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>NTN/STRN Verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Tax Payment Verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Active Taxpayer Status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                    <span>Sales Tax Invoice Verification</span>
                  </li>
                </ul>
                <Link
                  href="https://iris.fbr.gov.pk/#verifications"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#3a5a81] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#2c4a6b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  Access FBR IRIS Verification Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Tax Updates Section */}
      <section id="tax-updates" className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">
                Latest Tax Updates
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Informed</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Keep up with the latest tax regulations, deadlines, and policy changes in Pakistan.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            {/* Update 1 */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="rounded-full bg-[#3a5a81]/10 p-3 flex-shrink-0">
                  <FileText className="h-6 w-6 text-[#3a5a81]" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h3 className="text-xl font-bold">Further Amendments in the Sales Tax Rules, 2006</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">April 8, 2025</span>
                  </div>
                  <p className="text-gray-600">
                    In exercise of the powers conferred by sub-section (l) of section 4, sub-section (2A) of section 6
                    and section 40 of the Federal Excise Act, 2005 and sub-section (l) of section 50 of the Sales Tax
                    Act, 1990, read with section 26 thereof, the Federal Board of Revenue (FBR) has made further
                    amendments in the Sales Tax Rules, 2006.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="https://download1.fbr.gov.pk/SROs/2025491445056689SRO578.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3a5a81] font-medium hover:underline inline-flex items-center"
                    >
                      Read official notification
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Update 2 */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="rounded-full bg-[#3a5a81]/10 p-3 flex-shrink-0">
                  <FileText className="h-6 w-6 text-[#3a5a81]" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h3 className="text-xl font-bold">
                      Amendment in SRO 1724(I)/2024 Regarding Valuation Tables of lmmoveable Property of (Karachi)
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">February 11, 2025</span>
                  </div>
                  <p className="text-gray-600">
                    In exercise of the powers conferred by sub-section (4) of section 68 of the Income Tax Ordinance,
                    2001 (XLX of 2001), the Federal Board of Revenue (FBR) has made amendments in its Notification No.
                    S.R.O.1724(l)/2024, dated the 29th Octobet 2024.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="https://download1.fbr.gov.pk/SROs/20252111624752700SRO144.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3a5a81] font-medium hover:underline inline-flex items-center"
                    >
                      Read official notification
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Update 3 */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="rounded-full bg-[#3a5a81]/10 p-3 flex-shrink-0">
                  <FileText className="h-6 w-6 text-[#3a5a81]" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h3 className="text-xl font-bold">Changes to Property Tax Assessment</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">October 29, 2024</span>
                  </div>
                  <p className="text-gray-600">
                    The government has announced revisions to property valuation tables for major cities. The new
                    valuation rates will affect capital gains tax calculations and property transfer taxes.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="https://fbr.gov.pk/valuation-of-immovable-properties/51147/131220"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3a5a81] font-medium hover:underline inline-flex items-center"
                    >
                      Check updated valuation tables
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Update 4 */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="rounded-full bg-[#3a5a81]/10 p-3 flex-shrink-0">
                  <FileText className="h-6 w-6 text-[#3a5a81]" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h3 className="text-xl font-bold">Withholding Tax Regime (Rates Card) 2024</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">July 1, 2024</span>
                  </div>
                  <p className="text-gray-600">
                    It serves as a comprehensive guideline for taxpayers, tax collectors, and withholding agents,
                    detailing the applicable withholding tax rates under various sections of the Income Tax Ordinance,
                    2001, as updated by the Finance Act, 2024.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="https://download1.fbr.gov.pk/Docs/20248211184455183WithholdingTaxRegimeRatesCard2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3a5a81] font-medium hover:underline inline-flex items-center"
                    >
                      View Complete Withholding Tax Card
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link
                href="https://www.fbr.gov.pk/sros"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#3a5a81] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#2c4a6b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                View All Tax Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e63946] px-3 py-1 text-sm text-white">Contact Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            </div>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center space-y-6">
                <div className="space-y-2 text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#3a5a81]">We're Here to Help</h3>
                  <p className="text-gray-500">Have questions or ready to get started? Reach out to our team today.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#e63946] flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-500">
                        House 163, Street F179, Block D, DHA Phase 9 Town, DHA, Lahore, Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-[#e63946] flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">WhatsApp</h3>
                      <p className="text-gray-500">+923006699423, +923226392423</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-[#e63946] flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-500">tmtaxconsultants2@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-[#e63946] flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-gray-500">Monday - Thursday: 10am - 10pm</p>
                      <p className="text-gray-500">Friday: 3pm - 10pm</p>
                      <p className="text-gray-500">Saturday & Sunday: 10am - 10pm</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 justify-center pt-4">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61564913033812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#1877F2]/10 p-2 text-[#1877F2] hover:bg-[#1877F2]/20"
                  >
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/tahir11063/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#E4405F]/10 p-2 text-[#E4405F] hover:bg-[#E4405F]/20"
                  >
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
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/t-m-tax-consultants/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#0A66C2]/10 p-2 text-[#0A66C2] hover:bg-[#0A66C2]/20"
                  >
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@tahir11063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#FF0000]/10 p-2 text-[#FF0000] hover:bg-[#FF0000]/20"
                  >
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
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@tahir.mahmood6890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#000000]/10 p-2 text-[#000000] hover:bg-[#000000]/20"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.41v13.67a2.89 2.89 0 0 1-5.0 1.96 2.89 2.89 0 0 1 2.47-5.18c.34 0 .68.06 1.0.17v-3.52A6.32 6.32 0 0 0 5.4 10.52a6.34 6.34 0 1 0 9.39 8.4v-5.5a8.16 8.16 0 0 0 4.8 1.5v-3.45a4.85 4.85 0 0 1-1.84-.45z" />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </Link>
                  <Link
                    href="https://www.google.com/maps/place/T.M+Tax+Consultants/@31.4363995,74.435064,17z/data=!3m1!4b1!4m6!3m5!1s0x3919095e2a93dedb:0x3e17a3a3928c3ebd!8m2!3d31.4363949!4d74.4376389!16s%2Fg%2F11w9xpcs_d?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#4285F4]/10 p-2 text-[#4285F4] hover:bg-[#4285F4]/20"
                  >
                    <MapPin className="h-5 w-5" />
                    <span className="sr-only">Location</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-gray-50 py-6 md:py-12">
        <div className="container px-2 md:px-4">
          {/* First row: Logo, Navigation links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo on the left */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.jpg-O4IcwhGPwUjnEHmSYrqEuEwfkz0Jli.jpeg"
                  alt="T.M Tax Consultants Logo"
                  width={150}
                  height={60}
                  className="h-9 md:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Navigation links in the center/right */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <Link
                href="#about"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </Link>
              <Link
                href="#slogan"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("slogan")}
              >
                Our Slogan
              </Link>
              <Link
                href="#team"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("team")}
              >
                Our Team
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </Link>
              <Link
                href="#tax-returns"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("tax-returns")}
              >
                Persons To File Return
              </Link>
              <Link
                href="#registration-docs"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("registration-docs")}
              >
                Registration Documents
              </Link>
              <Link
                href="#calculator"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("calculator")}
              >
                Tax Calculator
              </Link>
              <Link
                href="#verifications"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("verifications")}
              >
                Online Verifications
              </Link>
              <Link
                href="#tax-updates"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("tax-updates")}
              >
                Latest Tax Updates
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Second row: Copyright and legal links */}
          <div className="mt-8 border-t py-4 text-center text-sm text-gray-500">
            &copy; 2025 T.M Tax Consultants. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
