// app/blog/[slug]/page.tsx

import Link from 'next/link'
import Image from 'next/image' // 💡 Added Next.js Image Component
import { client } from '@/lib/sanity/client'
import { urlFor } from '@/lib/sanity/client' // 💡 Added your image URL builder helper
import { POST_BY_SLUG_QUERY } from '@/lib/sanity/queries'
import { PortableText } from '@portabletext/react'
import CommentSection from '@/components/blog/CommentSection'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params
  const slug = decodeURIComponent(resolvedParams.slug)
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug })

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-xl font-bold text-slate-900">Post Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">
          Could not retrieve an article matching: <span className="font-semibold text-slate-700">"{slug}"</span>
        </p>
        <div className="mt-6">
          <Link 
            href="/blog" 
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors duration-200 inline-flex items-center gap-2"
          >
            Return to Blog Portal
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-slate-800 antialiased">
      
      {/* Navigation Header Layer */}
      <nav className="mb-8 flex items-center justify-between border-b border-slate-100 pb-4">
        <Link 
          href="/blog" 
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
          Back to Articles
        </Link>
        
        <Link 
          href="/" 
          className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors duration-200"
        >
          Home Portal
        </Link>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-2">
          {post.title}
        </h1>
        {post.publishedAt && (
          <p className="text-xs text-slate-400 font-medium">
            Published: {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        )}
      </header>

      {/* 💡 THE IMAGE FIX: Modern 16:9 Landscape Content Framing */}
      {post.mainImage && (
        <div className="w-full bg-white rounded-3xl p-3 shadow-md border border-slate-100 mb-10 overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(1200).height(675).url()}
            alt={post.title}
            width={1200}
            height={675}
            className="w-full h-auto rounded-2xl object-cover aspect-[16/9]"
            priority // Forces fast loading for above-the-fold content
          />
        </div>
      )}

      {/* Main post rich-text body layout wrapper */}
      <div className="prose prose-slate max-w-none text-base leading-relaxed space-y-6 mb-12">
        {post.body ? (
          <PortableText value={post.body} />
        ) : (
          <p className="text-slate-400 italic">No content has been published inside this article yet.</p>
        )}
      </div>
      
      {/* Dynamic Client Comment Component Container */}
      <CommentSection postId={post._id} initialComments={post.comments || []} />
    </article>
  )
}