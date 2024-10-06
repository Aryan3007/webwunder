'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/common/logo'
import { languageData } from '@/langauge'

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
