import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration or standard method check
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const { name, email, phone, notes } = req.body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ success: false, error: "Nombre es requerido / Name is required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: "Email inválido / Invalid email address" });
    }
    if (!notes || typeof notes !== "string" || notes.trim() === "") {
      return res.status(400).json({ success: false, error: "Descripción es requerida / Project description is required" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.QUOTE_RECEIVER_EMAIL;

    if (!apiKey || apiKey === "MY_RESEND_API_KEY" || apiKey === "") {
      console.warn("RESEND_API_KEY is not configured in environment variables.");
      return res.status(503).json({
        success: false,
        error: "Resend API key is not configured on the server. Please define RESEND_API_KEY in secrets."
      });
    }

    if (!receiverEmail || receiverEmail.trim() === "") {
      console.warn("QUOTE_RECEIVER_EMAIL is not configured in environment variables.");
      return res.status(503).json({
        success: false,
        error: "Quotation receiver email is not configured on the server. Please define QUOTE_RECEIVER_EMAIL in secrets."
      });
    }

    // Generate localized Mexico Central time (Cabo San Lucas is America/Mazatlan)
    const timestamp = new Date().toLocaleString("es-MX", { timeZone: "America/Mazatlan" }) + " (Cabo UTC-7)";

    const emailText = `Nueva Solicitud de Cotización

Nombre:
${name}

Email:
${email}

WhatsApp:
${phone || "No especificado"}

Descripción:
${notes}

Fecha:
${timestamp}`;

    // Initialize official Resend SDK client
    const resendSDK = new Resend(apiKey);

    const responsePayload = await resendSDK.emails.send({
      from: "Cabo Remodeling Quotes <onboarding@resend.dev>",
      to: receiverEmail,
      subject: "Nueva Cotización - Baja Pro",
      text: emailText,
    });

    if (responsePayload.error) {
      console.error("Resend SDK rejected mail dispatch:", responsePayload.error);
      return res.status(400).json({
        success: false,
        error: "Resend SDK rejected dispatch request",
        details: responsePayload.error
      });
    }

    return res.status(200).json({ success: true, messageId: responsePayload.data?.id });

  } catch (error: any) {
    console.error("Service error dispatching quotation via Resend:", error);
    return res.status(500).json({ success: false, error: error.message || "Internal server error" });
  }
}
