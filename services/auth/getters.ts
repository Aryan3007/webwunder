'use server'

import { createClient } from '@/lib/supabase/server'

export async function getLoggedInUser() {
    const supabase = createClient()
    const [authUser, profileUser] = await Promise.all([
        supabase.auth.getUser(),
        supabase.from('profiles').select('*, roles (role)').single(),
    ])

    if (authUser.error) throw authUser.error
    else if (profileUser.error) throw profileUser.error
    else {
        const isAdmin = !!profileUser.data.roles.find((e : any) => e.role === 'admin')
        return { auth: authUser.data, profile: profileUser, isAdmin }
    }
}
