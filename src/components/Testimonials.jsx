import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus T.',
    location: 'Denver, CO',
    stars: 5,
    text: "Blew a tire on I-25 at 11 PM and Ridgeline was there in under 25 minutes. The driver was professional, efficient, and had me home safely before midnight. I won't call anyone else.",
    avatar: 'MT',
  },
  {
    name: 'Priya S.',
    location: 'Aurora, CO',
    stars: 5,
    text: "My car wouldn't start the morning of a big presentation. Ridgeline sent a tech who diagnosed a dead battery, replaced it on the spot, and I made it to my meeting on time. Absolute lifesavers.",
    avatar: 'PS',
  },
  {
    name: 'Jeff & Linda R.',
    location: 'Littleton, CO',
    stars: 5,
    text: "We were towing a camper and got stuck off-road in the mud. Ridgeline's winch crew extracted our whole rig without a scratch. Incredibly skilled team — worth every penny.",
    avatar: 'JR',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#111827] relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Reviews
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
            Real stories from real customers. We take pride in every rescue,
            every tow, every job done right.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 bg-amber-500 rounded-full" />
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, stars, text, avatar }) => (
            <div
              key={name}
              className="group bg-[#0f0f0f] border border-gray-800 hover:border-amber-500/40 rounded-sm p-7 transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-amber-500" />
              </div>

              {/* Stars */}
              <div className="mb-4">
                <StarRating count={stars} />
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed italic mb-6 relative z-10">
                "{text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-10 h-10 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-500 text-xs font-bold">{avatar}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-gray-500 text-xs">{location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#0f0f0f] border border-gray-800 rounded-sm px-6 py-4">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-gray-400 text-sm">based on 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
