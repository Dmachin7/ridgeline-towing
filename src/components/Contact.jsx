import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const services = [
  'Emergency Towing',
  'Roadside Assistance',
  'Heavy Duty Recovery',
  'Accident Recovery',
  'Long Distance Towing',
  'Winch Out Service',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#111827] relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Get Help Now
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Request a Quote
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
            Fill out the form below and we'll get back to you fast — or call
            us directly for immediate dispatch.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 bg-amber-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-[#0f0f0f] border border-green-500/30 rounded-sm p-10 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-white font-bold text-2xl mb-2">Request Received!</h3>
                <p className="text-gray-400">
                  Thanks, {form.name || 'there'}! We'll contact you shortly. For
                  urgent help, call us now at{' '}
                  <a href="tel:+17205550147" className="text-amber-500 font-semibold">
                    (720) 555-0147
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#0f0f0f] border border-gray-800 rounded-sm p-7 space-y-5"
              >
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-amber-500 text-white placeholder-gray-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="(720) 555-0000"
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-amber-500 text-white placeholder-gray-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-amber-500 text-white placeholder-gray-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200"
                  />
                </div>

                {/* Vehicle Type + Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Vehicle Type
                    </label>
                    <input
                      type="text"
                      name="vehicleType"
                      value={form.vehicleType}
                      onChange={handleChange}
                      placeholder="e.g. 2019 Toyota Camry"
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-amber-500 text-white placeholder-gray-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-amber-500 text-white rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none"
                    >
                      <option value="" className="text-gray-600">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your situation — location, vehicle condition, anything helpful..."
                    className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-amber-500 text-white placeholder-gray-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-6 py-4 rounded-sm transition-all duration-200 tracking-wide uppercase hover:-translate-y-0.5 shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-4 h-4" strokeWidth={2.5} />
                  Submit Request
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-6 tracking-tight">
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href="tel:+17205550147"
                  className="group flex items-start gap-4 p-5 bg-[#0f0f0f] border border-gray-800 hover:border-amber-500/50 rounded-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Phone / Dispatch
                    </div>
                    <div className="text-white font-bold text-lg">(720) 555-0147</div>
                    <div className="text-gray-500 text-xs mt-0.5">Available 24/7</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:dispatch@ridgelinetowing.com"
                  className="group flex items-start gap-4 p-5 bg-[#0f0f0f] border border-gray-800 hover:border-amber-500/50 rounded-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Email
                    </div>
                    <div className="text-white font-semibold">dispatch@ridgelinetowing.com</div>
                    <div className="text-gray-500 text-xs mt-0.5">Response within 1 hour</div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-[#0f0f0f] border border-gray-800 rounded-sm">
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Service Area
                    </div>
                    <div className="text-white font-semibold">4820 Brighton Blvd</div>
                    <div className="text-gray-400 text-sm">Denver, CO 80216</div>
                    <div className="text-gray-500 text-xs mt-1">
                      Serving all of Metro Denver &amp; Front Range
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency notice */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-5">
              <p className="text-amber-400 text-sm font-semibold mb-1">
                Need immediate help?
              </p>
              <p className="text-gray-400 text-sm">
                For emergencies, skip the form and call us directly — a
                dispatcher is always standing by.
              </p>
              <a
                href="tel:+17205550147"
                className="inline-block mt-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-5 py-2.5 rounded-sm transition-colors tracking-wide uppercase"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
