import { SupabaseClient } from '@supabase/supabase-js'

export function allProjectsFactory(
    supabase: SupabaseClient<Database, 'public'>,
) {
    return async () => {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .is('deleted_date', null)
        if (error) throw error
        return data
    }
}

export function myProjectsFactory(
    supabase: SupabaseClient<Database, 'public'>,
) {
    return async () => {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .is('deleted_date', null)
        if (error) throw error
        return data
    }
}

export function myProjectFactory(
    supabase: SupabaseClient<Database, 'public'>,
) {
    return async (packageId: string) => {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .eq('id', packageId)
            .single()
        if (error) throw error
        return data
    }
}
