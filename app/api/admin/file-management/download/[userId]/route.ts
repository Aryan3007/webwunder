import { createAdminClient } from '@/lib/supabase/server'; // Adjust based on your project structure
import { NextRequest, NextResponse } from 'next/server';

// Fetch all files for a specific user
export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
    const supabase = createAdminClient();

    try {
        const userId = params.userId;

        // Validate userId
        if (!userId) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }

        // Fetch all files associated with the user from the 'files' table
        const { data: files, error } = await supabase
            .from('files')
            .select('*')
            .eq('user_id', userId);

        if (error) {
            throw new Error(`Error fetching files: ${error.message}`);
        }

        if (!files || files.length === 0) {
            return NextResponse.json({ message: 'No files found for this user' }, { status: 404 });
        }

        return NextResponse.json(files, { status: 200 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message || 'Failed to fetch files' }, { status: 500 });
    }
}
