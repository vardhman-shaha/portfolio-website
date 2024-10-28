// pages/api/sendMessage.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  success: boolean;
  message?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  try {
    // Create a Nodemailer transporter using Gmail with App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Verify the transporter configuration
    await transporter.verify();
    console.log('Nodemailer transporter verified successfully.');

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Your Gmail address
      to: 'vardhmanshaha@gmail.com', // Recipient's email address
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email, // Allows you to reply directly to the user's email
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error: any) {
    console.error('Error sending email:', error);

    // Determine error type and respond accordingly
    if (error.response) {
      // SMTP error from Nodemailer
      console.error('SMTP response:', error.response);
      return res.status(500).json({ success: false, error: 'Failed to send message via SMTP.' });
    } else {
      // Other errors (e.g., network issues)
      return res.status(500).json({ success: false, error: 'An unexpected error occurred.' });
    }
  }
}
