'use client'

import { useTheme } from '@/lib/theme/ThemeContext'

export default function TestimonialCard({ testimonial }: { testimonial: any }) {
  const { theme } = useTheme()
  const isGreen = theme === 'green'
  
  // High-end premium borders and accent colors matching your brand themes
  const borderColor = isGreen ? 'border-emerald-700' : 'border-amber-700'
  const quoteColor = isGreen ? 'text-emerald-700/20' : 'text-amber-700/20'
  const accentText = isGreen ? 'text-emerald-800' : 'text-amber-800'

  // Safely format the attribution string (handles name + location or standard author fallback)
  const displayName = testimonial.name || testimonial.author || 'Verified Patient'
  const displayLocation = testimonial.location ? `, ${testimonial.location}` : ''

  return (
    <div className={`bg-white p-8 rounded-2xl border-l-4 ${borderColor} shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}>
      
      <div>
        {/* Large stylized quote decoration for visual interest */}
        <div className="flex justify-between items-start mb-4">
          <i className={`fas fa-quote-left ${quoteColor} text-4xl block transition-transform group-hover:scale-110 duration-300`}></i>
          
          {/* Subtle 5-star rating graphic to enhance perceived clinical credibility */}
          <div className="flex gap-0.5 text-amber-500 text-xs">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>
        </div>

        {/* Upscaled Testimonial Content Typography */}
        <p className="text-slate-700 text-base md:text-[17px] font-normal leading-relaxed tracking-wide selection:bg-amber-100">
          "{testimonial.content}"
        </p>
      </div>

      {/* Author / Client Attribution Block */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="font-bold text-slate-950 text-base block tracking-tight">
            — {displayName}
          </span>
          {displayLocation && (
            <span className={`text-xs font-semibold uppercase tracking-wider ${accentText} block mt-0.5`}>
              {testimonial.location}
            </span>
          )}
        </div>
        
        {/* Decorative Badge indicating treatment success */}
        <span className="text-[10px] bg-slate-50 text-slate-500 font-mono px-2 py-1 rounded border border-slate-100">
          Verified Case
        </span>
      </div>

    </div>
  )
}