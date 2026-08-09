'use client'

import { useState } from 'react'

// Widened type boundary to accept state initialized as never[] safely
interface BlogSearchProps {
  posts: any[]
  onFilter: ((filtered: any[]) => void) | React.Dispatch<React.SetStateAction<any[]>> | React.Dispatch<React.SetStateAction<never[]>>
}

export default function BlogSearch({ posts, onFilter }: BlogSearchProps) {
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearch(term)
    
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(term) ||
      (post.categories?.join(' ') || '').toLowerCase().includes(term)
    )
    
    // Check if onFilter is a state updater function or a direct callback handler
    if (typeof onFilter === 'function') {
      // Cast safely to executing function to clear internal assignment loops
      (onFilter as Function)(filtered)
    }
  }

  return (
    <div className="relative w-full md:w-72">
      <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search updates..."
        className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-700"
      />
    </div>
  )
}