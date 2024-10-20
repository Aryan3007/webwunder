import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { paths } from '@/paths'
import { Button } from '@/components/ui/button'
import MenuMobile from '@/components/layout/home-template-new/menu-mobile'
import { ArrowDown, CircleUserRound, Flag, MoveUpRight } from 'lucide-react'
import { languageData } from '@/langauge'
import {
    Select,
    SelectContent,
    SelectLabel,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'

export default function Menu() {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang)
            }
        }
    }, [])

    const handleLanguageChange = (value: string) => {
        const newLang = value === 'german' ? 'de' : 'en'
        setChangeLanguage(newLang)
        localStorage.setItem('lang', newLang)
        location.reload()
    }

    const getLanguageIcon = (lang: 'de' | 'en') => {
        return lang === 'de' ? '/images/germany.png' : '/images/united-kingdom.png'
    }

    const newMainMenu = {
        benefits: {
            href: '/#join-us',
            name: languageData?.navItems?.[changeLanguage]?.benefits,
        },
        yourWebsite: {
            href: '/#all-in-one',
            name: languageData?.navItems?.[changeLanguage]?.yourWebsite,
        },
        prices: {
            href: '/#purchase-plans',
            name: languageData?.navItems?.[changeLanguage]?.prices,
        },
        portfolio: {
            href: '/portfolio',
            name: languageData?.navItems?.[changeLanguage]?.portfolio,
        },
        faq: {
            href: '/#faqs',
            name: languageData?.navItems?.[changeLanguage]?.faqs,
        },
        contact: {
            href: '/#contact-us',
            name: languageData?.navItems?.[changeLanguage]?.contact,
        },
    }

    return (
        <nav className="flex items-center justify-center gap-3">
            <ol className=" hidden lg:flex lg:gap-5">
                {Object.entries(newMainMenu).map(([key, value]) => (
                    <li
                        key={value.href}
                        className="flex items-center justify-center"
                    >
                        <Link
                            scroll
                            className="font-inter text-base text-white"
                            href={value.href}
                        >
                            {value.name}
                        </Link>
                    </li>
                ))}
            </ol>

          
           
        </nav>
    )
}