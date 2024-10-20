'use client'
import React, { useEffect, useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const TermsBreadcrumb = () => {
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
        <Breadcrumb>
            <BreadcrumbList className="relative right-36 flex translate-x-1/2 items-center justify-center sm:right-28 sm:flex-none">
                <BreadcrumbItem>
                    <BreadcrumbLink
                        className="font-dm-sans text-base font-normal text-white hover:font-semibold hover:text-white"
                        href="/"
                    >
                        {lang === 'de' ? 'Home' : 'Home'}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className="font-dm-sans text-base font-normal text-[#5D59E1]">
                        {lang === 'de'
                            ? 'Allgemeine Geschäftsbedingungen'
                            : 'Terms and Conditions'}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default TermsBreadcrumb
