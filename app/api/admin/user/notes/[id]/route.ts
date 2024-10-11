import { createAdminClient } from '@/lib/supabase/server'; // Adjust import as per your structure
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params; // This is the project ID from the URL
    const supabase = createAdminClient();

    try {
        const { content } = await request.json(); // Extracting note content from the body

        if (!content) {
            return NextResponse.json({ error: 'Note content is required.' }, { status: 400 });
        }

        // Fetch the current user notes from the project
        const { data: project, error: fetchError } = await supabase
            .from('projects')
            .select('user_notes')
            .eq('id', id)
            .single();

        if (fetchError) {
            throw new Error(`Failed to fetch project: ${fetchError.message}`);
        }

        if (!project || !('user_notes' in project)) {
            return NextResponse.json({ error: 'Project or user_notes field not found.' }, { status: 404 });
        }

        // Append the new note to the existing user_notes array (assuming it's an array)
        const updatedNotes = Array.isArray(project.user_notes) 
            ? [...project.user_notes, content] 
            : [content];

        // Update the user_notes array in the projects table
        const { error: updateError } = await supabase
            .from('projects')
            .update({ user_notes: updatedNotes })
            .eq('id', id);

        if (updateError) {
            throw new Error(`Failed to update project notes: ${updateError.message}`);
        }

        return NextResponse.json({ message: 'Note added successfully!' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error || 'Failed to add note.' }, { status: 500 });
    }
}
