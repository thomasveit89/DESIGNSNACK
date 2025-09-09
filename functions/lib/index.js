"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const https_1 = require("firebase-functions/v2/https");
const v2_1 = require("firebase-functions/v2");
const resend_1 = require("resend");
(0, v2_1.setGlobalOptions)({ maxInstances: 10 });
exports.sendEmail = (0, https_1.onRequest)({ cors: true }, async (request, response) => {
    var _a;
    try {
        if (request.method !== "POST") {
            response.status(405).json({ error: "Method not allowed" });
            return;
        }
        const body = request.body;
        // Validate required fields
        const { name, email, message } = body;
        if (!name || !email || !message) {
            response.status(400).json({ error: "Missing required fields" });
            return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            response.status(400).json({ error: "Invalid email address" });
            return;
        }
        // Get Resend API key from Firebase config
        const resendApiKey = process.env.RESEND_API_KEY || 're_cQ27rdJE_8L3BLSuruswfKQu7KbiWVvaG';
        if (!resendApiKey) {
            response.status(500).json({ error: "Email service not configured" });
            return;
        }
        // Initialize Resend
        const resend = new resend_1.Resend(resendApiKey);
        // Prepare email content
        const emailContent = `
      <h2>Neue Kontaktanfrage von DESIGNSNACK.ch</h2>
      
      <h3>Kontaktdaten:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      ${body.company ? `<p><strong>Unternehmen:</strong> ${body.company}</p>` : ""}
      
      <h3>Nachricht:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
      
      <hr>
      <p><small>Diese Nachricht wurde über das Kontaktformular auf designsnack.ch gesendet.</small></p>
    `;
        // Send email using Resend
        const emailResponse = await resend.emails.send({
            from: "DESIGNSNACK Contact <onboarding@resend.dev>",
            to: ["hi@designsnack.ch"],
            reply_to: email,
            subject: `Neue Kontaktanfrage von ${name}`,
            html: emailContent,
        });
        response.json({
            success: true,
            message: "Email sent successfully",
            id: (_a = emailResponse.data) === null || _a === void 0 ? void 0 : _a.id,
        });
    }
    catch (error) {
        response.status(500).json({
            success: false,
            error: "Failed to send email",
        });
    }
});
//# sourceMappingURL=index.js.map