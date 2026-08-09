import {client} from '@/lib/sanity/client'
import {NextResponse} from 'next/server'

export async function POST(req: Request) {
  const {postId, text} = await req.json()
  const doc = await client.create({
    _type: 'comment',
    post: {_type: 'reference', _ref: postId},
    text,
    _createdAt: new Date().toISOString(),
  })
  return NextResponse.json(doc)
}

export async function DELETE(req: Request) {
  const {commentId} = await req.json()
  await client.delete(commentId)
  return NextResponse.json({success: true})
}