import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL, 
      subject: "New Contact Form Message",
      text: `From: ${name} (${email})\n\n${message}`,
      replyTo: email,
    });

    return res.status(200).json({ message: "Message sent successfully ✅" });
  } catch (err) {
    console.error("Email sending error:", err);
    return res.status(500).json({ message: "Error sending email ❌" });
  }
}
