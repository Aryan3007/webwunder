import { createAdminClient } from '@/lib/supabase/server' // Adjust based on your project structure
import { NextRequest, NextResponse } from 'next/server'

// Route to get all projects of a specific user
export async function GET(
    request: NextRequest,
    { params }: { params: { projectId: string } },
) {
    const supabase = createAdminClient()

    try {
        const projectID = params.projectId

        // Validate the projectID
        if (!projectID) {
            return NextResponse.json(
                { error: 'Missing user ID' },
                { status: 400 },
            )
        }

        // Fetch all projects associated with the given user_id from the 'projects' table
        const { data: userProjects, error } = await supabase
            .from('projects')
            .select(
                'title, package_type, start_date, end_date, payment_status, user_friendly_email, is_completed',
            ) // Select all fields from the projects table
            .eq('user_id', projectID)

        if (error) {
            throw new Error(`Error fetching projects: ${error.message}`)
        }

        if (!userProjects || userProjects.length === 0) {
            return NextResponse.json(
                { message: 'No projects found for this user' },
                { status: 404 },
            )
        }

        // Return the user's projects
        return NextResponse.json(userProjects, { status: 200 })
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Failed to fetch user projects' },
            { status: 500 },
        )
    }
}
