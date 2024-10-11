'use client'

import Menu from '@/components/layout/home-template-new/menu'
import Logo from '@/components/common/logo'
import NextTopLoader from 'nextjs-toploader'
import { paths } from '@/paths'
import { languageData } from '@/langauge'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import React from 'react'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, CircleUserRound, Flag, MoveUpRight } from 'lucide-react'

import { useTranslations } from 'next-intl'
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
import LanguageToggle from '@/components/CustomLanguageDropdown'
import CustomLanguageDropdown from '@/components/CustomLanguageDropdown'
export default function Header() {
    const viewHolder = useRef(null)
    const init = useRef(false)
    useEffect(() => {
        init.current = true
    }, [])

    const isScrolling = false

    const variants = {
        hide: {
            y: 20,
            opacity: 0,
        },
        animateState: {
            x: 0,
            y: 0,
            opacity: 1,
        },
    }

    let animDivProps: any = {
        initial: 'hide',
        animate: 'animateState',
        variants: variants,
        transition: {
            bounce: 0,
            duration: 0.3,
            delay: 0,
        },
    }
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang)
            }
        }
    }, [])


    useEffect(() => {
        const savedLang = localStorage.getItem('lang') as 'en' | 'de' | null;
        if (savedLang) {
            setChangeLanguage(savedLang);
        }
    }, []);

    const handleLanguageChange = (value: string) => {
        const newLang = value === 'german' ? 'de' : 'en'
        setChangeLanguage(newLang)
        localStorage.setItem('lang', newLang)
        location.reload()
    }

    const getLanguageIcon = (lang: 'de' | 'en') => {
        return lang === 'de' ? '/images/germany.png' : '/images/united-kingdom.png'
    }

    return (
        <>
            <div
                ref={viewHolder}
                className="absolute top-[100px] -z-50 w-full bg-transparent"
            ></div>
            <header
                className={`relative z-10 flex w-full flex-col items-center justify-between`}
            >
                <NextTopLoader color="hsl(241 77% 63%)" showSpinner={false} />

                <motion.div
                    {...animDivProps}
                    className={`z-20 flex w-full flex-col bg-transparent ${isScrolling ? 'fixed top-2 lg:top-2' : ''}`}
                >
                    <div className={`p-3 px-4`}>
                        <div className={`flex w-full items-center justify-evenly rounded-xl bg-transparent ${isScrolling ? 'backdrop-blur-sm' : ''}`}>
                            <div className='w-96 flex justify-center items-center'>
                                <Logo />
                            </div>

                            <div className=" flex justify-center">
                                <Menu />
                            </div>

                            <div className='flex gap-2 items-center min-w-96'>
                                <CustomLanguageDropdown/>
                                {/* <LanguageToggle
                                    language={changeLanguage}
                                    onToggle={handleLanguageChange}
                                /> */}
                                {process.env.NEXT_PUBLIC_DISABLE_SIGNUP !== 'true' && (
                                    <>
                                        <Button
                                            size={'sm'}
                                            className="hidden gap-3 rounded-full bg-white/20 p-5 text-base font-medium text-white hover:text-white lg:flex"
                                            asChild
                                        >
                                            <Link href={paths.pages.login.href}>
                                                <div className="font-inter text-sm">
                                                {languageData?.navItems?.[changeLanguage]?.login}
                                                </div>
                                                <CircleUserRound />
                                            </Link>
                                        </Button>
                                        <Button
                                            size={'sm'}
                                            className="hidden gap-3 rounded-full bg-white p-5 text-base font-medium lg:flex"
                                            asChild
                                        >
                                            <Link href="/signup">
                                                <p className="font-inter text-sm">
                                                {languageData?.navItems?.[changeLanguage]?.signup}
                                                </p>
                                                <MoveUpRight className="text-gray-500" />
                                            </Link>
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </header>
        </>
    )
}
