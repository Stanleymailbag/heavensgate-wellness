'use client'

import { useTheme } from '@/lib/theme/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2.5 rounded-xl text-xs flex items-center space-x-1.5 font-medium transition"
    >
      <i className="fas fa-palette text-amber-500"></i>
      <span className="hidden sm:inline">{theme === 'green' ? 'Swap to Orange' : 'Swap to Green'}</span>
    </button>
  )
}