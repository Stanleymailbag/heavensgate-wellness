import { client } from '@/lib/sanity/client'
import { PRODUCTS_QUERY } from '@/lib/sanity/queries'
import ProductGrid from '@/components/products/ProductGrid'

export default async function ProductsPage() {
  const products = await client.fetch(PRODUCTS_QUERY)

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Organic Store Portfolio</h2>
          <p className="text-slate-500 text-sm mt-1">Hover over products to see stock status</p>
        </div>
        {/* Admin button – can be added later */}
      </div>
      <ProductGrid products={products} />
    </main>
  )
}