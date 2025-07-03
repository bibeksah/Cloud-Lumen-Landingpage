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
    const formData = await req.formData()
    const name = formData.get("name") as string | null
    const email = formData.get("email") as string | null
    const phone = formData.get("phone") as string | null
    const position = formData.get("position") as string | null
    const message = formData.get("message") as string | null
    const resumeFile = formData.get("resume") as File | null

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
    if (!phone || !phone.trim()) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 })
    }
    if (!position || !position.trim()) {
      return NextResponse.json({ error: "Position of interest is required." }, { status: 400 })
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Cover letter/message is required." }, { status: 400 })
    }
    if (!resumeFile) {
      return NextResponse.json({ error: "Resume (CV) is required." }, { status: 400 })
    }
    if (resumeFile.type !== "application/pdf") {
      return NextResponse.json({ error: "Resume must be a PDF file." }, { status: 400 })
    }
    if (resumeFile.size > 5 * 1024 * 1024) {
      // 5MB
      return NextResponse.json({ error: "Resume file size must be less than 5MB." }, { status: 400 })
    }

    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer())

    const emailHtml = `
      <div>
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position of Interest:</strong> ${position}</p>
        <p><strong>Cover Letter/Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Career Application: ${name} - ${position}`,
      html: emailHtml,
      attachments: [
        {
          filename: resumeFile.name,
          content: resumeBuffer,
        },
      ],
    })

    if (error) {
      console.error("Resend API Error:", error)
      return NextResponse.json({ error: "Failed to send application email.", details: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Application submitted successfully!", resendResponse: data })
  } catch (error: any) {
    console.error("Error processing career form:", error)
    return NextResponse.json({ error: "An unexpected error occurred.", details: error.message }, { status: 500 })
  }
}
