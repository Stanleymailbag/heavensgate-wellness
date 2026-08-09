import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {name: 'name', type: 'string'},
    {name: 'location', type: 'string'},
    {name: 'content', type: 'text'},
    {name: 'active', type: 'boolean', initialValue: true},
  ],
})