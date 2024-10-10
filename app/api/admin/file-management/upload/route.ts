import { createAdminClient } from '@/lib/supabase/server'; // Adjust based on your project structure
import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

// Function to upload file to storage and save metadata
export async function POST(request: NextRequest) {
    const supabase = createAdminClient();
    const formData = await request.formData();
    const userId = formData.get('user_id');
    const file = formData.get('file') as File;

    try {
        // Check if the user has admin privileges (implement your own isAdmin function)
        const isAdmin = true; // Add your admin check logic here
        if (!isAdmin) {
            return NextResponse.json({ error: 'Unauthorized access' }, { status: 403 });
        }

        if (!userId || !file) {
            return NextResponse.json({ error: 'User ID and file are required' }, { status: 400 });
        }

        // Generate a unique filename using nanoid or similar
        const fileName = `${nanoid()}-${file.name}`;

        // Upload the file to Supabase Storage (adjust to your storage solution)
        const { data: storageData, error: storageError } = await supabase.storage
            .from('user-files') // Bucket name
            .upload(fileName, file);

        if (storageError) {
            throw new Error(`Error uploading file: ${storageError.message}`);
        }

        // Construct the file URL (adjust based on your storage service)
        
        const fileUrl = `${supabase.storage.from('user-files').getPublicUrl(fileName).data?.publicUrl}`;

        // Save file metadata in the 'files' table
        const { data: fileData, error: fileError } = await supabase
            .from('files')
            .insert({
                user_id: userId,
                file_name: fileName,
                file_url: fileUrl,
            });

        if (fileError) {
            throw new Error(`Error saving file metadata: ${fileError.message}`);
        }

        return NextResponse.json({ message: 'File uploaded successfully', fileUrl }, { status: 201 });
    } catch (error : any) {
        return NextResponse.json({ error: error.message || 'Failed to upload file' }, { status: 500 });
    }
}
