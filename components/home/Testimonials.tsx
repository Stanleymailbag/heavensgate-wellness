import { client } from '@/lib/sanity/client'
import { TESTIMONIALS_QUERY } from '@/lib/sanity/queries'
import TestimonialCard from './TestimonialCard'
import BookUs from '@/components/ui/BookUs'

export default async function Testimonials() {
  const testimonials = await client.fetch(TESTIMONIALS_QUERY)

  if (!testimonials || testimonials.length === 0) return null

  return (
    <section className="py-12 md:py-16 bg-stone-100/60 border-y border-stone-200/50 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full inline-block select-none">
            Cient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mt-3 leading-tight">
            Some of our Clients' Testimonials...
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-normal mt-3 leading-relaxed">
            Discover how our wellness services have promoted peoples' vitality, comfort and general wellness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {testimonials.map((t: any) => (
            <TestimonialCard key={t._id || t.name} testimonial={t} />
          ))}
        </div>

      </div>

      
        <BookUs />
        
      
    </section>
  )
}