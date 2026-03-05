import { Truck, Wrench, Shield, AlertTriangle, MapPin, Anchor, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Emergency Towing',
    description:
      'Stranded anywhere in the metro area? Our rapid-response fleet reaches you fast — any time of day or night, 365 days a year.',
  },
  {
    icon: Wrench,
    title: 'Roadside Assistance',
    description:
      'Dead battery, flat tire, lockout, or out of gas — our technicians carry everything needed to get you moving again on the spot.',
  },
  {
    icon: Shield,
    title: 'Heavy Duty Recovery',
    description:
      'Semi trucks, buses, RVs, and oversize loads are no challenge for our heavy-duty rotator and specialized recovery equipment.',
  },
  {
    icon: AlertTriangle,
    title: 'Accident Recovery',
    description:
      'We work alongside law enforcement to quickly and safely clear accident scenes, minimize road closures, and secure damaged vehicles.',
  },
  {
    icon: MapPin,
    title: 'Long Distance Towing',
    description:
      'Moving a vehicle across the state or across the country? We provide secure, fully insured long-distance transport with real-time updates.',
  },
  {
    icon: Anchor,
    title: 'Winch Out Service',
    description:
      'Off-road, in a ditch, or mired in mud — our winch-out specialists safely extract vehicles from even the most difficult recovery situations.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Our Services
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
            From a simple lockout to a major highway recovery, we have the
            equipment and expertise to handle it all.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 bg-amber-500 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative bg-[#111827] border border-gray-800 rounded-sm p-7 hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Amber left accent bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              {/* Corner glow on hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-sm mb-5 group-hover:bg-amber-500/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-amber-500" strokeWidth={1.75} />
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-lg mb-2.5 tracking-tight">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {description}
              </p>

              {/* Learn more link */}
              <span className="inline-flex items-center gap-1.5 text-amber-500 text-xs font-semibold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
