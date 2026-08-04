import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor completa todos los campos.' },
        { status: 400 },
      )
    }

    return NextResponse.json({
      success: true,
      message: 'El formulario está listo para enviarse desde tu cliente de correo.',
      mailto: `mailto:nicolas.cartesg@gmail.com?subject=${encodeURIComponent(`Nuevo mensaje de ${name}`)}&body=${encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`)}`,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'No se pudo procesar el mensaje.',
      },
      { status: 500 },
    )
  }
}
