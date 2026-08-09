import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, slug, excerpt, mainImage, publishedAt, categories
}`

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id, title, body, mainImage, publishedAt, categories, "comments": *[_type == "comment" && post._ref == ^._id] | order(createdAt desc)
}`

export const PRODUCTS_QUERY = groq`*[_type == "product"] {
  _id, name, slug, subtitle, description, price, stockStatus, icon, mainImage
}`

export const PRODUCT_BY_SLUG_QUERY = groq`*[_type == "product" && slug.current == $slug][0]`

export const TESTIMONIALS_QUERY = groq`*[_type == "testimonial"] | order(_createdAt desc)[0...3] {
  _id, author, content, image
}`