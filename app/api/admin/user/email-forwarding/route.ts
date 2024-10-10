// app/api/improvmx/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({ sucess: 'kaam kr raha hai endpoint' })
}
export async function POST(req: Request) {
    try {
        // Extract alias and forward email from the request body
        const { userFriendlyEmail, aworkLink } = await req.json()
        console.log({ userFriendlyEmail, aworkLink })
        const apiKey = 'sk_1f010385909b4a138db35be23a88a465' 
        const basicAuth = Buffer.from(`api:${apiKey}`).toString('base64')
        // console.log({ basicAuth })
        const response = await fetch(
            'https://api.improvmx.com/v3/domains/webwunder.de/aliases/',
            {
                method: 'POST',
                headers: {
                    Authorization: `Basic ${basicAuth}`, // Basic Auth with API key
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    alias : userFriendlyEmail, // Alias to be used
                    forward : aworkLink, // Destination email for forwarding
                }),
            },
        )
        // console.log(response)
        if (!response.ok) {
            const errorData = await response.json()
            return NextResponse.json(
                { error: errorData },
                { status: response.status },
            )
        }

        const data = await response.json()
        return NextResponse.json(
            {
                success: true,
                alias: {
                    alias: data.alias,
                    forward: data.forward,
                    id: data.id, // Assuming the API returns the alias ID
                },
            },
            { status: 200 },
        )
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Something went wrong' },
            { status: 500 },
        )
    }
}
