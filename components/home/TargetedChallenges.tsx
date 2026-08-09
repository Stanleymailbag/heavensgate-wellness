'use client'

import Image from 'next/image'
import { useTheme } from '@/lib/theme/ThemeContext'
import BookUs from '@/components/ui/BookUs'

const challenges = [
  { 
    icon: 'dna', 
    title: 'WAIST TENSION & STIFFNESS',
    imageUrl: '/images/tc_stiffness.jpg', 
    // Local image from your assets
    description: 'Feeling stiff after work or long hours? Our gentle relaxation sessions and massage balm can help you feel more comfortable and move easier in your daily activities. - Feel alright!'
  },
  { 
    icon: 'heartbeat', 
    title: 'TIRED & LOW ENERGY DAYS',
    // High-quality public CDN image for cardiovascular stamina
    imageUrl: '/images/tc_low_energy.jpg', 
    description: 'Are you feeling drained, tired, or low energy sometimes or every month? Through wellness coaching and natural herbal support like Ravella, etc, we share practical tips for hydration, rest, and daily routines to help you feel more refreshed and full of energy and free from body discomfort. - Feel OK!'
    // description: 'Constantly tired and unmotivated? We help you reset with lifestyle tips, footbath relaxation, and simple daily habits to support natural energy and peace of mind.'
  },
  { 
    icon: 'biohazard', 
    title: 'MUSCLE & JOINT DISCOMFORT',
    imageUrl: '/images/tc_joint_muscle.jpg', // Local image from your assets
    description: "Want to feel free and lighter from muscle and joint discomfort?  - Feel Free!"
  },
  { 
    icon: 'biohazard', 
    title: 'UNHAPPY FAMILY & MORALE',
    imageUrl: '/images/tc_happy_family.jpg', // Local image from your assets
    description: "Restore calmness, balanced energy, feel lighter, and more connected to your loved ones. - Feel Great!"
  },
]

export default function TargetedChallenges() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'
  
  const iconColor = isGreen ? 'text-emerald-700' : 'text-amber-600'
  const badgeBg = isGreen ? 'text-emerald-800 bg-emerald-50' : 'text-amber-800 bg-amber-50'
  const hoverBorder = isGreen ? 'hover:border-emerald-500/40' : 'hover:border-amber-500/40'

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-100 bg-gradient-to-b from-transparent to-slate-50/30">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block select-none ${badgeBg}`}>
          Scope of Wellness Fields
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
          How We Help You Feel More Comfortable
        </h2>
        <div className={`w-12 h-1 mx-auto mt-4 rounded-full ${isGreen ? 'bg-emerald-700' : 'bg-amber-600'}`}></div>
        <p className="text-slate-500 text-sm md:text-base font-light mt-4 leading-relaxed">
          Gentle wellness sessions and lifestyle support designed for your daily routine. Our approach focuses on relaxation, natural routines, and general well-being.
        </p>
        
      </div>
      
      {/* Cards Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {challenges.map((c) => (
          <div 
            key={c.title} 
            className={`bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${hoverBorder}`}
          >
            {/* Header Content */}
            <div className="p-5 pb-3">
              <div className="flex items-start justify-between space-x-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide leading-snug">
                  {c.title}
                </h4>
                <div className="p-2 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                  <i className={`fas fa-${c.icon} text-lg ${iconColor}`}></i>
                </div>
              </div>
            </div>

            {/* Facelift Image Container */}
            <div className="px-5 py-2 relative aspect-[4/3] w-full group overflow-hidden">
              <div className="w-full h-full rounded-xl overflow-hidden relative border border-slate-100 bg-slate-50">
                <Image 
                  src={c.imageUrl}
                  alt={c.title}
                  fill
                  sizes="(max-w-7xl) 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized={c.imageUrl.startsWith('http')} // Allows external image handling seamlessly without complex next.config remotePatterns setups
                />
              </div>
            </div>

            {/* Description Block */}
            <div className="p-5 pt-2">
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                {c.description}
              </p>
            </div>

          </div>
        ))}
      </div>
   

        <BookUs />
        
    </section>
  )
}