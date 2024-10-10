import { createAdminClient } from '@/lib/supabase/server'; // Adjust import based on your structure
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const supabase = createAdminClient();

    try {
        // Define all the package types
        const packageTypes = [
            'website-standard',
            'website-pro',
            'service-standard',
            'service-pro',
            'unlimited-standard',
            'unlimited-pro',
        ];

        // Initialize the result object to categorize users by package type
        const categorizedCustomers: any = {};

        // Loop through each package type and fetch the corresponding user_id
        for (const packageType of packageTypes) {
            const { data: customers, error } = await supabase
                .from('projects')
                .select('user_id')
                .eq('package_type', packageType);

            if (error) {
                throw new Error(`Error fetching customers for ${packageType}: ${error.message}`);
            }

            if (!customers || customers.length === 0) {
                categorizedCustomers[packageType] = { customers: [], count: 0 };
                continue; // Skip to the next iteration if no customers
            }

            // Fetch profiles based on the user_id of customers
            const userIds = customers.map(customer => customer.user_id);
            const { data: profiles, error: profilesError } = await supabase
                .from('profiles')
                .select('*')
                .in('id', userIds); // Assuming profile's id is the same as user_id

            if (profilesError) {
                throw new Error(`Error fetching profiles: ${profilesError.message}`);
            }

            // Map profiles with user information
            categorizedCustomers[packageType] = {
                customers: profiles?.map(profile => ({
                    user_id: profile.id,
                    profile: {
                        id: profile.id,
                        firstName: profile.first_name,
                        lastName: profile.last_name,
                        email: profile.email,
                        phone: profile.mobile,
                    },
                })) || [],
                count: profiles?.length || 0, // Total count of profiles under this package type
            };
        }

        return NextResponse.json(categorizedCustomers, { status: 200 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message || 'Failed to retrieve customers.' }, { status: 500 });
    }
}
