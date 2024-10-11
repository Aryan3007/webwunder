import { createAdminClient } from '@/lib/supabase/server' // Adjust the import as per your structure
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer' // For sending email notifications

export async function POST(request: NextRequest) {
    const supabase = createAdminClient()

    try {
        const { customer_id, message_body } = await request.json()
        if (!customer_id || !message_body) {
            return NextResponse.json(
                { error: 'Missing required fields.' },
                { status: 400 },
            )
        }

        //         // Get the customer's email address from the profile table
        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('email')
            .eq('id', customer_id)
            .single()
        if (profileError || !profile) {
            throw new Error(
                `Customer profile not found: ${profileError?.message || ''}`,
            )
        }

                const customerEmail = profile.email;

        //         // Check if email is null or undefined
                if (!customerEmail) {
                    return NextResponse.json({ error: 'Customer email is missing.' }, { status: 400 });
                }

        // Insert the message into the message table
        const { data , error: messageError } = await supabase
            .from('messages')
            .insert([{ customer_id, message_body, is_read: false }]);

        if (messageError) {
            throw new Error(`Error saving message: ${messageError.message}`);
        }

        // Send an email notification to the customer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_FROM || 'axxatagrawal@gmail.com',
              pass: process.env.EMAIL_AUTH_PASSWORD || 'mfxu rydb iemf vwnq', // or App Password if 2FA is enabled
            },
        });


        const mailOptions = {
            from: process.env.EMAIL_FROM || 'axxatagrawal@gmail.com',
            to: customerEmail,
            subject: 'New Message from WebWunder',
            text: `You have received a new message: \n\n${message_body}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: `Message sent on ${customerEmail}!`},
            { status: 201 },
        )
    } catch (error) {
        return NextResponse.json(
            { error: error || 'Failed to send message.' },
            { status: 500 },
        )
    }
}
