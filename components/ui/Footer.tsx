'use client'

import { useTheme } from '@/lib/theme/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm pt-12 pb-6 border-t border-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
        <div>
          <h4 className="text-white font-bold text-base mb-3">Heavensgate Wellness Center</h4>
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            Providing structural health restorations using pure biological assessments and unadulterated organic remedies.
          </p>
          <div className="mt-4 flex space-x-4 text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-lg"><i className="fab fa-facebook"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 text-lg"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="text-xs font-light space-y-3">
          <h4 className="text-white font-bold text-sm">Our Center</h4>
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            <strong className="text-slate-200 block font-semibold">Primary Center:</strong> Plot A10 Ehimiri Housing Estate, by World Bank Police Division, KM4, Ikot Ekpene Road, Umuahia.
          </p>
        </div>
        <div className="text-xs font-light">
          <h4 className="text-white font-bold text-sm mb-3">Direct Channels</h4>
          <p className="text-sm text-slate-400 leading-relaxed font-light">For appointments, home-service requests, or product orders, chat with our triage team directly.</p>
          <p className="mt-3 text-[14px] text-white font-bold">
            <i className={`fab fa-whatsapp ${isGreen ? 'text-green-400' : 'text-amber-400'} mr-1.5 text-sm align-middle`}></i>
            +234 708 879 1808
          </p>
        </div>
      </div>

      {/* ★ UPDATED: Combined disclaimer matching homepage wording */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 text-[11px] text-slate-500 font-light leading-relaxed text-center">
        <strong>Disclaimer:</strong> Our herbal products are food supplements and our services are not intended to diagnose, treat, cure, or prevent any disease. Our wellness assessments and support are complementary and not a substitute for professional medical advice. Always consult your physician for any medical condition. Individual results may vary.
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 text-center text-xs text-slate-600">
        © 2026 Heavensgate Wellness Center Nigeria. Powered by{' '}
        <a 
          href="#" 
          className="hover:text-slate-400 transition-colors duration-200 underline underline-offset-2 font-medium"
        >
          Impecks SoftConcepts
        </a>
      </div>
    </footer>
  )
}