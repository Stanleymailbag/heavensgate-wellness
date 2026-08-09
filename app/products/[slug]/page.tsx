// app/products/[slug]/page.tsx

import Link from 'next/link'
import { client } from '@/lib/sanity/client'
import { urlFor } from '@/lib/sanity/client'
import { PRODUCT_BY_SLUG_QUERY } from '@/lib/sanity/queries'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

// 1. Dynamic metadata processing for search indexing optimization
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const slug = decodeURIComponent(resolvedParams.slug)
  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug })
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.name} | Heavensgate Organic Store`,
    description: product.description,
  }
}

// 2. Main Entry Page Component
export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params
  const slug = decodeURIComponent(resolvedParams.slug)

  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug })
  if (!product) notFound()

  // Resolve product images safely
  const imageAsset = product.mainImage || product.image
  const imageUrl = imageAsset ? urlFor(imageAsset).width(800).height(800).url() : null
  const inStock = product.stockStatus === 'In Stock' || product.stockStatus === 'in-stock'

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-slate-800 antialiased">
      {/* Return Navigation Anchor Layer */}
      <nav className="mb-8 border-b border-slate-100 pb-4">
        <Link
          href="/products"
          className="group text-sm font-semibold text-slate-500 hover:text-emerald-800 transition-colors duration-200 inline-flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Store Catalog
        </Link>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left column: Visual Product Framing Block */}
        <div className="bg-white rounded-3xl p-3 shadow-md border border-slate-100 overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-2xl object-cover aspect-square"
            />
          ) : (
            <div className="aspect-square bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400">
              <i className="fas fa-wine-bottle text-5xl mb-3 text-emerald-800"></i>
              <span className="text-xs font-mono tracking-wider">No image uploaded</span>
            </div>
          )}
        </div>

        {/* Right column: Content Details Display Block */}
        <div>
          <div className="mb-6">
            <span className={`inline-block text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded shadow-sm mb-3 ${
              inStock ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-800'
            }`}>
              Status: {inStock ? 'IN STOCK' : 'TEMPORARILY UNAVAILABLE'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-2">
              {product.name}
            </h1>
            {product.subtitle && (
              <p className="text-xs uppercase tracking-wider font-bold text-emerald-700">
                {product.subtitle}
              </p>
            )}
          </div>

          {/* Short description section (acts as an opening blockquote) */}
          {product.description && (
            <p className="text-slate-600 text-sm leading-relaxed mb-6 border-l-4 border-emerald-200 pl-4 italic bg-slate-50/50 py-2 rounded-r-xl">
              {product.description}
            </p>
          )}

          {/* Full Rich-text Details Canvas Element */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            {product.details && product.details.length > 0 ? (
              <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-4 prose-headings:text-slate-950 prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-2 prose-a:text-emerald-700 prose-ul:list-disc prose-ul:pl-5">
                <PortableText value={product.details} />
              </div>
            ) : (
              <p className="text-slate-400 text-xs italic">
                Full clinical analysis and product breakdown coming soon. Contact our support team for documentation requests.
              </p>
            )}
          </div>

          {/* Order Call-To-Action Layout Element */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <a
              href={`https://wa.me/2348075884433?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-center text-white text-xs font-bold px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 transform active:scale-[0.98] bg-emerald-800 hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700"
            >
              <i className="fab fa-whatsapp mr-2 text-sm"></i>
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}