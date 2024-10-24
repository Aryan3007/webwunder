import { createAdminClient } from '@/lib/supabase/server'; // Adjust based on your project structure
import { NextRequest, NextResponse } from 'next/server';

// Route to get user by email from the profiles table
export async function GET(request: NextRequest, { params }: { params: { email: string } }) {
    const supabase = createAdminClient();

    try {
        const userEmail = params.email;

        // Validate the userEmail
        if (!userEmail) {
            return NextResponse.json({ error: 'Missing user email' }, { status: 400 });
        }

        // Fetch the user profile from the 'profiles' table by email
        const { data: userProfile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('email', userEmail)
            .single(); // Use `.single()` to fetch exactly one profile

        if (error) {
            throw new Error(`Error fetching profile: ${error.message}`);
        }

        if (!userProfile) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Return the user profile in the response
        return NextResponse.json(userProfile, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Failed to fetch user profile' }, { status: 500 });
    }
}
