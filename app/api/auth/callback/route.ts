import { createClient } from '@/lib/supabase/server'
import { paths } from '@/paths'
import { getLoggedInUser } from '@/services/auth/getters'
import { EmailOtpType } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    // if "next" is in param, use it as the redirect URL
    const next = searchParams.get('next') ?? '/'

    if (code) {
        const supabase = createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            return NextResponse.redirect(
                `${process.env.HOST}${paths.pages.loginSuccess.href}`,
            )
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${process.env.HOST}${paths.pages.error.href}`)
}

export const runtime = 'edge'
  