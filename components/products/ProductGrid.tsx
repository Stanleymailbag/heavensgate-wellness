import ProductCard from './ProductCard'

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-10 items-stretch">
      {products.map((product, index) => (
        <div 
          key={product._id || product.slug?.current || index} 
          className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-27px)] flex"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}