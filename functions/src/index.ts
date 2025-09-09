import {onRequest} from "firebase-functions/v2/https";
import {setGlobalOptions} from "firebase-functions/v2";
import {defineString} from "firebase-functions/params";
import {Resend} from "resend";

const resendApiKey = defineString("RESEND_API_KEY");

setGlobalOptions({maxInstances: 10});

export const sendEmail = onRequest({
  cors: true,
  invoker: "public",
  secrets: []
}, async (request, response) => {
  try {
    if (request.method !== "POST") {
      response.status(405).json({error: "Method not allowed"});
      return;
    }

    const body = request.body;
    
    // Validate required fields
    const {name, email, message} = body;
    
    if (!name || !email || !message) {
      response.status(400).json({error: "Missing required fields"});
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      response.status(400).json({error: "Invalid email address"});
      return;
    }
    
    // Initialize Resend with API key
    const resend = new Resend(resendApiKey.value());
    
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
      id: emailResponse.data?.id,
    });
    
  } catch (error) {
    response.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
});