import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, serviceType, message } = await request.json()

    // Send email to user
    await resend.emails.send({
      from: "Your Company <onboarding@resend.dev>",
      to: email,
      subject: "Thank You for Your Submission",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting us! We have received your inquiry and will get back to you shortly.</p>
        <p>Best regards,<br>Your Company Team</p>
      `,
    })

    // Send email to admin
    await resend.emails.send({
      from: "Your Company <onboarding@resend.dev>",
      to: "khashir657@gmail.com", // Admin's email
      subject: "New Form Submission",
      html: `
        <h3>New Form Submission Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 })
  }
}

