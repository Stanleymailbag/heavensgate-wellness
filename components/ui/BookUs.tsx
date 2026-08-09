'use client'

import { useTheme } from '@/lib/theme/ThemeContext'

export default function BookUs() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'

  return (
    <div className="mt-12 max-w-3xl mx-auto text-center bg-white/80 rounded-2xl p-6 border border-slate-200 shadow-sm">
      <p className="text-xs text-slate-500 font-light leading-relaxed">
        *Note: These botanical herbal products are food supplements not drugs. Our services are not intended to diagnose, treat, cure or prevent any disease. Always consult your physician for medical condition. Individual results may vary.
      </p>
      <div className={`mt-4 inline-block ${
        isGreen ? 'bg-emerald-700' : 'bg-amber-600'
      } text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md`}>
        Book us on – 08037161334 / 09128604617 / 08075884433
      </div>
      <div className="mt-3 text-xs text-slate-600 font-light">
        Open Hours:- Mon–Fri: 8:30am – 5:00pm &nbsp;|&nbsp; Sat: 8:30am – 1:00pm
      </div>
    </div>
  )
}