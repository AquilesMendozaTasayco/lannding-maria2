import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { nombre, correo, telefono, mensaje } = await req.json();

    if (!nombre || !correo || !mensaje) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos" }),
        { status: 400 }
      );
    }

    // === Transporter (usa tus credenciales SMTP existentes) ===
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // === Contenido del correo ===
    const htmlContent = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #222; background: #fff; padding: 40px; line-height: 1.6;">
        <p style="margin-bottom: 20px;">Estimado equipo de <strong>Residencial María Auxiliadora II</strong>,</p>

        <p style="margin-bottom: 16px;">
          Han recibido un nuevo mensaje desde el formulario de contacto de la landing web del proyecto.
        </p>

        <p style="margin: 0;"><strong>Nombre:</strong> ${nombre}</p>
        <p style="margin: 0;"><strong>Correo:</strong> <a href="mailto:${correo}" style="color: #000;">${correo}</a></p>
        <p style="margin: 0 0 16px 0;"><strong>Teléfono:</strong> ${telefono || "No especificado"}</p>

        <p style="margin-bottom: 6px;"><strong>Mensaje:</strong></p>
        <p style="white-space: pre-line; margin: 0 0 24px 0;">${mensaje.replace(/\n/g, "<br/>")}</p>

        <p style="margin-top: 24px; font-size: 14px; color: #555;">
          Este mensaje fue enviado automáticamente desde el sitio web de <strong>Residencial María Auxiliadora II</strong>.
          Si desea responder, puede hacerlo directamente al correo del remitente.
        </p>

        <p style="margin-top: 32px; font-size: 13px; color: #777;">
          Atentamente,<br/>
          <strong>Formulario de Contacto – Residencial María Auxiliadora II</strong><br/>
          Roden Constructores
        </p>
      </div>
    `;

    // === Envío del correo ===
    await transporter.sendMail({
      from: `"Formulario MA2" <${process.env.SMTP_FROM}>`,
      to: ["aquilesfabianmendozatasayco@gmail.com"],
    //   to: ["ventas@roden.pe", "psolar@emocion.pe"],
      replyTo: correo,
      subject: `Nuevo mensaje desde la Landing María Auxiliadora II - ${nombre}`,
      html: htmlContent,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return new Response(
      JSON.stringify({ error: "No se pudo enviar el correo" }),
      { status: 500 }
    );
  }
}
