'use client'

import { useState } from 'react'
import { useTheme } from '@/lib/theme/ThemeContext'

export default function JoinCommunity() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message || 'Subscribed successfully!')
        setEmail('')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 4000)
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (_) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section className="py-12 max-w-5xl mx-auto px-6 sm:px-8">
      <div className={`bg-gradient-to-br ${
        isGreen ? 'from-emerald-50 to-emerald-100/70 border-emerald-200' : 'from-amber-50 to-amber-100/70 border-amber-200'
      } rounded-3xl p-10 text-center border shadow-md`}>
        
        {/* ─── JOIN OUR COMMUNITY ─── */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Join Our Community
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Stay connected with Heavensgate Wellness for wellness tips, new product updates, and special offers. Follow us on social media or subscribe to our newsletter.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold transition shadow-sm"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-sm"
            >
              <i className="fab fa-youtube"></i> YouTube
            </a>
            <a
              href="https://wa.me/2348075884433"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-sm"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-6 font-light">
            Join our mailing list for exclusive wellness content and early access to new products.
          </p>

          <form onSubmit={handleSubmit} className="mt-3 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
              disabled={status === 'loading' || status === 'success'}
              required
            />
            <button
              type="submit"
              className={`${
                isGreen ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-amber-600 hover:bg-amber-700'
              } text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed`}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <p className="text-emerald-600 text-sm mt-2 font-medium">{message}</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm mt-2 font-medium">{message}</p>
          )}

          <p className="text-xs text-slate-400 mt-2">We respect your privacy. Unsubscribe anytime.</p>
        </div>

        {/* ─── SUBTLE DEMARCATION DIVIDER ─── */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className={`w-full border-t ${
              isGreen ? 'border-emerald-200/60' : 'border-amber-200/60'
            }`}></div>
          </div>
          <div className="relative flex justify-center">
            <span className={`px-4 text-[10px] font-semibold uppercase tracking-[0.2em] ${
              isGreen ? 'text-emerald-500' : 'text-amber-500'
            } bg-white/80 rounded-full py-1.5 shadow-sm`}>
              — Opportunity —
            </span>
          </div>
        </div>

        {/* ─── DISTRIBUTORS NEEDED ─── */}
        <div className={`rounded-2xl p-6 md:p-8 border-2 ${
          isGreen 
            ? 'border-emerald-200 bg-white' 
            : 'border-amber-200 bg-white'
        } shadow-sm`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className={`text-2xl ${isGreen ? 'text-emerald-600' : 'text-amber-600'}`}>
              <i className="fas fa-truck"></i>
            </span>
            <h3 className={`text-xl md:text-2xl font-extrabold tracking-tight ${
              isGreen ? 'text-emerald-800' : 'text-amber-800'
            }`}>
              DISTRIBUTORS NEEDED
            </h3>
          </div>
          <p className="text-slate-600 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Are you passionate about natural wellness? Partner with Heavensgate Wellness to bring our premium organic products to your community. We're looking for dedicated distributors across Nigeria.
          </p>

          
          <div className="mt-5">
            <a
              href="https://wa.me/2348075884433?text=I%20want%20to%20become%20a%20Heavensgate%20Wellness%20distributor"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg ${
                isGreen
                  ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                  : 'bg-amber-600 hover:bg-amber-700 text-white'
              }`}
            >
              <i className="fab fa-whatsapp"></i> Inquire Now – Become a Distributor
            </a>
          </div>
        </div>


          {/* ★ NEW: Bonus & rewards line ★ */}
          <p className={`mt-7 text-sm font-semibold ${
            isGreen ? 'text-emerald-700' : 'text-amber-700'
          }`}>
            <i className="fas fa-star mr-1.5"></i>
            Best bonus and handsome rewards are available for you!
          </p>

      </div>
    </section>
  )
}