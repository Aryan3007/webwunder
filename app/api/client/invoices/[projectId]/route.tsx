import { createAdminClient } from '@/lib/supabase/server'; // Adjust based on your project structure
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { projectId: string } }) {
    const supabase = createAdminClient();

    try {
        const projectId = params.projectId;

        // Fetch the project for the specified user_id
        const { data: projectData, error } = await supabase
            .from('projects')
            .select('invoice_url')
            .eq('user_id', projectId)
            .single(); // single() is used if you expect only one result

        if (error) {
            throw new Error(`Error fetching project for user_id: ${projectId}: ${error.message}`);
        }

        // Check if a project was found for the given user_id
        if (!projectData) {
            return NextResponse.json({ error: `No project found for user_id: ${projectId}` }, { status: 404 });
        }

        // Return the invoice_url from the project data
        return NextResponse.json({ invoice_url: projectData.invoice_url }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Failed to retrieve invoice_url.' }, { status: 500 });
    }
}
