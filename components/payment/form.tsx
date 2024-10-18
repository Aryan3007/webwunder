'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from '@stripe/react-stripe-js'
import { app } from '@/config'
import { useUserContext } from '@/providers/user'
import Fields from './fields'
import { Button } from '@/components/ui/button'

const stripePromise = loadStripe(app.stripe.public_key)

export default function PaymentForm(
    props: Props & {
        priceIds: string[]
        packageType: PackageType
    },
) {
    const [note, setNote] = useState('')
    const [title, setTitle] = useState('')
    const [coupon, setCoupon] = useState('')
    const userCtx = useUserContext()
  
    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        return fetch('/api/checkout-sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                priceIds: props.priceIds,
                quantity: 1,
                coupon: coupon,
                metadata: {
                    userId: userCtx?.auth?.id || '',
                    email: userCtx?.auth?.email || '',
                    packageType: props.packageType || '',
                    note: note,
                    title: title,
                },
            }),
        })
            .then((res) => res.json())
            .then((data) => data.clientSecret)
    }, [
        userCtx?.auth?.id,
        userCtx?.auth?.email,
        note,
        props.packageType,
        props.priceIds,
        title,
        coupon,
    ])

    return (
        <>
            <div
                id="checkout"
                className="me-auto ms-0 h-full w-full bg-white p-4 xl:p-12"
            >
                <Fields
                    className="mb-16 xl:w-2/3"
                    packageType={props.packageType}
                    note={note}
                    title={title}
                    coupon={coupon}
                    onNoteChange={setNote}
                    onTitleChange={setTitle}
                    onCouponChange={setCoupon}
                />
                {note && userCtx?.auth?.id && userCtx?.auth?.email ? (
                    <EmbeddedCheckoutProvider
                        stripe={stripePromise}
                        options={{ fetchClientSecret }}
                    >
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                ) : null}
            </div>
        </>
    )
}
