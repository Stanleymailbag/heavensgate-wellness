'use client'

import { useTheme } from '@/lib/theme/ThemeContext'

export default function WhatsAppButton() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'

  return (
    <a
      href="https://wa.me/2348088357068?text=Hello%20Heavensgate%20Wellness%20Center,%20I%20need%20a%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 p-4 rounded-full shadow-xl transition-all ${
        isGreen
          ? 'bg-green-600 hover:bg-green-700 animate-breathe-green'
          : 'bg-amber-600 hover:bg-amber-700 animate-breathe-orange'
      }`}
    >
      <i className="fab fa-whatsapp text-2xl"></i>
      {/* Always show text on desktop, show only icon on mobile */}
      <span className="text-[10px] sm:text-sm font-semibold text-white">
        Book / Enquire
      </span>
    </a>
  )
}