import { createAdminClient } from '@/lib/supabase/server' // Adjust based on your project structure
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: { customer_id: string } },
) {
    const supabase = createAdminClient()
    const customerId = params.customer_id

    try {
        // Fetch the project details based on the customer_id (user_id in the projects table)
        const { data: projects, error } = await supabase
            .from('projects') // Your 'projects' table
            .select(
                'start_date, end_date, title, is_completed, payment_status, invoice_url, package_type, email, user_friendly_email',
            )
            .eq('user_id', customerId)

        if (error) {
            throw new Error(`Error fetching project details: ${error.message}`)
        }

        if (!projects || projects.length === 0) {
            return NextResponse.json(
                { error: 'No projects found' },
                { status: 404 },
            )
        }

        // Price mapping for each package type
        const priceMap: { [key: string]: number } = {
            start: 490,
            scale: 690,
            pro: 990,
            'unlimited-design': 4990,
        }

        // Separate projects into active, completed, and format invoice info
        const invoices = projects.map((project, index) => ({
            invoice_id: index + 1, // Assuming unique incrementing IDs, you can replace this with an actual invoice ID if available
            package_type: project.package_type,
            price: priceMap[project.package_type] || 0, // Default to 0 if no price is found for the package type
            email: project.email,
            start_date: project.start_date,
            payment_status: project.payment_status,
            invoice_url: project.invoice_url || null,
            title: project.title,
        }))

        const projectDetails = projects.map((project) => ({
            // @ts-ignore
            title: project.title, // Assuming 'title' corresponds to package type name
            package_type: project.package_type,
            start_date: project.start_date,
            payment_status: project.payment_status,
        }))

        const activeProjects = projects.filter(
            (project) => !project.is_completed, // Filter projects where `is_completed` is false
        )

        const completedProjects = projects.filter(
            (project) => project.is_completed, // Filter projects where `is_completed` is true
        )

        const activeSubscriptions = new Set(
            projects
                .filter(project => 
                    project.start_date && 
                    (!project.end_date || new Date(project.end_date) > new Date()) // Check if the project is active
                )
                .map(project => project.package_type) // Extract package_type
        ).size;
        
         // Count the unique package types
        const totalSubscriptions = new Set(
            projects.map((project) => project.package_type), // Extract package_type
        ).size // Count the unique package types

        const userFriendlyEmail =
            projects.find((project) => project.user_friendly_email)
                ?.user_friendly_email || null

        // Create the packages array
        const packages = projects.map((project) => ({
            package_type: project.package_type,
            start_date: project.start_date,
            end_date: project.end_date,
            status:
                project.end_date && new Date(project.end_date) > new Date()
                    ? 'active'
                    : 'expired', // Determine if the package is active or expired
        }))

        // Construct the final response
        const response = {
            active_projects: activeProjects.length,
            completed_projects: completedProjects.length,
            active_subscriptions: activeSubscriptions,
            total_subscriptions: totalSubscriptions,
            user_friendly_email: userFriendlyEmail,
            projects: projectDetails,
            packages, // Include the packages array in the response
            invoices,
        }

        return NextResponse.json(response, { status: 200 })
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Failed to retrieve project details' },
            { status: 500 },
        )
    }
}
