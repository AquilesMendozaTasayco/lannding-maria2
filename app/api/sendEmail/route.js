import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(`${email}`);

export async function POST(req) {
  const requestId = crypto.randomUUID();
  const start = Date.now();
  const transcript = [];
  let stage = "init";
  let payload = null;

  const redactTranscript = (arr) => arr.slice(-60);

  try {
    stage = "parseJson";
    const body = await req.json();
    payload = body;
    const { nombre, correo, telefono, mensaje } = body;

    stage = "validate";
    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        {
          body: "Faltan campos requeridos",
          requestId,
          stage,
          elapsedMs: Date.now() - start,
          payload,
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(correo)) {
      return NextResponse.json(
        {
          body: "Correo no valido",
          requestId,
          stage,
          elapsedMs: Date.now() - start,
        },
        { status: 200 }
      );
    }

    stage = "createTransport";
    const smtpUser =
      process.env.SMTP_USER || "notificacion@brandingemocion.com";
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom =
      process.env.SMTP_FROM || smtpUser;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.zoho.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure:
        process.env.SMTP_SECURE !== undefined
          ? process.env.SMTP_SECURE !== "false"
          : Number(process.env.SMTP_PORT || 465) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      logger: false,
      debug: false,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    const pushLog = (type, msg) => {
      const text = typeof msg === "string" ? msg : JSON.stringify(msg);
      // evita exponer el pass en logs
      const safe = smtpPass
        ? text.split(smtpPass).join("***REDACTED***")
        : text;
      transcript.push({
        at: Date.now() - start,
        type,
        msg: safe.slice(0, 2000),
      });
    };
    transporter.on("log", (log) => pushLog("log", log));

    stage = "verify";
    const verifyStart = Date.now();
    try {
      await transporter.verify();
      pushLog("verify", `verify OK in ${Date.now() - verifyStart}ms`);
    } catch (vErr) {
      pushLog("verify", `verify FAIL: ${vErr?.message} code=${vErr?.code}`);
      throw Object.assign(vErr, { _stage: "verify" });
    }

    stage = "sendMail";
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
        <p style="white-space: pre-line; margin: 0 0 24px 0;">${`${mensaje}`.replace(/\n/g, "<br/>")}</p>

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

    const mensajeMail = {
      from: `"Formulario MA2" <${smtpFrom}>`,
      to: ["ventas@roden.pe", "psolar@emocion.pe"],
      replyTo: correo,
      subject: `Nuevo mensaje desde la Landing Maria Auxiliadora II - ${nombre}`,
      text: `Nuevo mensaje MA2\nNombre: ${nombre}\nCorreo: ${correo}\nTelefono: ${telefono || "No especificado"}\nMensaje: ${mensaje}`,
      html: htmlContent,
      envelope: {
        from: smtpFrom,
        to: ["ventas@roden.pe", "psolar@emocion.pe"],
      },
    };

    const sendStart = Date.now();
    const info = await transporter.sendMail(mensajeMail);
    pushLog(
      "sendMail",
      `send OK messageId=${info.messageId} accepted=${info.accepted} rejected=${info.rejected} response=${info.response} in ${Date.now() - sendStart}ms`
    );

    return NextResponse.json(
      {
        body: "Se envio con éxito",
        requestId,
        stage: "sent",
        elapsedMs: Date.now() - start,
        envelope: info.envelope,
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
        response: info.response,
        transcript: redactTranscript(transcript),
      },
      { status: 200 }
    );
  } catch (error) {
    const elapsedMs = Date.now() - start;
    const stageAtError = error?._stage || stage;
    console.error(
      `[sendEmail] requestId=${requestId} stage=${stageAtError} elapsed=${elapsedMs}ms ERROR:`,
      error
    );
    console.error("[sendEmail] error.message:", error?.message);
    console.error("[sendEmail] error.code:", error?.code);
    console.error("[sendEmail] error.command:", error?.command);
    console.error("[sendEmail] error.response:", error?.response);
    console.error("[sendEmail] error.responseCode:", error?.responseCode);
    console.error("[sendEmail] transcript:", transcript.slice(-20));

    return NextResponse.json(
      {
        body: "Internal Server Error",
        requestId,
        stage: stageAtError,
        elapsedMs,
        payload,
        debug: {
          message: error?.message || String(error),
          code: error?.code || null,
          command: error?.command || null,
          response: error?.response || null,
          responseCode: error?.responseCode || null,
          stack: error?.stack ? error.stack.slice(0, 3000) : null,
        },
        transcript: redactTranscript(transcript),
      },
      { status: 500 }
    );
  }
}
