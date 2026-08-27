'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/lib/theme/ThemeContext'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
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

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo – Using actual image */}
        <Link href="/" className="flex items-center space-x-3 shrink-0">
          <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-slate-100 shadow-sm">
            <Image
              src="/images/logo.jpg"
              alt="Heavensgate Wellness Center Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="text-base font-extrabold tracking-tight text-slate-950 block leading-tight">HEAVENSGATE</span>
            <span className={`text-xs font-semibold uppercase tracking-wider block ${
              isGreen ? 'text-emerald-700' : 'text-amber-600'
            }`}>Wellness Center</span>
          </div>
        </Link>

        {/* Desktop Navigation – hidden on mobile */}
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

        {/* Right side: Theme toggle + Consultation button + Hamburger */}
        <div className="flex items-center space-x-4 shrink-0">
          <ThemeToggle />
          <a
            href="https://wa.me/2348088357068"
            className="hidden sm:inline-block px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition bg-emerald-800 hover:bg-emerald-900 text-white"
          >
            Consultation
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 text-3xl focus:outline-none px-2 py-1"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        ></div>
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-2xl p-6 flex flex-col space-y-6 text-base font-semibold transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-slate-500 text-2xl focus:outline-none"
            aria-label="Close menu"
          >
            ✕
          </button>
          {links.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
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
          <a
            href="https://wa.me/2348088357068"
            className={`${
              isGreen ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-amber-600 hover:bg-amber-700'
            } text-white text-center py-3 rounded-xl transition`}
          >
            Consultation
          </a>
        </div>
      </div>
    </header>
  )
}