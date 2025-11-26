import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, captchaToken } = body;

    // 1. Verify reCAPTCHA
    const verifyUrl =
      `https://www.google.com/recaptcha/api/siteverify` +
      `?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;

    const captchaRes = await fetch(verifyUrl, { method: "POST" });
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return Response.json({ error: "Captcha failed" }, { status: 400 });
    }

    // 2. Nodemailer setup
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // smtp.privateemail.com or mail.yourdomain.com
      port: Number(process.env.EMAIL_PORT), // 465 or 587
      secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // hello@yourdomain.com
        pass: process.env.EMAIL_PASS, // mailbox password
      },
    });

    // 3. Send email
    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Enquiry from Website",
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "High",
      },
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
