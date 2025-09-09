import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    const { name, email, projectType, message } = body
    
    if (!name || !email || !projectType || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email address'
      })
    }
    
    // Get Resend API key from environment
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Email service not configured'
      })
    }
    
    // Initialize Resend
    const resend = new Resend(resendApiKey)
    
    // Prepare email content
    const projectTypeLabels = {
      'team-integration': 'Team-Integration',
      'design-abo': 'Design-Abo',
      'consulting': 'Beratung & Konzept',
      'other': 'Anderes'
    }
    
    const projectTypeLabel = projectTypeLabels[projectType] || projectType
    
    const emailContent = `
      <h2>Neue Kontaktanfrage von DESIGNSNACK.ch</h2>
      
      <h3>Kontaktdaten:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      ${body.company ? `<p><strong>Unternehmen:</strong> ${body.company}</p>` : ''}
      <p><strong>Projekt-Art:</strong> ${projectTypeLabel}</p>
      
      <h3>Nachricht:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>Diese Nachricht wurde über das Kontaktformular auf designsnack.ch gesendet.</small></p>
    `
    
    // Send email using Resend
    const response = await resend.emails.send({
      from: 'DESIGNSNACK Contact <onboarding@resend.dev>',
      to: ['hi@designsnack.ch'],
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name} - ${projectTypeLabel}`,
      html: emailContent
    })
    
    return {
      success: true,
      message: 'Email sent successfully',
      id: response.id
    }
    
  } catch (error) {
    
    // Return appropriate error response
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }
})