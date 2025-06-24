import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL
const toEmail = process.env.TO_EMAIL

// Basic email validation
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export async function POST(req: NextRequest) {
  if (!fromEmail || !toEmail) {
    console.error("Missing FROM_EMAIL or TO_EMAIL environment variables")
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
  }

  try {
    const body = await req.json()
    const { name, email, company, phone, service, subService, message } = body

    // Server-side validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 })
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 })
    }
    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 })
    }
    if (!company || !company.trim()) {
      return NextResponse.json({ error: "Company name is required." }, { status: 400 })
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 })
    }
    // Optional phone validation (simple check if provided)
    if (phone && phone.trim().length < 5) {
      // Example: very basic validation
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 })
    }

    const emailHtml = `
      <div>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${service && service !== "none" ? `<p><strong>Service Interested In:</strong> ${service}</p>` : ""}
        ${subService && subService !== "none" ? `<p><strong>Sub-Service:</strong> ${subService}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
    })

    if (error) {
      console.error("Resend API Error:", error)
      return NextResponse.json({ error: "Failed to send email.", details: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Email sent successfully!", resendResponse: data })
  } catch (error: any) {
    console.error("Error processing contact form:", error)
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid request format." }, { status: 400 })
    }
    return NextResponse.json({ error: "An unexpected error occurred.", details: error.message }, { status: 500 })
  }
}
