'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/lib/theme/ThemeContext'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()
  const isGreen = theme === 'green'

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Our Services' },
    { href: '/products', label: 'Organic Store' },
    { href: '/blog', label: 'Health Update' },
    { href: '/about', label: 'About Us' },
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Check if link is active (exact match or starts with path for nested routes)
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
            isGreen ? 'bg-emerald-700 text-white' : 'bg-amber-600 text-white'
          }`}>
            <i className="fas fa-gate"></i>
          </div>
          <div>
            <span className="text-base font-extrabold tracking-tight text-slate-950 block leading-tight">HEAVENSGATE</span>
            <span className={`text-xs font-semibold uppercase tracking-wider block ${
              isGreen ? 'text-emerald-700' : 'text-amber-600'
            }`}>Wellness Center</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          {links.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  active
                    ? 'text-slate-950 border-b-2 border-slate-950 pb-1'
                    : 'hover:text-slate-950'
                } ${link.href === '/blog' && !active ? 'text-rose-600 hover:text-rose-700' : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a
            href="https://wa.me/2348075884433"
            className={`hidden sm:inline-block px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition ${
              isGreen
                ? 'bg-emerald-800 hover:bg-emerald-900 text-white'
                : 'bg-amber-700 hover:bg-amber-800 text-white'
            }`}
          >
            Consultation
          </a>
          <button onClick={() => setMobileOpen(true)} className="md:hidden text-slate-700 text-xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 p-6 flex flex-col space-y-6 text-base font-semibold border-l border-slate-100 transform transition-transform duration-300 ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button onClick={() => setMobileOpen(false)} className="self-end text-slate-500 text-xl">
          <i className="fas fa-times"></i>
        </button>
        {links.map((link) => {
          const active = isActive(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`py-2 ${
                active
                  ? 'text-slate-950 border-b-2 border-slate-950'
                  : 'hover:text-slate-950'
              } ${link.href === '/blog' && !active ? 'text-rose-600 hover:text-rose-700' : ''}`}
            >
              {link.label}
            </Link>
          )
        })}
        <hr />
        <a href="https://wa.me/2348075884433" className={`${
          isGreen ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-amber-600 hover:bg-amber-700'
        } text-white text-center py-2 rounded-xl transition`}>
          Consultation
        </a>
      </div>
    </header>
  )
}