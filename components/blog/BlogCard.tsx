// components/blog/BlogCard.tsx
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/client'

export default function BlogCard({ post }: { post: any }) {
  // 1. Safe fallbacks for categories vs single category field
  const displayCategory = post.category || post.categories?.join(', ') || 'Health'

  // 2. Safe fallbacks for the plain-text introduction preview
  const displayExcerpt = post.excerpt || post.bodyText || 'Read the full clinical post to explore this topic...'

  return (
    <article className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-6">
      {post.mainImage && (
        <div className="w-full md:w-1/3 bg-emerald-100 rounded-xl aspect-[16/9] flex items-center justify-center overflow-hidden">
          <img
            src={urlFor(post.mainImage).width(400).height(250).url()}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">{displayCategory}</span>
          </div>
          <Link href={`/blog/${post.slug.current}`}>
            <h3 className="text-xl font-bold text-slate-900 mt-2 hover:text-emerald-800 cursor-pointer">
              {post.title}
            </h3>
          </Link>
          
          {/* 💡 FIXED: Uses fallback text string and adds line-clamp-3 to keep layout uniform */}
          <p className="text-slate-600 text-sm font-light mt-3 leading-relaxed line-clamp-3">
            {displayExcerpt}
          </p>
        </div>
      </div>
    </article>
  )
}