import { MapPin, Clock, ExternalLink } from 'lucide-react'

const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=4820+Brighton+Blvd+Denver+CO+80216&output=embed&z=15'

const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=4820+Brighton+Blvd+Denver+CO+80216'

export default function Location() {
  return (
    <section id="location" className="relative">
      {/* Full-width map container */}
      <div className="relative h-[480px] lg:h-[560px] overflow-hidden">
        {/* Dark-filtered iframe wrapper */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            filter:
              'grayscale(100%) invert(90%) hue-rotate(180deg) brightness(80%) contrast(95%)',
          }}
        >
          <iframe
            src={MAPS_EMBED_URL}
            title="Ridgeline Towing & Recovery location"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="true"
          />
        </div>

        {/* Top gradient fade — blends from Contact section (#111827) */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#111827] to-transparent z-10 pointer-events-none" />

        {/* Bottom gradient fade — blends into Footer (#0a0a0a) */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Amber top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-amber-500/40 z-20 pointer-events-none" />

        {/* Floating info card — bottom-left */}
        <div className="absolute bottom-10 left-4 sm:left-8 z-20 w-72 sm:w-80 bg-[#0f0f0f]/90 border border-gray-800 backdrop-blur-md rounded-sm p-6 shadow-2xl shadow-black/60">
          {/* Label */}
          <p className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
            Find Us Here
          </p>

          {/* Address row */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">
                4820 Brighton Blvd
              </p>
              <p className="text-gray-400 text-sm">Denver, CO 80216</p>
              <p className="text-gray-500 text-xs mt-0.5">RiNo / Brighton Blvd Corridor</p>
            </div>
          </div>

          {/* Hours row */}
          <div className="flex items-start gap-3 mb-5 pb-5 border-b border-gray-800">
            <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Open 24 Hours</p>
              <p className="text-gray-400 text-xs">7 Days a Week — Including Holidays</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Get Directions
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Decorative amber map pin badge — top-right */}
        <div className="absolute top-8 right-6 sm:right-10 z-20 flex items-center gap-2 bg-[#0f0f0f]/80 border border-amber-500/30 backdrop-blur-sm rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
          <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest">
            Denver, CO
          </span>
        </div>
      </div>
    </section>
  )
}
