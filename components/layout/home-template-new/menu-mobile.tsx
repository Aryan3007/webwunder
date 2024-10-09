'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/common/logo'
import { languageData } from '@/langauge'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import LanguageToggle from '@/components/LanguageToggle'

export default function SidebarMenu() {
    const [isShown, setShown] = useState(false)
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang)
            }
        }
    }, [])

    const openMenu = () => setShown(true)
    const closeMenu = () => setShown(false)

    const menuitems = languageData?.mobnavItems?.[changeLanguage]
    const links = languageData?.menuLinks?.[changeLanguage]
    type MenuKey = keyof typeof menuitems & keyof typeof links

    const footerLinks = languageData?.mobmenufooterLinks?.[changeLanguage] || {}
    const footerLinks2 = languageData?.mobmenufooterLinks2?.[changeLanguage] || {}
    type FooterLinkKey = keyof typeof footerLinks
    type FooterLinkKey2 = keyof typeof footerLinks2

    const contactMethods = [
        languageData?.mobNavFooter?.[changeLanguage]?.links?.email,
        languageData?.mobNavFooter?.[changeLanguage]?.links?.call,
        languageData?.mobNavFooter?.[changeLanguage]?.links?.watsapp,
    ]
    const contactMethodKeys: FooterLinkKey[] = ['writeEmail', 'BookACall', 'sandAMessage']

    const socialMedia = [
        { name: 'Instagram', key: 'Instagram' },
        { name: 'Twitter', key: 'Twitter' },
        { name: 'Facebook', key: 'Facebook' },
        { name: 'Youtube', key: 'Youtube' },
        { name: 'Dribbble', key: 'Dribble' },
        { name: 'Behance', key: 'behance' },
        { name: 'Pinterest', key: 'pinterest' },
    ]


    const getLanguageIcon = (lang: 'de' | 'en') => {
        return lang === 'de' ? '/images/germany.png' : '/images/united-kingdom.png'
    }


    useEffect(() => {
        const savedLang = localStorage.getItem('lang') as 'en' | 'de' | null;
        if (savedLang) {
            setChangeLanguage(savedLang);
        }
    }, []);

    const handleLanguageChange = (value: string) => {
        const newLang = value === 'german' ? 'de' : 'en';
        setChangeLanguage(newLang);
        localStorage.setItem('lang', newLang);
        location.reload();
    };


    return (
        <>
            <div className="flex cursor-pointer p-0 pe-0 lg:hidden">
                <div className="flex items-center justify-center">
                    <div className="rounded-lg flex ">
                        <div className='flex  scale-75 justify-center'>
                            <LanguageToggle
                                language={changeLanguage}
                                onToggle={handleLanguageChange}
                            />
                        </div>
                        <Image
                            onClick={openMenu}
                            className="w-5"
                            src="/menu.svg"
                            alt="menu"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>
            {typeof document !== 'undefined' &&
                createPortal(
                    <AnimatePresence>
                        {isShown && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="menu fixed inset-0 z-50"
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={closeMenu}
                                    className="menu-backdrop absolute inset-0 bg-black bg-opacity-50"
                                />
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{
                                        type: 'tween',
                                        ease: 'easeInOut',
                                        duration: 0.3,
                                    }}
                                    className="menu-list absolute bottom-0 right-0 top-0 flex h-full w-screen flex-col justify-between bg-black px-6 py-2 text-white shadow-xl"
                                >
                                    <div className="flex items-center justify-between">
                                        <Logo />
                                        <button
                                            onClick={closeMenu}
                                            className="text-2xl"
                                        >
                                            &times;
                                        </button>
                                    </div>


                                    <ul className="flex flex-col justify-evenly space-y-2 text-center text-xl md:text-2xl">
                                        {Object.entries(menuitems).map(([key, value]) => {
                                            const menuKey = key as MenuKey;
                                            return (
                                                <li key={menuKey}>
                                                    <Link href={links[menuKey]} className="block py-1" onClick={closeMenu}>
                                                        {value}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <div className="text-center">
                                        <p className="mb-2 font-semibold text-zinc-500">
                                            {languageData?.mobNavFooter?.[changeLanguage]?.links?.getInTouch}
                                        </p>
                                        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-center text-sm">
                                            {contactMethods.map((method, index) => (
                                                <React.Fragment key={method}>
                                                    <Link href={footerLinks[contactMethodKeys[index]] || '#'}>
                                                        {method}
                                                    </Link>
                                                    {index < contactMethods.length - 1 && <span>|</span>}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        <p className="mb-2 font-semibold text-zinc-500">
                                            {languageData?.mobNavFooter?.[changeLanguage]?.links?.followUs}
                                        </p>
                                        <div className="flex flex-wrap items-center justify-center gap-2 pb-6 text-center text-sm">
                                            {socialMedia.map((platform, index) => (
                                                <React.Fragment key={platform.name}>
                                                    <Link href={footerLinks2[platform.key as FooterLinkKey2] || '#'}>
                                                        {platform.name}
                                                    </Link>
                                                    {index < socialMedia.length - 1 && <span>|</span>}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body,
                )}
        </>
    )
}