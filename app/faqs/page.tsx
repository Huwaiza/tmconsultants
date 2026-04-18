'use client'

import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function FAQsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(0)

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
      question: 'What is the National Tax Number (NTN) and how can I register?',
      answer: 'The National Tax Number (NTN) is a unique identifier assigned to taxpayers by the FBR. To register, you need a valid CNIC, bank account, utility bill, and passport-size photo. Registration can be done online through the IRIS portal or at any Regional Tax Office. NTN is mandatory for business registration and certain financial transactions.'
    },
    {
      id: 7,
      question: 'What are the penalties for late tax filing in Pakistan?',
      answer: 'Penalties for late filing include: 0.1% of tax payable per day of delay (minimum PKR 500 per day), potential prosecution for persistent non-filers, higher withholding tax rates on various transactions, and restricted access to government contracts and tenders. Non-filers are also subject to additional surcharges on many financial transactions.'
    },
    {
      id: 8,
      question: 'What is the difference between a filer and non-filer in Pakistan?',
      answer: 'A filer is someone registered with FBR and has filed income tax returns. Filers enjoy lower withholding tax rates on banking transactions, property purchases, vehicle registrations, and other financial activities. Non-filers pay significantly higher rates (often double) on these transactions as a penalty incentive to encourage registration.'
    },
    {
      id: 9,
      question: 'How are business income and profits taxed in Pakistan?',
      answer: 'Business income is taxed according to corporate tax rates (currently 29% for companies) or personal income tax rates for sole proprietors and partnerships. Businesses must also comply with sales tax, withholding tax, and advance tax requirements. Certain deductible expenses reduce taxable income — professional tax advice is recommended.'
    },
    {
      id: 10,
      question: 'What is withholding tax and how does it affect me?',
      answer: 'Withholding tax (WHT) is collected at source by payers before remitting income. It applies to salaries, dividends, interest, rent, contracts, and many other transactions. For filers, WHT rates are lower and can be adjusted against final tax liability. For non-filers, higher WHT rates apply and may not be fully adjustable, effectively becoming an additional tax burden.'
    },
    {
      id: 11,
      question: 'How can I check my Active Taxpayer status on the FBR portal?',
      answer: 'You can verify your Active Taxpayer (ATP) status through the FBR\'s IRIS portal (iris.fbr.gov.pk) or via SMS by sending your CNIC number to 9966. ATP status is updated annually after filing returns. Maintaining ATP status ensures you benefit from lower withholding tax rates and other privileges available only to active taxpayers.'
    },
    {
      id: 12,
      question: 'What is wealth reconciliation and why is it required?',
      answer: 'Wealth reconciliation is a mandatory part of the income tax return that compares your opening and closing net wealth. You must justify any increase in wealth through declared income. Unexplained wealth increases can trigger tax assessments and penalties. Accurate wealth statements help maintain compliance and avoid scrutiny by tax authorities.'
    },
    {
      id: 13,
      question: 'Are there any tax exemptions for small businesses or startups?',
      answer: 'Pakistan offers various incentives for startups and small businesses including reduced tax rates in Special Economic Zones, tax holidays for certain sectors, and startup-specific incentives under the Finance Acts. The government has also introduced simplified tax regimes for small traders and shopkeepers. Consulting a tax professional is advisable to identify applicable exemptions.'
    },
    {
      id: 14,
      question: 'How does the Double Taxation Avoidance Treaty (DTAT) work?',
      answer: 'Pakistan has signed DTATs with over 65 countries to prevent double taxation of income earned in one country by residents of another. These treaties specify which country has the right to tax different types of income (salary, dividends, royalties, etc.) and at what rates. DTATs can significantly reduce tax burdens for international workers and businesses.'
    },
    {
      id: 15,
      question: 'What are the tax implications of selling property in Pakistan?',
      answer: 'Capital gains from property sales are taxed based on the holding period: gains on property held for less than one year are taxed at 15%, reducing gradually to 0% for property held over four years. Additionally, advance tax on property transactions applies at rates that differ for filers and non-filers. FBR valuation rates (DC rates) apply alongside market value considerations.'
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
    <div className="w-full min-h-screen flex flex-col">
      <SiteHeader />

      {/* FAQs Hero Section */}
      <section className="w-full bg-brand-blue py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-4 rounded-full">
                <HelpCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Find answers to common questions about income tax filing, FBR regulations, and the IRIS portal.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="w-full py-12 md:py-20 flex-grow bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-8 space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="border border-border rounded-xl overflow-hidden hover:border-brand-blue/40 transition-colors"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-start justify-between gap-4 bg-card hover:bg-accent transition-colors text-left"
              >
                <span className="font-display font-semibold text-brand-blue dark:text-brand-blue-light text-balance">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-brand-blue dark:text-brand-blue-light flex-shrink-0 transition-transform mt-0.5 ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    key={faq.id}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 bg-muted border-t border-border">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
