import { client } from '@/lib/sanity/client'
import { POSTS_QUERY } from '@/lib/sanity/queries'
import BlogClient from  './BlogClient'

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY)
  return <BlogClient initialPosts={posts} />
}




