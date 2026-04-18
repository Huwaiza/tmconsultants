import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/design-mode/Logo.jpg.jpeg"
              alt="T.M Tax Consultants"
              width={120}
              height={48}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Expert tax solutions for individuals and businesses in Pakistan.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/#about" },
                { label: "Our Team", href: "/#team" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Our Slogan", href: "/#slogan" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Compliance */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Our Services", href: "/#services" },
                { label: "Tax Calculator", href: "/#calculator" },
                { label: "Who Must File", href: "/#tax-returns" },
                { label: "Registration Docs", href: "/#registration-docs" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Tax Laws & Rules", href: "/#tax-laws" },
                { label: "Online Verifications", href: "/#verifications" },
                { label: "Latest Tax Updates", href: "/#tax-updates" },
                { label: "FAQs", href: "/faqs" },
                { label: "Contact Us", href: "/#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} T.M Tax Consultants. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            House 163, Street F179, Block D, DHA Phase 9 Town, Lahore
          </p>
        </div>
      </div>
    </footer>
  )
}
