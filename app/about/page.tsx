'use client'

import { useTheme } from '@/lib/theme/ThemeContext'

export default function AboutPage() {
  const { theme } = useTheme()
  const isGreen = theme === 'green'

  const badgeStyle = isGreen ? 'text-emerald-800 bg-emerald-50' : 'text-amber-800 bg-amber-50'
  const accentText = isGreen ? 'text-emerald-700' : 'text-amber-600'
  const btnStyle = isGreen ? 'bg-emerald-800 hover:bg-emerald-900 text-white' : 'bg-amber-700 hover:bg-amber-800 text-white'
  const cardBorder = isGreen ? 'border-emerald-100 bg-emerald-50/20' : 'border-amber-100 bg-amber-50/20'
  const nameColor = isGreen ? 'text-emerald-800' : 'text-amber-700'

  const bookingNumbers = [
    { label: 'Primary Support', number: '08037161334' },
    { label: 'Secondary Support', number: '09128604617' },
    { label: 'Alternative Enquiries', number: '08075884433' }
  ]

  return (
    <main className="min-h-screen bg-stone-50/40 antialiased pb-24 relative">
      
      {/* Premium Elegant Header Banner */}
      <div className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block select-none ${badgeStyle}`}>
            OUR CORE MISSION
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mt-4">
            About Heavensgate Holistic Wellness
          </h1>
          <div className={`w-12 h-1 mx-auto mt-4 rounded-full ${isGreen ? 'bg-emerald-700' : 'bg-amber-600'}`}></div>
          <p className="mt-4 w-full text-sm md:text-base font-medium text-slate-700 italic">
            <i className="fas fa-heart text-rose-500 mr-2"></i>
            Heavensgate Cares for you, your loved ones, and the aged at home.
          </p>
        </div>
      </div>

      {/* ★ NEW: Rich Introductory Section – Who We Are ★ */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Left: Credentials & Bio */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Welcome to Heavensgate Wellness
                </h2>
                
                <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                  <span className="font-bold text-slate-800">Pastor David Eme</span> is a{' '}
                  <span className={`font-semibold ${accentText}`}>Naturopathic Medicine Practitioner</span>{' '}
                  and Consultant at Heavensgate Wellness — a Division of{' '}
                  <span className="font-semibold text-slate-800">Daemobiz Investments Nigeria Limited</span>{' '}
                  <span className="text-slate-500 text-xs">(RC: 7379693)</span>.
                </p>
                
                <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                  With years of experience in natural wellness, Pastor David Eme combines 
                  compassionate care with practical wellness strategies to help individuals 
                  and families achieve better comfort, vitality, and emotional balance — 
                  including the aged (men 45 - 65+; and women 25 - 45+) and those who are less able to move about freely.
                </p>
                
                <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                  Heavensgate Wellness offers a holistic approach that addresses not just 
                  physical discomfort, but also the emotional and nutritional foundations 
                  that restore comfort, calm, and daily vitality. 
                </p>

                
                <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                  It is our tradition to assess your wellness level before enhancing it.
                </p>
              </div>

              {/* Right: Quick Stats / Trust Indicators */}
              <div className="lg:col-span-1 bg-stone-50/80 rounded-2xl p-6 border border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  At a Glance
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <i className={`fas fa-user-md ${accentText} text-base mt-0.5`}></i>
                    <div>
                      <span className="block font-semibold text-slate-800">Naturopathic Practitioner</span>
                      <span className="text-xs text-slate-500">Pastor David Eme</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className={`fas fa-building ${accentText} text-base mt-0.5`}></i>
                    <div>
                      <span className="block font-semibold text-slate-800">Division of</span>
                      <span className="text-xs text-slate-500">Daemobiz Investments Nigeria Ltd</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className={`fas fa-home ${accentText} text-base mt-0.5`}></i>
                    <div>
                      <span className="block font-semibold text-slate-800">Home Visits Available</span>
                      <span className="text-xs text-slate-500">Serving Umuahia & nearby areas</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className={`fas fa-calendar-check ${accentText} text-base mt-0.5`}></i>
                    <div>
                      <span className="block font-semibold text-slate-800">By Appointment</span>
                      <span className="text-xs text-slate-500">Mon–Sat flexible hours</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <a
                    href="https://wa.me/2348075884433?text=Hello%20Pastor%20David%20Eme%2C%20I%27d%20like%20to%20book%20a%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 ${btnStyle} text-center font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200`}
                  >
                    <i className="fab fa-whatsapp"></i> Book a Consultation
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Existing Content – Kept Intact */}
      <div className="max-w-6xl mx-auto px-6 mt-12 space-y-12">
        
        {/* Enriched Editorial Split Row */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 md:p-10 rounded-3xl border border-slate-200/60 shadow-xs">
          
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We are Excited to Partner With You On Your 
              <span className={accentText}> Natural Wellness Journey</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Located in Umuahia, we provide personalized wellness consultations, nutrition guidance, herbal support, and non-invasive therapies including traditional techniques to help you manage stress, improve energy, and build healthier daily habits. We help you look closely at the core pillars that support natural vitality: water, food, movement, rest, mood, and comfort management.
            </p>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Our services are designed to offer complementary wellness support. We build optimal lifestyle adjustments alongside your licensed healthcare practitioners—working to compliment your physician.
            </p>
          </div>

          <div className="lg:col-span-5 w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner group">
            <img 
              src="/images/wellness_treatment.jpg" 
              alt="Heavensgate Wellness Center Environment" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent"></div>
            <span className="absolute bottom-4 left-4 text-[10px] font-bold text-white uppercase tracking-wider bg-slate-900/60 backdrop-blur-xs px-2.5 py-1 rounded">
              Umuahia Center
            </span>
          </div>
        </section>

        {/* Subtle Caveat Block */}
        <section className={`p-6 md:p-8 rounded-2xl border-l-4 border shadow-xs ${cardBorder}`}>
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-2">
            <i className={`fas fa-info-circle ${accentText}`}></i>
            Our Wellness Philosophy & Partnership Care
          </h4>
          <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed">
            Heavensgate Holistic Wellness provides complementary wellness support only. We do not replace medical diagnosis or treatment, nor do we claim to treat or cure any illness. Please continue ongoing care with your licensed physician. Individual results vary naturally based on lifestyle parameters.
          </p>
        </section>

        {/* Practice Operational Details & Booking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/60 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <i className={`fas fa-map-marker-alt ${accentText}`}></i> Visit Our Center
              </h3>
              <p className="text-slate-700 text-sm font-medium mb-4 leading-relaxed">
                Plot A10, Ehimiri Housing Estate,<br />
                Umuahia, Abia State, Nigeria
              </p>
            </div>
            <div className="border-t border-slate-100 pt-4 mt-2">
              <span className="text-[12px] uppercase tracking-wider font-bold text-slate-800 block mb-1">Our Open Hours</span>
              <p className="text-slate-600 text-sm font-medium">Mon–Fri: 8:30am – 5:00pm</p>
              <p className="text-slate-600 text-sm font-medium mt-0.5">Sat: 8:30am – 1:00pm <span className="text-slate-500 font-light">(By Appointment)</span></p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/60 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <i className={`fas fa-phone-alt ${accentText}`}></i> Call & WhatsApp Bookings
            </h3>
            <p className="text-slate-500 text-sm font-light mb-4">
              Get in touch with our front desk directly to confirm schedules, verify parameters, or secure your consultation slot.
            </p>
            <div className="space-y-2.5">
              {bookingNumbers.map((phone) => (
                <a
                  key={phone.number}
                  href={`https://wa.me/234${phone.number.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 group transition-all duration-200"
                >
                  <div>
                    <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">{phone.label}</span>
                    <span className="text-xs md:text-sm font-mono font-bold text-slate-800 tracking-wide">{phone.number}</span>
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xs group-hover:scale-105 transition-transform duration-200 ${btnStyle}`}>
                    Connect
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Floating Booking Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/234${bookingNumbers[0].number.slice(1)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-5 py-3.5 rounded-full shadow-lg font-bold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 animate-pulse ${
            isGreen 
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20' 
              : 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'
          }`}
          style={{ animationDuration: '3s' }}
        >
          <i className="fab fa-whatsapp text-xl"></i> Book Now
        </a>
      </div>

    </main>
  )
}