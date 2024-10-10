import { createAdminClient } from '@/lib/supabase/server' // Adjust this import based on your project structure
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: { customer_id: string } },
) {
    const supabase = createAdminClient()
    const customerId = params.customer_id // Extract the customer ID from the request parameters

    try {
        // Fetch the project details based on the customer_id (which corresponds to user_id in the projects table)
        const { data: projects, error } = await supabase
            .from('projects') // Your 'projects' table
            .select(
                'start_date, end_date, payment_status, invoice_url, package_type, email, user_friendly_email',
            ) // Select the necessary fields
            .eq('user_id', customerId) // Filter by user_id (customer_id)

        if (error) {
            throw new Error(`Error fetching project details: ${error.message}`)
        }

        // Return the project data if found, or an empty array if no projects are associated with the customer
        return NextResponse.json(projects || [], { status: 200 })
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Failed to retrieve project details' },
            { status: 500 },
        )
    }
}
