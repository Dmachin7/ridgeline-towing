import { ChevronRight } from 'lucide-react'

const vehicles = [
  {
    name: 'Light Duty Tow Truck',
    badge: 'Light Duty',
    badgeColor: 'bg-blue-500/80',
    image: '/assets/LightDuty.png',
    description:
      'Our light-duty fleet handles passenger cars, SUVs, motorcycles, and small trucks with care. Perfect for breakdowns, lockouts, and local tows.',
    specs: ['Capacity: up to 7,500 lbs', 'Wheel-lift & flatbed', 'GPS tracked'],
  },
  {
    name: 'Medium Duty Wrecker',
    badge: 'Medium Duty',
    badgeColor: 'bg-amber-500/80',
    image: '/assets/MediumDuty.png',
    description:
      'Built for vans, box trucks, and dual-rear-wheel pickups. Our medium-duty wreckers provide the reach and lift power to handle commercial vehicles.',
    specs: ['Capacity: up to 26,000 lbs', 'Underlift & winch', 'DOT compliant'],
  },
  {
    name: 'Heavy Duty Rotator',
    badge: 'Heavy Duty',
    badgeColor: 'bg-red-500/80',
    image: '/assets/HeavyDuty.png',
    description:
      'Our 75-ton rotator crane is the most capable piece of equipment in the region — tackling semi-truck rollovers, overturned buses, and complex recoveries.',
    specs: ['Capacity: 75 tons', 'Full 360° rotation', 'Certified operators'],
  },
]

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 lg:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Equipment
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Our Fleet
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
            Modern, well-maintained equipment for every recovery scenario — from
            compact cars to multi-axle commercial vehicles.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 bg-amber-500 rounded-full" />
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {vehicles.map(({ name, badge, badgeColor, image, description, specs }) => (
            <div
              key={name}
              className="group bg-[#111827] border border-gray-800 rounded-sm overflow-hidden hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 transform-gpu"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden transform-gpu">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />

                {/* Badge */}
                <span
                  className={`absolute top-4 left-4 ${badgeColor} backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm`}
                >
                  {badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2 tracking-tight">
                  {name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {description}
                </p>

                {/* Specs */}
                <ul className="space-y-2">
                  {specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-gray-500 text-sm">
                      <ChevronRight className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
