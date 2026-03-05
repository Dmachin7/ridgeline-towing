import { BadgeCheck, Users, Heart, Wrench } from 'lucide-react'

const pillars = [
  { icon: Heart, text: 'Family-owned & operated since 2013' },
  { icon: Users, text: 'Serving Denver and the Front Range' },
  { icon: BadgeCheck, text: 'Fully licensed, bonded, and insured' },
  { icon: Wrench, text: 'Certified and trained operators' },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div>
            <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Our Story
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Denver's Most Trusted
              <br />
              <span className="text-amber-500">Towing Family</span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-5">
              Ridgeline Towing &amp; Recovery was founded in 2013 by Marcus and Elena
              Ridgeway — two Denver locals who believed the towing industry
              deserved better: better response times, more transparent pricing,
              and drivers who actually care about the people they help.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Over a decade later, we're proud to operate a growing fleet of
              modern vehicles, employing certified local operators who treat
              every vehicle — and every customer — with the highest level of
              professionalism. We're not a national chain. We're your neighbors,
              and this community is our home.
            </p>

            {/* Pillars */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {pillars.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 bg-[#111827] border border-gray-800 rounded-sm px-4 py-3"
                >
                  <Icon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-7 py-3.5 rounded-sm transition-all duration-200 tracking-wide uppercase hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          {/* Image Column */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=900&q=80"
                alt="Ridgeline Towing team and equipment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-black rounded-sm px-6 py-5 shadow-2xl shadow-amber-500/20">
              <div className="text-4xl font-black leading-none mb-1">10+</div>
              <div className="text-xs font-bold uppercase tracking-widest">Years Serving Denver</div>
            </div>

            {/* Decorative amber border element */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-amber-500/30 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
