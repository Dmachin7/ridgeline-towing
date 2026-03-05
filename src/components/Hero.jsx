import { Phone, FileText, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/Hero.png')",
        }}
      />

      {/* Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0f0f0f]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      {/* Amber accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
          Available 24 / 7 — Denver, CO &amp; Surrounding Areas
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6">
          When You're Stuck,
          <br />
          <span className="text-amber-500">We Move.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-gray-300 text-lg sm:text-xl leading-relaxed mb-10">
          Denver's most trusted towing and recovery team. We respond fast, work
          hard, and get you back on the road — day or night, rain or shine.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-base px-8 py-4 rounded-sm transition-all duration-200 tracking-wide uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 hover:-translate-y-0.5"
          >
            <FileText className="w-5 h-5" strokeWidth={2.5} />
            Get a Free Quote
          </a>
          <a
            href="tel:+17205550147"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-bold text-base px-8 py-4 rounded-sm transition-all duration-200 tracking-wide uppercase"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            Call (720) 555-0147
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
          {[
            '✓ Licensed & Insured',
            '✓ 30-Min Response',
            '✓ All Vehicle Types',
            '✓ Flat-Rate Pricing',
          ].map((item) => (
            <span key={item} className="font-medium tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-amber-500 transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  )
}
