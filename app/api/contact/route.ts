import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, email, company, remarks } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Mail to Mega Move

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@megamoveindia.com",
      subject: "New Website Enquiry",
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Remarks:</strong> ${remarks}</p>
      `,
    });

    // Auto Reply to Customer

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Enquiry Received - Mega Move India",
      html: `
        <p>Dear ${name},</p>

        <p>Thank you for contacting Mega Move India.</p>

        <p>Your enquiry has been successfully submitted and our team will contact you shortly.</p>

        <p>Regards,<br/>
        Mega Move India Private Limited</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
