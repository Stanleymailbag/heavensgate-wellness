// components/products/ProductCard.tsx
'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/theme/ThemeContext'
import { urlFor } from '@/lib/sanity/client'

export default function ProductCard({ product }: { product: any }) {
  const { theme } = useTheme()
  const isGreen = theme === 'green'
  
  // 1. Define theme colors matching your global layout tokens
  const activeBrandBg = isGreen 
    ? 'bg-emerald-800 hover:bg-emerald-900 focus:ring-emerald-700' 
    : 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500'

  const activeTextHover = isGreen 
    ? 'hover:text-emerald-800' 
    : 'hover:text-amber-600'

  // 2. Normalize stock status parameters
  const inStock = product.stockStatus === 'In Stock' || product.stockStatus === 'in-stock'
  const stockBadgeClass = inStock
    ? isGreen ? 'bg-emerald-900/90 text-emerald-100' : 'bg-amber-900/90 text-amber-100'
    : 'bg-rose-600 text-white'

  // 3. REMOVED .height(600) constraint so the full aspect ratio of your bottles passes through natively
  const imageAsset = product.mainImage || product.image
  const imageUrl = imageAsset ? urlFor(imageAsset).width(600).url() : null

  // 4. Fallback safeguard for missing or unset slugs to prevent routing crashes
  const productSlug = product.slug?.current || encodeURIComponent(product.name || '')

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 flex flex-col justify-between group relative transition-all duration-300 hover:shadow-lg">
      
      {/* Absolute Overlay Stock Availability Indicator Badge */}
      <div className={`absolute top-4 right-4 z-10 text-[10px] font-bold px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${stockBadgeClass}`}>
        STATUS: {inStock ? 'IN STOCK' : 'BACK IN 2 DAYS'}
      </div>
      
      <div>
        {/* Product Media Canvas Container - Changed background to #f7f5eb / #faf9f6 blend to seamlessly match bottle backgrounds */}
        <div className="w-full aspect-[4/5] bg-[#f9f8f3] rounded-xl mb-4 flex flex-col items-center justify-center text-slate-400 border border-slate-100 overflow-hidden relative p-2">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name || 'Product Image'}
              /* Swapped object-cover with object-contain to guarantee 100% visibility of bottle silhouettes */
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <>
              <i className={`fas fa-${product.icon || 'wine-bottle'} text-4xl ${isGreen ? 'text-emerald-800' : 'text-amber-700'} mb-2`}></i>
              <span className="text-[10px] font-mono text-slate-400">PRODUCT CANVAS</span>
            </>
          )}
        </div>

        {/* Dynamic Title Header Link Layer with Adaptive Brand Colors */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
          <Link 
            href={`/products/${productSlug}`} 
            className={`transition-colors duration-200 ${activeTextHover}`}
          >
            {product.name}
          </Link>
        </h3>
        
        <p className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold mt-1">
          {product.subtitle}
        </p>
        
        <p className="text-slate-600 text-sm font-light mt-3 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Dynamic WhatsApp Order Call-To-Action Element */}
      <a
        href={`https://wa.me/2348075884433?text=I%20want%20to%20order%20${encodeURIComponent(product.name || '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 w-full text-white text-center block text-xs font-semibold py-3 rounded-xl shadow-sm transition-all duration-200 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 ${activeBrandBg}`}
      >
        <i className="fab fa-whatsapp mr-1.5 text-sm align-middle"></i>
        Order via WhatsApp
      </a>
    </div>
  )
}