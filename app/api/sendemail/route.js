import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    const { name, email, message } = await request.json();
    console.log( request.json);

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "pacbot24@gmail.com",
        pass: "ofzyqssefycvpawh",
      },
    });

    const mailOptions = {
      from: email,
      to: 'paudelsunil16@gmail.com',
      subject: `New message from ${name} from ${email}`,
      text: message
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");

    // Send a successful response
    return new NextResponse("Email sent successfully.", { status: 201 });
  } catch (error) {
    console.error("Error sending email:", error);
    // Send an error response
    return new NextResponse("Failed to send email.", { status: 500 });
  }
}
