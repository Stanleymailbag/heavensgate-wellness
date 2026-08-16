'use client'

import { useTheme } from '@/lib/theme/ThemeContext'   // ← this line is missing

export default function WhatsAppButton() {
  const {theme} = useTheme()
  return (
    <a
      href="https://wa.me/2348088357068?text=Hello..."
      target="_blank"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 p-4 rounded-full shadow-xl transition-all ${
        theme === 'green' ? 'bg-green-600 hover:bg-green-700 animate-breathe-green' : 'bg-amber-600 hover:bg-amber-700 animate-breathe-orange'
      }`}
    >
      <i className="fab fa-whatsapp text-2xl"></i>
      <span className="hidden sm:inline text-sm font-semibold">Book / Enquire</span>
    </a>
  )
}