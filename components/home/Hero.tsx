'use client'

import Image from 'next/image'
import { useTheme } from '@/lib/theme/ThemeContext'
import heroImage from '@/public/images/hero-wellness-bg.jpg'

export default function Hero() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'

  const bgClass = isGreen
    ? 'bg-gradient-to-br from-emerald-100 via-emerald-50/40 to-stone-50'
    : 'bg-gradient-to-br from-amber-100 via-amber-50/40 to-stone-50'

  const tagClass = isGreen ? 'bg-emerald-800 text-white' : 'bg-amber-800 text-white'
  const accentClass = isGreen ? 'text-emerald-800' : 'text-amber-700'
  const ctaClass = isGreen ? 'bg-emerald-800 hover:bg-emerald-900' : 'bg-amber-700 hover:bg-amber-800'
  const serviceIconClass = isGreen ? 'text-emerald-700' : 'text-amber-700'
  const serviceCardBorder = isGreen ? 'border-emerald-200/60' : 'border-amber-200/60'

  return (
    <section className={`${bgClass} py-12 lg:py-16 border-b border-stone-200/40 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-6 text-left flex flex-col justify-center">
          <div>
            <span className={`inline-flex items-center ${tagClass} text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-widest shadow-sm`}>
              Heavensgate Wellness Center Nigeria
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-4 tracking-tight leading-tight">
            Discover a More Comfortable, Balance You, With <span className={`${accentClass}`}>Natural Wellness Support and Relaxation.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 mt-4 font-normal leading-relaxed">
            We combine gentle wellness sessions with premium 100% natural herbal products to support your daily comfort and well-being. All at affordable prices. Heavensgate (RC-7379693)
          </p>

          <div className={`mt-6 p-4 bg-white rounded-xl border ${serviceCardBorder} flex items-start space-x-3 shadow-sm`}>
            <div className={`p-2 rounded-lg bg-stone-50 ${serviceIconClass} shrink-0`}>
              <i className="fas fa-house-medical text-lg block"></i>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider">
                Home Wellness Visits
              </h4>
              <p className="text-sm text-slate-600 font-normal mt-0.5 leading-relaxed">
                We bring our energy wellness check and relaxation sessions to your home across Umuahia and nearby areas. Relax in your own space.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full">
            <a
              href="https://wa.me/2348075884433?text=I%20want%20to%20schedule%20a%20Quantum%20Bio-Analysis%20Scan"
              className={`w-full sm:w-auto ${ctaClass} text-white text-center font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md`}
            >
              Book Home Visits
            </a>
            <a
              href="/services"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 text-center font-bold text-sm px-6 py-3.5 border border-stone-200 rounded-xl shadow-sm transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>

        {/* Right Column – Fixed: text now spans full width */}
        <div className="lg:col-span-6 w-full flex flex-col items-center lg:items-end">
          <div className="w-full bg-white rounded-3xl p-3 shadow-md border border-stone-100 transform lg:scale-105 transition-transform duration-300">
            <Image
              src={heroImage}
              alt="Heavensgate Wellness Center bio-scan consultation"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl"
              priority
              placeholder="blur"
            />
          </div>

          <p className="mt-4 w-full text-center text-sm md:text-base font-medium text-slate-700 italic">
            <i className="fas fa-heart text-rose-500 mr-2"></i>
            Heavensgate Cares for you, your loved ones, and the aged at home.
          </p>

          <p className="mt-0 w-full text-center text-sm md:text-base font-medium text-slate-700 italic">
            <i className="fas fa-heart text-rose-500 mr-2"></i>
            It is our tradition to assess your wellness level before enhancing it.
          </p>
        </div>

      </div>
    </section>
  )
}