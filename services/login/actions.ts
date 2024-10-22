'use server'

import { createClient } from '@/lib/supabase/server'
import { paths } from '@/paths'
import { redirect } from 'next/navigation'
import { getLoggedInUser } from '../auth/getters'

export async function loginUser({
    email,
    password,
}: {
    email: string
    password: string
}) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    return { data, error: error?.message || null }
}

export async function logoutUser() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    // revalidatePath(paths.pages.clientProjects.href)
    return { error }
}

export async function loginSocial(
    provider:
        | 'google'
        | 'apple'
        | 'azure'
) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            scopes: 'email',
            redirectTo: `${process.env.HOST}/api/auth/callback`,
        },
    })

    if (data.url && !error) {
        redirect(data.url) // use the redirect API for your server framework
    } else {
        return { data, error }
    }
}
