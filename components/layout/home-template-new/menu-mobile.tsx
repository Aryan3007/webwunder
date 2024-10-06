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
    SelectLabel,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const menuItems = [
    'Home',
    'Benefits',
    'Your Website',
    'Prices',
    'Portfolio',
    'FAQs',
    'Contact',
    'Sign In',
    'Sign Up',
]

const socialMedia = [
    'Instagram',
    'Twitter',
    'Facebook',
    'Youtube',
    'Dribbble',
    'Behance',
    'Pinterest',
]

export default function SidebarMenu() {
    const [isShown, setShown] = useState(false)

    const openMenu = () => setShown(true)
    const closeMenu = () => setShown(false)

    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const menuitems = languageData?.mobnavItems?.[changeLanguage]
    const links = languageData?.menuLinks?.[changeLanguage];
    type MenuKey = keyof typeof menuitems & keyof typeof links;
    const footerLinks = languageData?.mobmenufooterLinks?.[changeLanguage] || {}
    type FooterLinkKey = keyof typeof footerLinks
    // console.log(links);
    // console.log(menuitems)
    const contactMethods = [
        languageData?.mobNavFooter?.[changeLanguage]?.links?.email,
        languageData?.mobNavFooter?.[changeLanguage]?.links?.call,
        languageData?.mobNavFooter?.[changeLanguage]?.links?.watsapp,
    ]


    const contactMethodKeys: FooterLinkKey[] = ['writeEmail', 'sandAMessage', 'BookACall']

    const socialMedia = [
        'Instagram',
        'Twitter',
        'Facebook',
        'Youtube',
        'Dribble',
        'Behance',
        'Pinterest',
    ]

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
            <div className="z- flex cursor-pointer p-0 pe-0 lg:hidden">
                <div className="flex items-center justify-center">
                    <div onClick={openMenu} className="rounded-lg ">
                        <Image
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
<div className='flex justify-center'>

                                    <Select onValueChange={handleLanguageChange} value={changeLanguage === 'de' ? 'german' : 'english'}>
                                        <SelectTrigger className="w-28 rounded-full bg-white/20 p-3 gap-2 text-base font-medium text-white border-none hover:text-white lg:flex">
                                            <Image src={getLanguageIcon(changeLanguage)} alt='Language' width={25} height={25} />
                                            <p className='text-white'>{changeLanguage === 'de' ? 'DE' : 'EN'}</p>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup className="flex flex-row justify-around">
                                                <SelectItem value="english" className="flex items-center gap-2">
                                                    <Image src="/images/united-kingdom.png" alt='English' width={25} height={25} />
                                                    <span>EN</span>
                                                </SelectItem>
                                                <SelectItem value="german" className="flex items-center gap-2">
                                                    <Image src="/images/germany.png" alt='German' width={25} height={25} />
                                                    <span>DE</span>
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
</div>

                                    <ul className="flex flex-col justify-evenly space-y-2 text-center text-xl md:text-2xl">
                                        {Object.entries(menuitems).map(([key, value]) => {
                                            // Type assertion to ensure key is of type MenuKey
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
                                            {/* Get in touch */}
                                            {
                                                languageData?.mobNavFooter?.[
                                                    changeLanguage
                                                ]?.links?.getInTouch
                                            }
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
                                            {
                                                languageData?.mobNavFooter?.[
                                                    changeLanguage
                                                ]?.links?.followUs
                                            }
                                        </p>
                                        <div className="flex flex-wrap items-center justify-center gap-2 pb-6 text-center text-sm">
                                            {socialMedia.map((platform, index) => {
                                                const platformKey = platform.toLowerCase() as FooterLinkKey
                                                return (
                                                    <React.Fragment key={platform}>
                                                        <Link href={footerLinks[platformKey] || '#'}>
                                                            {platform}
                                                        </Link>
                                                        {index < socialMedia.length - 1 && <span>|</span>}
                                                    </React.Fragment>
                                                )
                                            })}
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
