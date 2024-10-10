import { createAdminClient } from '@/lib/supabase/server'; // Adjust based on your project structure
import { NextRequest, NextResponse } from 'next/server';

// Function to check if the user is an admin (modify this based on your auth implementation)
async function isAdmin(request: NextRequest) {
    // Assuming you have a mechanism to check user role from the request (e.g., request.headers or request.user)
    // const user = request.user; // Adjust this based on how your authentication is set up
    // return user && user.role === 'admin';
}

export async function PATCH(request: NextRequest) {
    const supabase = createAdminClient();

    try {
        // Check if the user has admin privileges
        // if (!await isAdmin(request)) {
        //     return NextResponse.json({ error: 'Unauthorized access' }, { status: 403 });
        // }

        // Parse the request body to get the updated profile details
        const { user_id, firstName, lastName, email, phone, address } = await request.json();

        // Validate the input data (basic validation)
        if (!user_id || !firstName || !lastName || !email) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Update the profile in the Supabase 'profiles' table
        const { data, error } = await supabase
            .from('profiles')
            .update({
                first_name: firstName,
                last_name: lastName,
                email: email,
                mobile: phone,
                address: address // Assuming the profiles table has an 'address' field
            })
            .eq('id', user_id); // The user_id should be the profile's ID

        if (error) {
            throw new Error(`Error updating profile: ${error.message}`);
        }

        // Return a success message if the profile was updated successfully
        return NextResponse.json({ message: 'Profile updated successfully', data }, { status: 200 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message || 'Failed to update profile' }, { status: 500 });
    }
}
