import { createAdminClient } from '@/lib/supabase/server'; // Adjust based on your project structure
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { customer_id: string } }) {
    const { customer_id } = params;
    const supabase = createAdminClient();
console.log({customer_id})
    try {
        // Validate customer_id
        if (!customer_id) {
            return NextResponse.json({ error: 'Customer ID is required.' }, { status: 400 });
        }

        // Fetch messages for the customer
        const { data: messages, error } = await supabase
            .from('messages')
            .select('*') // Select all fields
            .eq('customer_id', customer_id)
            .order('created_at', { ascending: false }); // You can adjust the order as needed

        if (error) {
            throw new Error(`Error fetching messages: ${error.message}`);
        }

        // Check if messages exist
        if (messages.length === 0) {
            return NextResponse.json({ message: 'No messages found for this customer.' }, { status: 404 });
        }

        return NextResponse.json({ messages }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error || 'Failed to retrieve messages.' }, { status: 500 });
    }
}
