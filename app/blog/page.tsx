'use client'

import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity/client'
import { POSTS_QUERY } from '@/lib/sanity/queries'
import BlogSearch from '@/components/blog/BlogSearch'
import BlogCard from '@/components/blog/BlogCard'

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    client.fetch(POSTS_QUERY).then(setPosts)
  }, [])

  useEffect(() => {
    setFilteredPosts(posts)
  }, [posts])

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="border-b border-slate-200 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Health Update Portal</h1>
          <p className="text-slate-500 text-sm mt-1">Chronological botanical education from Heavensgate</p>
        </div>
        <BlogSearch posts={posts} onFilter={setFilteredPosts} />
      </div>
      <div className="space-y-8">
        {filteredPosts.map((post: any) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  )
}