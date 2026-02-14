import { Resend } from 'resend'

import EmailTemplate from './email-template'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, subject, message, name } = await req.json()

    const { data, error } = await resend.emails.send({
      from: 'Danylo Hordiienko <mail@gord1y.dev>',
      to: [email],
      cc: ['gordiyvl@gmail.com'],
      subject: 'Thank you for your message!',
      react: EmailTemplate({
        name,
        email,
        subject,
        message
      })
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
