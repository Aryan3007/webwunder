import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
    try {
        const adminPhoneNumber = '+919111708455' // Set your WhatsApp business/admin number here
        const message = encodeURIComponent(
            `Hello, I would like to reach out for assistance.`,
        ) // Predefined message content

        // Generate WhatsApp URL
        const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${message}`

        return NextResponse.json({ whatsappUrl }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Failed to generate WhatsApp link' },
            { status: 500 },
        )
    }
}
