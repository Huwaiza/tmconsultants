'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, HelpCircle, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function FAQsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const faqs = [
    {
      id: 1,
      question: 'Who is required to file an income tax return in Pakistan?',
      answer: 'According to FBR regulations, any person whose income exceeds the taxable income threshold for the relevant tax year must file an income tax return. For FY 2025-26, the threshold is generally PKR 600,000 for salaried individuals. Self-employed persons, business owners, and corporate entities must file regardless of income level.'
    },
    {
      id: 2,
      question: 'What is the deadline for filing income tax returns?',
      answer: 'The annual deadline for filing income tax returns is typically September 30 each year (for the fiscal year ending June 30). However, the FBR may extend this deadline. Late filing may result in penalties and fines. It is advisable to file at least 10 days before the deadline to avoid technical issues.'
    },
    {
      id: 3,
      question: 'Can I file my income tax return online through IRIS?',
      answer: 'Yes, IRIS (Inland Revenue Information System) is the official online portal of the FBR where you can file your income tax return electronically. You can create an account, upload required documents, and submit your return. Online filing is secure, faster, and provides immediate acknowledgment.'
    },
    {
      id: 4,
      question: 'What documents are required for income tax return filing?',
      answer: 'Required documents typically include: salary certificates/slips, bank statements, investment certificates, property documents, utility bills, business records (if self-employed), and any other income-related documentation. Keep copies of all submitted documents for your records.'
    },
    {
      id: 5,
      question: 'What is a Computerized National Identity Card (CNIC)?',
      answer: 'A CNIC is a mandatory identity document issued by the NADRA (National Database and Registration Authority) required for all Pakistani citizens aged 18 and above. Your valid CNIC is necessary for filing tax returns, opening bank accounts, and various other official procedures.'
    },
    {
      id: 6,
      question: 'What is a National Tax Number (NTN)?',
      answer: 'An NTN is a unique identification number issued by the FBR to taxpayers and persons earning income. It is mandatory for filing income tax returns, obtaining import/export licenses, and conducting business activities. You can obtain an NTN from FBR through the IRIS portal or at any FBR office.'
    },
    {
      id: 7,
      question: 'What is a Sales Tax Registration Number (STRN)?',
      answer: 'An STRN is a unique identifier issued by the FBR for persons registered under the Sales Tax Act, 1990. Businesses involved in supply of goods/services above the threshold limit must obtain an STRN and file Sales Tax returns.'
    },
    {
      id: 8,
      question: 'What is the difference between gross income and taxable income?',
      answer: 'Gross income is the total income from all sources before any deductions or exemptions. Taxable income is calculated by deducting eligible expenses, losses, and exemptions from gross income. Only taxable income is subject to income tax calculation.'
    },
    {
      id: 9,
      question: 'Can I claim deductions for professional expenses?',
      answer: 'Yes, as a self-employed professional or business owner, you can claim legitimate business expenses as deductions. These may include office rent, utilities, professional fees, depreciation of assets, and employee salaries. However, only genuine and documented expenses are allowed.'
    },
    {
      id: 10,
      question: 'What are capital gains and how are they taxed?',
      answer: 'Capital gains are profits from the sale of capital assets such as property or investments. In Pakistan, capital gains are taxed according to the holding period: short-term capital gains (held less than 1 year) may be taxed differently than long-term gains (held more than 1 year). Consult current tax laws for applicable rates.'
    },
    {
      id: 11,
      question: 'What is tax amnesty and when is it offered?',
      answer: 'Tax amnesty is a temporary scheme offered by the FBR allowing undisclosed income to be declared with reduced penalties or tax rates. These schemes are announced periodically and have specific terms and conditions. Availing amnesty helps bring informal economy into the tax net.'
    },
    {
      id: 12,
      question: 'How can I verify my FBR status online?',
      answer: 'You can verify your FBR status through the IRIS portal at iris.fbr.gov.pk. Log in with your NTN and password to check your filing history, assessment details, and any pending compliance requirements. You can also download copies of your filed returns and FBR correspondence.'
    },
    {
      id: 13,
      question: 'What are the penalties for late tax return filing?',
      answer: 'Late filing penalties are calculated as a percentage of the tax due, starting from 5% for the first 30 days late, and increasing further for longer delays. Penalties can be substantial, making timely filing important. The FBR may also impose additional penalties for non-compliance with other tax obligations.'
    },
    {
      id: 14,
      question: 'Can I file an amended income tax return after submission?',
      answer: 'Yes, under Section 114 of the Income Tax Ordinance, 2001, you can file a revised or amended return before the assessment date. This allows you to correct errors or include additional income/expenses. File the amended return through IRIS with proper documentation.'
    },
    {
      id: 15,
      question: 'What is advance tax and when must it be paid?',
      answer: 'Advance tax is tax paid in advance during the tax year before the final assessment. Different categories of advance tax include on import of goods, services, and turn-over tax for certain businesses. Payment dates and rates are determined by the FBR annually. Failure to pay advance tax can result in penalties.'
    },
    {
      id: 16,
      question: 'How are salaried individuals taxed in Pakistan?',
      answer: 'Salaried individuals pay income tax based on progressive tax slabs. Tax is calculated on gross salary after deducting standard deductions and exemptions. Employers usually deduct tax at source (TDS) and deposit it to the FBR. At year-end, individuals file a return reconciling payments with total tax liability.'
    },
    {
      id: 17,
      question: 'What is the Foreign Remittance Scheme and its tax implications?',
      answer: 'Pakistanis receiving foreign remittances can declare them through the Foreign Remittance Scheme. Such income is subject to reduced tax rates and carries special exemptions. This scheme encourages formal channeling of foreign exchange into the economy and helps bring undisclosed foreign income into the tax system.'
    },
    {
      id: 18,
      question: 'What documents do freelancers need for income tax return filing?',
      answer: 'Freelancers should maintain: invoice copies, bank statements showing foreign/local income deposits, client payment evidence, business expense receipts, utility bills establishing business address, and records of professional equipment/software purchased. IRIS requires uploading these documents electronically during filing.'
    },
    {
      id: 19,
      question: 'What is Active Taxpayer (ATP) status and why is it important?',
      answer: 'Active Taxpayer (ATP) status is granted by the FBR to entities regularly filing tax returns, sales tax returns, and maintaining compliance. ATP status is required for many government contracts, import licenses, and banking privileges. Your ATP status can be verified on the IRIS portal.'
    },
    {
      id: 20,
      question: 'How can I contact the FBR if I have tax-related queries?',
      answer: 'You can contact the FBR through: IRIS portal helpline, Regional Tax Offices in major cities, FBR call center (+92 51-111-772-772), or email support through the IRIS portal. The FBR also provides taxpayer education through seminars and online resources. For complex matters, consulting a tax professional is recommended.'
    }
  ]

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 md:h-20 items-center justify-between px-2 md:px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/design-mode/Logo.jpg.jpeg"
              alt="T.M Tax Consultants Logo"
              width={180}
              height={72}
              className="h-10 md:h-14 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center">
            <div className="flex gap-3 lg:gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("slogan")}
              >
                Our Slogan
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("team")}
              >
                Our Team
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("tax-returns")}
              >
                Persons To File Return
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("registration-docs")}
              >
                Registration Documents
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("calculator")}
              >
                Tax Calculator
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("tax-laws")}
              >
                Pakistan Tax Laws & Rules
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("verifications")}
              >
                Online Verifications
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("tax-updates")}
              >
                Latest Tax Updates
              </Link>
              <Link
                href="/faqs"
                className="text-sm font-medium text-primary font-semibold transition-colors hover:text-primary whitespace-nowrap"
              >
                FAQs
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Link>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="md:hidden bg-transparent" onClick={toggleMobileMenu}>
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
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("slogan")}
              >
                Our Slogan
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("team")}
              >
                Our Team
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("tax-returns")}
              >
                Persons To File Return
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("registration-docs")}
              >
                Registration Documents
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("calculator")}
              >
                Tax Calculator
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("tax-laws")}
              >
                Pakistan Tax Laws & Rules
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("verifications")}
              >
                Online Verifications
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("tax-updates")}
              >
                Latest Tax Updates
              </Link>
              <Link
                href="/faqs"
                className="text-sm font-medium text-primary font-semibold transition-colors hover:text-primary py-2"
              >
                FAQs
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary py-2"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* FAQs Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#3a5a81] to-[#4a6fa5] py-8 md:py-16">
        <div className="container px-2 md:px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <HelpCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              Find answers to common questions about income tax filing, FBR regulations, and IRIS portal
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="w-full py-12 md:py-16 flex-grow">
        <div className="container px-2 md:px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#3a5a81] transition-colors"
              >
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-start justify-between gap-4 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-left font-semibold text-[#3a5a81] text-balance">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#3a5a81] flex-shrink-0 transition-transform mt-1 ${
                      expandedId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedId === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-gray-50 py-6 md:py-12">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/design-mode/Logo.jpg.jpeg"
                  alt="T.M Tax Consultants Logo"
                  width={150}
                  height={60}
                  className="h-9 md:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="flex flex-wrap gap-5 md:gap-8 justify-center">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("slogan")}
              >
                Our Slogan
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("team")}
              >
                Our Team
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("tax-returns")}
              >
                Persons To File Return
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("registration-docs")}
              >
                Registration Documents
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("calculator")}
              >
                Tax Calculator
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("tax-laws")}
              >
                Pakistan Tax Laws & Rules
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("verifications")}
              >
                Online Verifications
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("tax-updates")}
              >
                Latest Tax Updates
              </Link>
              <Link
                href="/faqs"
                className="text-sm font-medium text-primary font-semibold transition-colors hover:text-[#3a5a81]"
              >
                FAQs
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#3a5a81]"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t py-4 text-center text-sm text-gray-500">
            &copy; 2025 T.M Tax Consultants. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
