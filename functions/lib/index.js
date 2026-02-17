"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const https_1 = require("firebase-functions/v2/https");
const v2_1 = require("firebase-functions/v2");
const params_1 = require("firebase-functions/params");
const resend_1 = require("resend");
const resendApiKey = (0, params_1.defineString)("RESEND_API_KEY");
(0, v2_1.setGlobalOptions)({ maxInstances: 10 });
exports.sendEmail = (0, https_1.onRequest)({
    cors: ["https://designsnack.ch", "https://www.designsnack.ch", "http://localhost:3000"],
    invoker: "public",
    secrets: []
}, async (request, response) => {
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
        // Initialize Resend with API key
        const resend = new resend_1.Resend(resendApiKey.value());
        // Prepare email content
        const emailContent = `
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f7fafc;
          }
          
          .email-container {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 32px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          }
          
          .header {
            text-align: center;
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 2px solid #e2e8f0;
          }
          
          .header h1 {
            font-size: 28px;
            font-weight: 700;
            color: #1a202c;
            margin: 0 0 8px 0;
          }
          
          .brand-link {
            color: #3182ce;
            text-decoration: none;
            font-weight: 600;
          }
          
          .section {
            margin-bottom: 24px;
          }
          
          .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #2d3748;
            margin: 0 0 16px 0;
            padding-bottom: 8px;
            border-bottom: 1px solid #e2e8f0;
          }
          
          .contact-info {
            background-color: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 24px;
          }
          
          .contact-item {
            margin: 12px 0;
            font-size: 16px;
          }
          
          .contact-label {
            font-weight: 600;
            color: #4a5568;
            display: inline-block;
            width: 80px;
          }
          
          .contact-value {
            color: #2d3748;
          }
          
          .message-content {
            background-color: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            font-size: 16px;
            line-height: 1.7;
          }
          
          .footer {
            margin-top: 32px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            font-size: 14px;
            color: #718096;
          }
          
          .footer a {
            color: #3182ce;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Neue Kontaktanfrage</h1>
            <p style="margin: 0; color: #718096; font-size: 16px;">
              von <a href="https://designsnack.ch" class="brand-link">DESIGNSNACK.ch</a>
            </p>
          </div>
          
          <div class="section">
            <h2 class="section-title">Kontaktdaten</h2>
            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-label">Name:</span>
                <span class="contact-value">${name}</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">E-Mail:</span>
                <span class="contact-value">${email}</span>
              </div>
              ${body.company ? `
              <div class="contact-item">
                <span class="contact-label">Firma:</span>
                <span class="contact-value">${body.company}</span>
              </div>` : ""}
            </div>
          </div>
          
          <div class="section">
            <h2 class="section-title">Nachricht</h2>
            <div class="message-content">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div class="footer">
            <p>Diese Nachricht wurde über das Kontaktformular auf <a href="https://designsnack.ch">designsnack.ch</a> gesendet.</p>
          </div>
        </div>
      </body>
      </html>
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