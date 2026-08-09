import Hero from '@/components/home/Hero'
import TargetedChallenges from '@/components/home/TargetedChallenges'
import CoreOfferings from '@/components/home/CoreOfferings'
import ProductGrid from '@/components/products/ProductGrid'
import Methodology from '@/components/home/Methodology'
import FAQ from '@/components/home/FAQ'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import JoinCommunity from '@/components/home/JoinCommunity'  // ★ ADD THIS
import BookUs from '@/components/ui/BookUs'

import Link from 'next/link'

import { client } from '@/lib/sanity/client'
import { FEATURED_PRODUCTS_QUERY, TESTIMONIALS_QUERY } from '@/lib/sanity/queries'

export const revalidate = 0

export default async function HomePage() {
  const [featuredProducts, testimonials] = await Promise.all([
    client.fetch(FEATURED_PRODUCTS_QUERY),
    client.fetch(TESTIMONIALS_QUERY)
  ])

  return (
    <main className="space-y-6 md:space-y-8 bg-stone-50 text-slate-800 antialiased pb-16">
      <Hero />
      <TargetedChallenges />
      <CoreOfferings />

      <section className="pt-4 pb-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full inline-block select-none">
            Premium Wellness Solutions
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            Some of the Botanical Herbal Blends Used and Sold at Heavensgate Wellness
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-normal mt-2 leading-relaxed">
            Discover premium organic, NAFDAC-registered supplements formulated to support your body's natural filtration processes, encourage comfortable circulation, and nourish your overall system for sustained daily vitality.            
          </p>
        </div>
        
        <ProductGrid products={featuredProducts} />

        
        
        <BookUs />
        


        <div className="mt-10 flex justify-center">
                  <a
                    href="/products"
                    className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-900 transition-colors duration-200 group"
                  >
                    See more products in the store
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

      </section>

      <Methodology />
      <WhyChooseUs />

      {/* ★ REPLACE old inline section with new component ★ */}
      <JoinCommunity />

      <FAQ />
      <Testimonials />
    </main>
  )
}