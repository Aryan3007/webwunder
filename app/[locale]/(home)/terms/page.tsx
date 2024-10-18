'use client'
import React, { useEffect, useState } from 'react'
import TermsBreadcrumb from '@/components/terms/terms-breadcrumb'
import TermsContent from '@/components/terms/terms-content'
import PolicyContent from '@/components/utils/policy-content'

const TermsPage = () => {
    const [lang, setLang] = useState<'de' | 'en'>('en') // Default to 'en'

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setLang(storedLang) // Update state with the stored language
            }
        }
    }, [])
    return (
        <PolicyContent
            title= {lang === 'de' ? 'Allgemeine Geschäftsbedingungen (AGB) der Johannes Eidens, handelnd als WebWunder' : 'Terms and Conditions (AGB) of Johannes Eidens, Trading as WebWunder'}
            breadcrumb={<TermsBreadcrumb />}
            content={<TermsContent />}
        />
    )
}

export default TermsPage
