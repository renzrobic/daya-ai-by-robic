import transporter from "../config/email.js";

export const sendContactEmail = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return res
      .status(400)
      .json({ error: "All fields except phone are required." });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Authenticated sender
      replyTo: email, // User's email; replies go here
      to: process.env.EMAIL_USER, // Your Gmail; you'll receive the email here
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${
        phone || "N/A"
      }\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res
      .status(500)
      .json({ error: "Failed to send message.", details: error.message });
  }
};
