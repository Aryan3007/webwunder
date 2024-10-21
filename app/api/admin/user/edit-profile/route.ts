import { createAdminClient } from '@/lib/supabase/server'; // Adjust based on your project structure
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest) {
    const supabase = createAdminClient();

    try {
        // Parse the request body to get the updated profile details
        const { user_id, firstName, lastName, email, phone, address, company, dob, company_site, country, language, currency, communication, avatar } = await request.json();

        // Validate the input data (basic validation)
        if (!user_id || !firstName || !lastName || !email) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Avatar upload logic (optional)
        let avatarUrl = null;
        if (avatar) {
            // Assuming avatar is a base64 string or file
            const avatarFileName = `avatars/${user_id}-${Date.now()}.png`;

            const { error: uploadError, data: avatarData } = await supabase.storage
                .from('avatars') // Make sure you have a Supabase bucket named 'avatars'
                .upload(avatarFileName, avatar, {
                    cacheControl: '3600',
                    upsert: false, // Don't overwrite existing avatars
                    contentType: 'image/png',
                });

            if (uploadError) {
                throw new Error(`Error uploading avatar: ${uploadError.message}`);
            }

            // Generate public URL for the uploaded avatar
            avatarUrl = supabase.storage.from('avatars').getPublicUrl(avatarFileName).data.publicUrl;
        }
        console.log(avatarUrl);

        // Update the profile in the Supabase 'profiles' table
        const { data : userData, error } = await supabase
            .from('profiles')
            .update({
                first_name: firstName,
                last_name: lastName,
                email: email,
                mobile: phone,
                address: address,
                company: company,
                dob: dob,
                company_site: company_site,
                country: country,
                langauge: language,
                currency: currency,
                communication: communication,
                avatar_url: avatarUrl, // Save the avatar URL in the profile if available
            })
            .eq('id', user_id); // The user_id should be the profile's ID

        if (error) {
            throw new Error(`Error updating profile: ${error.message}`);
        }

        // Return a success message if the profile was updated successfully
        return NextResponse.json({ message: 'Profile updated successfully', userData }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Failed to update profile' }, { status: 500 });
    }
}
