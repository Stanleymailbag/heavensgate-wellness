// lib/sanity/queries.ts
import { groq } from 'next-sanity'

// 1. Fully unified posts query supporting the stripped plain-text snippet
export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current) && hidden != true] | order(publishedAt desc) {
  _id, 
  title, 
  slug, 
  publishedAt, 
  category, 
  mainImage, 
  "bodyText": pt::text(body),
  "excerpt": pt::text(body)
}`

// 2. Updated detail query that fallback checks slug formats or matching titles
export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && (slug.current == $slug || title == $slug)][0] {
  _id, 
  title, 
  body, 
  mainImage, 
  publishedAt, 
  category, 
  "comments": *[_type == "comment" && post._ref == ^._id] | order(_createdAt desc)
}`


// 3. Complete store index data fetch query (Keep this for your full shop page)
export const PRODUCTS_QUERY = groq`*[_type == "product"] | order(featured desc) {
  _id,
  name,
  slug,
  description,
  subtitle,
  stockStatus,
  icon,
  mainImage,
  image
}`

// NEW: Dedicated homepage query filtering for ONLY featured items
//export const FEATURED_PRODUCTS_QUERY = groq`*[_type == "product" && featured == true] | order(_createdAt desc) {
// Old Query might look like: *[_type == "product"] | order(_createdAt desc)
// Change it to sort by orderRank asc:

export const FEATURED_PRODUCTS_QUERY = `*[_type == "product" && featured == true] | order(orderRank asc) {
  _id,
  name,
  slug,
  description,
  subtitle,
  stockStatus,
  icon,
  mainImage,
  image
}`

// 4. Overhauled single product query mapping the precise 'details' block array
export const PRODUCT_BY_SLUG_QUERY = groq`*[_type == "product" && (slug.current == $slug || name == $slug)][0] {
  _id,
  name,
  slug,
  description,
  subtitle,
  stockStatus,
  icon,
  mainImage,
  image,
  price,
  details
}`

export const TESTIMONIALS_QUERY = groq`*[_type == "testimonial" && active == true] | order(_createdAt desc)`



