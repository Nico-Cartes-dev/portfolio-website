import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor completa todos los campos.' },
        { status: 400 },
      )
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'nicolas.cartesg@gmail.com'
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

    if (!resend) {
      return NextResponse.json(
        {
          error:
            'No se ha configurado RESEND_API_KEY. Añade esa variable de entorno para enviar correos.',
        },
        { status: 500 },
      )
    }

    const subject = `Nuevo mensaje de ${name}`
    const text = `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
    const html = `
      <h2>Nuevo mensaje desde tu portafolio</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `

    const { data, error } = await resend.emails.send({
      from: `Portafolio <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
      html,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'No se pudo enviar el mensaje.',
      },
      { status: 500 },
    )
  }
}
