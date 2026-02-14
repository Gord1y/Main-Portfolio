import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export const POST = async (request: NextRequest) => {
  const emailData = await request.json();

	try {
  const { data, error } = await resend.emails.send({
		from: 'Danylo Hordiienko <mail@gord1y.dev>',
		to: ['gordiyvl@gmail.com'],
		subject: 'Received new email!',
		text: `New email received with data: ${JSON.stringify(emailData)}`
	})

	if (error) {
		return NextResponse.json({ error }, { status: 500 })
	}

	return NextResponse.json(data)
} catch (error) {
	return NextResponse.json({ error }, { status: 500 })
}
};