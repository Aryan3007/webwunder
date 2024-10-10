import { createAdminClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = createAdminClient();


  const { data: profiles, error: profilesError } = await supabase
    .from('profiles')
    .select('*')

  if (profilesError) {
    return NextResponse.json({ error: profilesError.message }, { status: 404 });
  }

  // Return fetched profiles
  return NextResponse.json({ profiles }, { status: 200 });
}
