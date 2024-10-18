    'use server'
    import { app } from '@/config'
    import Stripe from 'stripe'

    const stripe = new Stripe(app.stripe.private.secret_key, {
        apiVersion: '2024-04-10',
    })

    export async function cancelSubscription(subId: string) {
        return await stripe.subscriptions.update(subId, {
            cancel_at_period_end: true,
        })
    }

