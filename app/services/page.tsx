'use client'

import Image from 'next/image'
import { useTheme } from '@/lib/theme/ThemeContext'

const services = [
  {
    id: 'nls-tech',
    icon: 'network-wired',
    title: '10-Minutes Energy Wellness Check',
    imageUrl: '/images/quatum_b.jpg',
    desc: "A gentle, non-invasive session using modern wellness technology. We review general wellness patterns to give you clear, personalized lifestyle tips for your daily routine. This helps you understand where to focus on rest, nutrition, and self-care. (Price: From =N=10,000.00)",
    waText: 'Enquire via Whatsapp (+2348075884433)',
  },
  {
    id: 'health-tracking',
    icon: 'chart-line',
    title: 'Health Tracking Scale & Benchmarks',
    imageUrl: '/images/health_tracking_b.jpg',
    desc: 'We monitor key lifestyle indicators to help you stay aligned with your wellness goals. This foundational evaluation tracks your ongoing progress, supporting your long-term daily comfort objectives through clear physical metrics and cumulative trend analysis.',
    waText: 'Enquiry regarding Health Tracking Scale Services',
  },
  {
    id: 'organic-support',
    icon: 'wine-bottle',
    title: 'Ultra Solution & Premium Organic Therapeutics',
    imageUrl: '/images/organic_solutions_b.jpg',
    desc: 'We offer carefully formulated wellness blends, associated premium botanical supplements. These organic formulations are designed to support natural body nourishment and promote core functional system wellness, all without the harsh synthetic load found in many conventional products.',
    waText: 'Enquiry regarding Ultra Solution',
  },
  {
    id: 'footbath-therapy',
    icon: 'heartbeat',
    title: 'Footbath Spa Relaxation Session & Ultra H2 Hydrogen Generating Water Support',
    imageUrl: '/images/foot_massage_b.jpg',
    desc: 'Unwind with our Spa Foothbath and relaxation chair, warm water, gentle massage, and calming atmosphere designed to help you release stress and feel refreshed after a long day. 20 minutes of pure calm (From =N=10,000.00)',
    waText: 'Book Relaxation Time',
  },
  {
    id: 'organ-profiling',
    icon: 'activity',
    title: 'Bio-Wellness Assessment',
    imageUrl: '/images/Bio_wellness_Assessments.jpg',
    desc: "We provide valuable insight of your body's overall wellness through a comprehensive bio-wellness assessment. This session reviews wellness indicators across your body's key sub-systems — including digestive wellness, natural cleansing processes, energy balance, and everyday vitality — to provide a personalized wellness profile and help identify areas where additional lifestyle or nutritional support may be beneficial.",
    waText: 'Enquiry regarding Quantum Organ Analysis',
  },
]

export default function ServicesPage() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'

  const iconColor = isGreen ? 'text-emerald-700' : 'text-amber-600'
  const iconBg = isGreen ? 'bg-emerald-50' : 'bg-amber-50'
  const badgeStyle = isGreen ? 'text-emerald-800 bg-emerald-50' : 'text-amber-800 bg-amber-50'
  const btnStyle = isGreen ? 'text-white bg-emerald-800 hover:bg-emerald-950' : 'text-white bg-amber-700 hover:bg-amber-800'
  const borderHover = isGreen ? 'hover:border-emerald-500/30' : 'hover:border-amber-500/30'

  return (
    <main className="min-h-screen bg-stone-50/50 antialiased pb-20">
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-100 py-14 mb-12">
        <div className="max-w-5xl mx-auto px-6">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block select-none ${badgeStyle}`}>
            Our Wellness Services
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Our Wellness Support Services
          </h1>
          <p className="text-slate-500 text-sm md:text-base font-light mt-2 max-w-2xl leading-relaxed">
            Simple, relaxing sessions to support your daily comfort and well-being. All sessions done in a calm, professional environment. Home visits available.
          </p>

          <p className="mt-4 w-full text-sm md:text-base font-medium text-slate-700 italic">
            <i className="fas fa-heart text-rose-500 mr-2"></i>
            Heavensgate Cares for you, your loved ones, and the aged at home.
          </p>
        </div>
      </div>

      {/* Services Cards List */}
      <div className="max-w-5xl mx-auto px-6 space-y-8 scroll-smooth">
        {services.map((s) => (
          <div 
            id={s.id}
            key={s.title} 
            className="bg-white rounded-3xl shadow-sm border border-slate-200/70 overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col lg:flex-row items-stretch target:ring-2 target:ring-offset-2 target:ring-emerald-600/30 dynamic-target"
          >
            {/* Visual Column */}
            <div className="relative w-full lg:w-2/5 min-h-[240px] bg-slate-100 shrink-0">
              <Image
                src={s.imageUrl}
                alt={s.title}
                fill
                sizes="(max-w-5xl) 40vw"
                className="object-cover"
                unoptimized
                priority
              />
              {/* Floating Icon Badge */}
              <div className={`absolute top-4 left-4 p-3 rounded-xl shadow-md ${iconBg} ${iconColor} flex items-center justify-center`}>
                <i className={`fas fa-${s.icon} text-xl`}></i>
              </div>
            </div>

            {/* Detailed Context Column */}
            <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                {s.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6">
                {s.desc}
              </p>
              <div>
                <a
                  href={`https://wa.me/2348075884433?text=${encodeURIComponent(s.waText)}`}
                  className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all duration-300 shadow-sm ${btnStyle}`}
                >
                  <i className="fab fa-whatsapp text-sm"></i>
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}