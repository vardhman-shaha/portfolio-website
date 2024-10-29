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
  const nodemailer = require('nodemailer');


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
  } catch (error: unknown) {
    console.error('Error sending email:', error);

    if (error instanceof Error) {
      // Handle Nodemailer-specific SMTP error or network error
      const errorMessage = 'Failed to send message via SMTP.';

      // Type guard to check for properties related to SMTP errors
      if ((error as any).response) {
        console.error('SMTP response:', (error as any).response);
        return res.status(500).json({ success: false, error: errorMessage });
      } else {
        // General error handling
        return res.status(500).json({ success: false, error: error.message });
      }
    }

    // Catch-all in case of an unknown error type
    return res.status(500).json({ success: false, error: 'An unexpected error occurred.' });
  }
}
