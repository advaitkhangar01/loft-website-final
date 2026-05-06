import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { formType, name, email, phone, message, membershipType, dateFrom, dateTo, requirement } = data;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    // Note: The user needs to set these environment variables in .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || '',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    });

    // Determine the subject line based on the form type
    let subject = 'New Contact Form Submission';
    let htmlContent = `
      <h2>New Submission from LOFT Website</h2>
      <p><strong>Form Type:</strong> ${formType}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    `;

    if (formType === 'contact') {
      subject = `Contact Inquiry from ${name}`;
      htmlContent += `<p><strong>Message:</strong><br/>${message?.replace(/\n/g, '<br/>') || 'N/A'}</p>`;
    } else if (formType === 'membership') {
      subject = `Membership Booking Request from ${name}`;
      htmlContent += `
        <p><strong>Membership Type:</strong> ${membershipType || 'N/A'}</p>
        <p><strong>Date From:</strong> ${dateFrom || 'N/A'}</p>
        <p><strong>Date To:</strong> ${dateTo || 'N/A'}</p>
      `;
    } else if (formType === 'booking') {
      subject = `Booking Request from ${name}`;
      htmlContent += `
        <p><strong>Requirement:</strong> ${requirement || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message?.replace(/\n/g, '<br/>') || 'N/A'}</p>
      `;
    }

    // Define email options
    const mailOptions = {
      from: process.env.SMTP_USER || 'no-reply@loftcoworks.com', // sender address
      to: 'contact@loftcoworks.com', // list of receivers
      replyTo: email,
      subject: subject,
      html: htmlContent,
    };

    // Since we might not have SMTP configured yet, let's wrap the sendMail in a try-catch
    // so we can gracefully fallback if env vars are missing, or log the email to console for debugging
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
      console.log('--- SMTP Credentials Missing ---');
      console.log('Would have sent email to contact@loftcoworks.com with content:');
      console.log(subject);
      console.log(htmlContent);
      console.log('---------------------------------');
      
      return NextResponse.json(
        { message: 'Form submitted successfully (simulated).' },
        { status: 200 }
      );
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Form submitted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling form submission:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
