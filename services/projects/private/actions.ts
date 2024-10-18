import { createAdminClient } from '@/lib/supabase/server'
import { formatDate } from '@/lib/utils'
import { type SupabaseClient } from '@supabase/supabase-js'

const getProjectFromDB = async (
    supabase: SupabaseClient<Database, 'public'>,
    payload: ProjectDetails,
) => {
    return await supabase
        .from('projects')
        .select('*')
        .eq('user_id', payload.userId)
        .eq('payment_intent_id', payload.paymentIntentId)
     }

const insertProjectToDB = async (
    supabase: SupabaseClient<Database, 'public'>,
    payload: ProjectDetails,
    paymentStatus: Database['public']['Enums']['payment_status'],
) => {
    return await supabase
        .from('projects')
        .insert({
            package_type: payload.packageType,
            email: payload.email,
            user_id: payload.userId,
            invoice_id: payload.invoiceId,
            invoice_no: payload.invoiceNo,
            payment_intent_id: payload.paymentIntentId,
            subscription_id: payload.subscriptionId,
            customer_id: payload.customerId,
            payment_status: paymentStatus,
            notes: payload.note,
            title: payload.title,
            invoice_url: payload.invoiceUrl, // Ensure it's an array
        })
        .select()
        .single()
}

const upsertProjectToDB = async (
    supabase: SupabaseClient<Database, 'public'>,
    payload: ProjectDetails,
    paymentStatus: Database['public']['Enums']['payment_status'],
) => {
    const sdate = new Date(
        !payload.currentPeriodStart ? new Date().toUTCString() : payload.currentPeriodStart * 1000
    )
    const edate = new Date(
        !payload.currentPeriodEnd ? new Date().toUTCString() : payload.currentPeriodEnd * 1000
    )

    const startDate = formatDate(sdate)
    const endDate = formatDate(edate)

    return await supabase
        .from('projects')
        .upsert({
            package_type: payload.packageType,
            email: payload.email,
            user_id: payload.userId,
            invoice_id: payload.invoiceId,
            invoice_no: payload.invoiceNo,
            payment_intent_id: payload.paymentIntentId,
            subscription_id: payload.subscriptionId,
            customer_id: payload.customerId,
            payment_status: paymentStatus,
            notes: payload.note,
            title: payload.title,
            invoice_url: payload.invoiceUrl, // Ensure it's an array
            start_date: startDate,
            end_date: endDate,
        }, { onConflict: 'subscription_id' })
        .select()
        .single()
}

export async function insertSuccessProject(payload: ProjectDetails) {
    const supabase = createAdminClient()
    const { error } = await upsertProjectToDB(supabase, payload, 'success')
    if (error) throw error
}

export async function insertPendingProject(payload: ProjectDetails) {
    const supabase = createAdminClient()
    const { error } = await insertProjectToDB(supabase, payload, 'pending')
    if (error) throw error
}

export async function insertPaymentFailedProject(payload: ProjectDetails) {
    const supabase = createAdminClient()
    const { error } = await upsertProjectToDB(supabase, payload, 'failed')
    if (error) throw error
}
