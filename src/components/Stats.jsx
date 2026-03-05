import { Clock, Zap, BadgeCheck, Award } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: '24/7',
    label: 'Availability',
    description: 'Around the clock, every day of the year — including holidays.',
  },
  {
    icon: Zap,
    value: '30 Min',
    label: 'Avg. Response Time',
    description: 'Our dispatch team gets a driver to you faster than the competition.',
  },
  {
    icon: BadgeCheck,
    value: '100%',
    label: 'Licensed & Insured',
    description: 'Fully bonded with commercial liability coverage on every job.',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years of Experience',
    description: 'A decade of trusted service across Denver and the Front Range.',
  },
]

export default function Stats() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#111827] relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Amber glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-amber-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Built on Trust &amp; Speed
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
            We measure our success by how quickly we can relieve your stress.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 bg-amber-500 rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, description }) => (
            <div
              key={label}
              className="group bg-[#0f0f0f]/60 border border-gray-800 hover:border-amber-500/40 rounded-sm p-8 text-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top accent line */}
              <div className="mx-auto w-12 h-0.5 bg-amber-500 mb-6 group-hover:w-full transition-all duration-500 rounded-full" />

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/10 rounded-sm mb-4">
                <Icon className="w-6 h-6 text-amber-500" strokeWidth={1.75} />
              </div>

              {/* Value */}
              <div className="text-5xl font-black text-amber-500 tracking-tight leading-none mb-2">
                {value}
              </div>

              {/* Label */}
              <div className="text-white font-bold text-sm uppercase tracking-widest mb-3">
                {label}
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
