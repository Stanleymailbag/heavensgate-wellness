'use client'

import { useTheme } from '@/lib/theme/ThemeContext'

export default function WhyChooseUs() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'

  const accentText = isGreen ? 'text-emerald-700' : 'text-amber-600'

  return (
    <section className="space-y-6 max-w-6xl mx-auto px-6 py-12">
      
      {/* Clean Centered Header without the accent line */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Why People Choose Us?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs flex gap-4">
          <div className={`p-3 rounded-xl h-fit ${isGreen ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
            <i className="fas fa-user-check text-lg"></i>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Personalized Attention</h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Experience dedicated 1-on-1 attention tailored specifically to your needs within a calm, restorative environment.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs flex gap-4">
          <div className={`p-3 rounded-xl h-fit ${isGreen ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
            <i className="fas fa-apple-alt text-lg"></i>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Foundational Wellness</h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              A dedicated focus on lifestyle modifications and targeted nutrition serving as the absolute foundation of your vitality.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs flex gap-4">
          <div className={`p-3 rounded-xl h-fit ${isGreen ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
            <i className="fas fa-user-md text-lg"></i>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Collaborative Approach</h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              We work cleanly <strong className={`font-bold ${accentText}`}>WITH</strong> your doctor, functioning as supportive partners to your primary medical care rather than a replacement.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs flex gap-4">
          <div className={`p-3 rounded-xl h-fit ${isGreen ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
            <i className="fas fa-mug-hot text-lg"></i>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Complementary Bonus</h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Enjoy a warm, relaxing cup of organic wellness tea blend or supplement served thoughtfully during your visit.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}