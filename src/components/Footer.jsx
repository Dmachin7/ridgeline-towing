import { Truck, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Emergency Towing',
  'Roadside Assistance',
  'Heavy Duty Recovery',
  'Accident Recovery',
  'Long Distance Towing',
  'Winch Out Service',
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-9 h-9 bg-amber-500 rounded-sm">
                <Truck className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-base tracking-wider uppercase">
                  Ridgeline
                </span>
                <span className="text-amber-500 font-semibold text-[9px] tracking-[0.25em] uppercase">
                  Towing &amp; Recovery
                </span>
              </div>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Denver's most trusted towing and recovery service — family-owned,
              locally operated, and on call around the clock.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-amber-500 text-gray-400 hover:text-black rounded-sm flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-500 hover:text-amber-500 text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-amber-500 text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17205550147"
                  className="flex items-center gap-3 text-gray-500 hover:text-amber-500 text-sm transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 text-amber-500/60 group-hover:text-amber-500 flex-shrink-0" />
                  (720) 555-0147
                </a>
              </li>
              <li>
                <a
                  href="mailto:dispatch@ridgelinetowing.com"
                  className="flex items-center gap-3 text-gray-500 hover:text-amber-500 text-sm transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 text-amber-500/60 group-hover:text-amber-500 flex-shrink-0" />
                  dispatch@ridgelinetowing.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 text-amber-500/60 flex-shrink-0 mt-0.5" />
                  <span>
                    4820 Brighton Blvd
                    <br />
                    Denver, CO 80216
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Ridgeline Towing &amp; Recovery. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-700">
            <a href="#" className="hover:text-gray-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
