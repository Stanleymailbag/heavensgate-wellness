'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/theme/ThemeContext'
import BookUs from '@/components/ui/BookUs'

const offerings = [
  {
    icon: 'network-wired',
    title: 'Energy Wellness-Level Check',
    desc: 'A gentle 10-minute session using modern wellness technology. We review general wellness patterns to give you clear, personalized lifestyle tips for your daily comfort and routine. No needles. No pain. Just clarity.',
    link: '/services#nls-tech',
    image: 'images/quatum_b.jpg',
  },
  {
    icon: 'chart-line',
    title: 'Wellness Profile Determination',
    desc: 'Track your key wellness numbers like weight and general fitness targets. This helps you stay consistent with your daily comfort goals. We’ll review your progress and give simple tips you can use at home. Perfect for staying on track with your wellness routine.',
    link: '/services#health-tracking',
    image: 'images/health_tracking_b.jpg',
  },
  {
    icon: 'wine-bottle',
    title: 'Natural Herbal Support',
    desc: "Discover Ravella Herbal Blend and other 100% natural products. Made to complement your daily routine with warm water or tea. We also share simple hydration and nutrition tips to support your general well-being. Non-Alcoholic. Sugar-Free. Natural Ingredients.",
    link: '/services#organic-support',
    image: 'images/organic_solutions_b.jpg',
  },
  {
    icon: 'heartbeat',
    title: 'Warm Water Footbath Spa Massage / H2 Hydrogen Generated Water',
    desc: 'Unwind with our Warm Water Footbath Spa and Relaxation Chair. Gentle massage in a calming atmosphere designed to help you reduce tension, while drinking H2 hydrogen generated water that promotes energy wellness to make you feel refreshed after a long day. - 20 minutes of pure calm.',
    link: '/services#footbath-therapy',
    image: 'images/foot_massage_b.jpg',
  },
  // ★ NEW CARD – Body Massage Session ★
  {
    icon: 'spa',               // FontAwesome icon (free)
    title: 'Body Massage Session',
    desc: 'Experience our gentle machine-assisted body massage session. Our specialized equipment uses gentle, rhythmic pressure to relax muscles, improve circulation, and relieve tension. A soothing, non-invasive session that leaves you feeling rejuvenated and refreshed.',
    link: '/services#body-massage',
    image: 'images/body_massage_a.jpg',   // Use the image you uploaded
  },
]

export default function CoreOfferings() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'
  
  const badgeStyle = isGreen ? 'text-emerald-800 bg-emerald-50' : 'text-amber-800 bg-amber-50'
  const iconBg = isGreen ? 'bg-emerald-100/70' : 'bg-amber-100/70'
  const iconColor = isGreen ? 'text-emerald-700' : 'text-amber-700'
  const linkColor = isGreen ? 'text-emerald-700' : 'text-amber-700'
  const borderColor = isGreen ? 'border-slate-200/60' : 'border-slate-200/60'

  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 border-b border-slate-100">
      
      {/* Centered Header Block */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block select-none ${badgeStyle}`}>
          Primary Pillars 
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
          Our Wellness Services
        </h2>
      </div>
      
      {/* Full-width Stacked Rows Container */}
      <div className="flex flex-col gap-8">
        {offerings.map((o, index) => {
          const isImageLeft = index % 2 === 0

          return (
            <div 
              key={o.title} 
              className={`bg-white p-6 md:p-8 rounded-3xl shadow-xs border ${borderColor} flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-center transition-all duration-300 hover:shadow-md`}
            >
              
              {/* Image Column */}
              <div className={`w-full aspect-square sm:aspect-[21/9] lg:aspect-square lg:col-span-4 rounded-2xl overflow-hidden relative border border-slate-100 shadow-inner group shrink-0 ${
                isImageLeft ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <img 
                  src={o.image} 
                  alt={o.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 via-transparent to-transparent"></div>
              </div>
              
              {/* Text Content Column */}
              <div className={`flex-1 space-y-4 lg:col-span-8 ${
                isImageLeft ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 shrink-0 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center text-lg`}>
                    <i className={`fas fa-${o.icon}`}></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {o.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm font-light leading-relaxed max-w-3xl">
                  {o.desc}
                </p>
                
                <div className="pt-2">
                  <Link href={o.link} className={`${linkColor} font-bold text-sm inline-flex items-center hover:underline group`}>
                    Learn more 
                    <i className="fas fa-chevron-right ml-1 transition-transform duration-200 group-hover:translate-x-0.5 text-[10px]"></i>
                  </Link>
                </div>
              </div>

            </div>
          )
        })}
      </div>

      <BookUs />

    </section>
  )
}