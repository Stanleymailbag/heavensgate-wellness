import { defineType, defineField } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    // 1. Inject the official orderRank field
    orderRankField({ type: 'product' }),
    
    // 2. Standard fields
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
    defineField({ name: 'details', title: 'Full Details', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Product Image', type: 'image' }),
    defineField({
      name: 'stockStatus',
      title: 'Stock Status',
      type: 'string',
      options: { list: ['In Stock', 'Out of Stock', 'Back in 2 days'] },
      initialValue: 'In Stock',
    }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
  ],
})