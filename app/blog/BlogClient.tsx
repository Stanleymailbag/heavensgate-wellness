'use client'

import { useState } from 'react'
import BlogSearch from '@/components/blog/BlogSearch'
import BlogCard from '@/components/blog/BlogCard'

export default function BlogClient({ initialPosts }: { initialPosts: any[] }) {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts)

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="border-b border-slate-200 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Health Update Portal</h1>
          <p className="text-slate-500 text-sm mt-1">Chronological botanical education from Heavensgate</p>
        </div>
        <BlogSearch posts={initialPosts} onFilter={setFilteredPosts} />
      </div>
      <div className="space-y-8">
        {filteredPosts.map((post: any) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  )
}