'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Is the Energy Wellness-Level Check painful or invasive?',
    a: "Not at all. The sensors simply rest against your skin (palms, fingers, ears). There are no needles, shocks, or discomfort—just gentle readings of your body's natural frequencies.",
  },
  {
    q: 'How can I schedule a visit for home wellness session?',
    a: 'Simply click the WhatsApp button on any page, mention "home service", and our team will arrange a date. We prioritize weak/elderly patients with a dedicated mobile unit.',
  },
  {
    q: 'Are your organic products registered and safe?',
    a: 'All our herbal blends are NAFDAC-registered, 100% botanical, non-alcoholic, and free from synthetic additives, designed as complementary food supplements.',
  },
  {
    q: 'How much are your organic products and services?',
    a: 'Our products and services are very affordable. Please check our Organic Products and Services pages for our prices.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-10 max-w-4xl mx-auto px-6 border-b border-slate-100">
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full inline-block select-none">
          Support & Clarity
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-500 text-sm md:text-base font-light mt-2">
          Direct explanations about the natural herbal blends and services in Heavensgate Wellness.
        </p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left flex justify-between items-center p-5 md:p-6 text-base md:text-lg font-bold text-slate-900 hover:text-slate-700 transition-colors focus:outline-none"
              >
                <span className="pr-4 leading-snug">{faq.q}</span>
                <i 
                  className={`fas fa-chevron-down text-slate-400 text-sm transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-teal-600' : ''
                  }`}
                ></i>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-slate-600 font-normal leading-relaxed border-t border-slate-50 pt-3">
                  {faq.a}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}