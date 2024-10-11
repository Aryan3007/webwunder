import { NextRequest, NextResponse } from "next/server"
import nodemailer from 'nodemailer';

// const handler = (req: any, res: any) => {
//     console.log(req.body)
//     res.status(200).json({ name: 'ayush' })
// }



export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { email, fullName, message, mobile } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_FROM,
              pass: process.env.EMAIL_AUTH_PASSWORD, // or App Password if 2FA is enabled
            },
        });

        // Set up email data
        const mailOptions = {
            from: process.env.EMAIL_FROM || "axxatagrawal@gmail.com",
            to: 'J.eidens@webwunder.de', // list of receivers
            subject: "Contact Form Submission", // Subject line
            text: `You have a new contact form submission from ${fullName} (${mobile}):\n\n${message}`, // plain text body
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                    <h2 style="color: #CF9FFF;">New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mobile:</strong> ${mobile}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
                        ${message}
                    </p>
                    <br>
                    <p style="font-size: 12px; color: #777;">This email was sent from your website's contact form.</p>
                </div>
            `, // HTML body
        };

        // Send mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}
