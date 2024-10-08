import { createAdminClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const supabase = createAdminClient();

  // Fetch customer profile by ID from 'profile' table
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 404 });
  }

  // Fetch related projects (packages) for this customer from 'project' table
  const { data: projects, error: projectError } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', id);

  if (projectError) {
    return NextResponse.json({ error: projectError.message }, { status: 500 });
  }

  return NextResponse.json({ profile, projects }, { status: 200 });
}




