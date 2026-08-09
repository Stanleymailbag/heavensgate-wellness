import { client } from '@/lib/sanity/client'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.trim()) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Check if email already exists
    const existing = await client.fetch(
      `*[_type == "subscriber" && email == $email][0]`,
      { email: email.trim() }
    )

    if (existing) {
      return NextResponse.json(
        { message: 'You are already subscribed! Thank you.' },
        { status: 200 }
      )
    }

    // Save to Sanity
    await client.create({
      _type: 'subscriber',
      email: email.trim(),
      subscribedAt: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully! You\'ll hear from us soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}