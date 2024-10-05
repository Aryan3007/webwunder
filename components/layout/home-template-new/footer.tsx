'use client'
import React, { useState, useEffect } from 'react'
import FadeIn from '@/components/transitions/fade-in'
import { useLocale } from 'next-intl'
import { Locale } from '@/i18n.config'
import Image from 'next/image'
import { app } from '@/config'
import Link from 'next/link'
import { languageData } from '@/langauge'
import Logo from '@/public/assets/webwunder-logo.png'
import { paths } from '@/paths'

const paymentMethods = [
    { image: '/images/paypal.png', height: 50, width: 60 },
    { image: '/images/applepay.png', height: 50, width: 50 },
    { image: '/images/mastercard.png', height: 50, width: 50 },
    { image: '/images/americanexpress.png', height: 50, width: 50 },
    { image: '/images/googleplay.png', height: 50, width: 70 },
    { image: '/images/visa.png', height: 50, width: 50 },
    { image: '/images/bancontact.png', height: 50, width: 50 },
    { image: '/images/sepa.png', height: 50, width: 50 },
]

const Footer = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])

    const changeData = languageData?.footerSections?.[changeLanguage]
    return (
        <footer className="bg-black px-2 py-6 lg:px-20 lg:pb-8 2xl:pl-0 2xl:pr-36">
            <FadeIn>
                <div className="container mx-auto">
                    {/* Mobile Layout */}
                    <div className="flex flex-col items-center lg:hidden">
                        <Link href="/" className="mb-4">
                            <Image
                                src={Logo}
                                className="w-48 object-contain"
                                alt="WebWunder Logo"
                            />
                        </Link>
                        <p className="mb-6 text-center text-base text-white/50">
                            {/* Winning Websites. Unshakable Support. */}
                            {changeData?.winningSupport}
                        </p>
                        <p className="mb-4 text-base font-bold text-white">
                            {changeData?.weAccept}
                        </p>
                        <div className="mb-8 grid grid-cols-8 place-items-center gap-4">
                            {paymentMethods.map((item, index) => (
                                <Image
                                    key={index}
                                    src={item.image}
                                    alt="Payment"
                                    height={item.height}
                                    width={item.width}
                                />
                            ))}
                        </div>

                        <div className="mb-8 flex w-full flex-col gap-6">
                            <div>
                                <p className="mb-3 text-center text-base text-white/50">
                                    {changeData?.getInTouch}
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-1 text-base text-white">
                                    <Link href={`mailto: info@webwunder.de`}>
                                        {changeData?.links?.writeEmail} |
                                    </Link>
                                    <Link href={paths.pages.getInTouch.href}>
                                        {changeData?.links?.sendMessage} |
                                    </Link>
                                    <Link href={paths.pages.bookCall.href}>
                                        {changeData?.links?.bookCall} |
                                    </Link>
                                    <Link href="https://wa.me/c/4915114039455">
                                        {changeData?.links?.chatWhatsApp}
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <p className="mb-3 text-center text-base text-white/50">
                                    {changeData?.quickConnect}
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-1 text-base text-white">
                                    <Link href="/signup">
                                        {changeData?.links?.signUp} |
                                    </Link>
                                    <Link href="#purchase-plans">
                                        {changeData?.links?.pricing} |
                                    </Link>
                                    <Link href="/login">
                                        {changeData?.links?.signIn} |
                                    </Link>
                                    <Link href="/portfolio">
                                        {changeData?.links?.portfolio} |
                                    </Link>
                                    <Link href={paths.pages.service.href}>
                                        {changeData?.links?.services} |
                                    </Link>
                                    <Link href="#faqs">
                                        {changeData?.links?.faqs} |
                                    </Link>
                                    <Link href={paths.pages.benefits.href}>
                                        {changeData?.links?.benefits}
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <p className="mb-3 text-center text-base text-white/50">
                                    {changeData?.followUs}
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-1 text-base text-white">
                                    <a href="https://www.instagram.com/web_wunder/">
                                        {changeData?.links?.instagram} |
                                    </a>
                                    <a href="https://dribbble.com/web_wunder">
                                        {changeData?.links?.dribble} |
                                    </a>
                                    <a href="https://x.com/web_wunder">
                                        {changeData?.links?.twitter} |
                                    </a>
                                    <a href="https://www.behance.net/webwunder">
                                        {changeData?.links?.behance} |
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61559097817136">
                                        {changeData?.links?.facebook} |
                                    </a>
                                    <a href="https://www.pinterest.com/webwunderde/">
                                        {changeData?.links?.pinterest} |
                                    </a>
                                    <a href="https://www.youtube.com/@web_wunder">
                                        {changeData?.links?.youtube}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full flex-col gap-4 text-center text-xs text-white">
                            <p className="text-center text-base text-white/50">
                                {changeData?.legalPages}
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-1">
                                <Link href="/privacy-policy">
                                    {changeData?.links?.privacyPolicy} |
                                </Link>
                                <Link href="/terms">
                                    {changeData?.links?.terms} |
                                </Link>
                                <Link href="/imprint">
                                    {changeData?.links?.imprint}
                                </Link>
                            </div>
                            <p className="text-white/50">
                                {changeData?.copyright1}{' '}
                                <span className="text-[#5D59E1]">
                                    {changeData?.webwunder}
                                </span>
                                {changeData?.copyright2}{' '}
                            </p>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:block 2xl:w-[1450px]">
                        <div className="grid grid-flow-dense grid-cols-2 gap-y-8 lg:flex lg:flex-row-reverse lg:justify-between">
                            <div className="col-span-2 mb-4 flex flex-col text-center lg:w-[400px] lg:items-end">
                                <Link className="mb-4" href={`/`}>
                                    <Image
                                        src={Logo}
                                        className="mx-auto w-[336px] object-contain"
                                        alt="WebWunder Logo"
                                    />
                                </Link>
                                <p className="font-dm-sans text-[18px] font-normal text-gray-500 text-white/50 lg:w-60 lg:text-end">
                                    {changeData?.winningSupport}
                                    {/* winningSupport */}
                                </p>
                                <p className="mt-5 text-end font-dm-sans text-[18px] font-bold text-white">
                                    {changeData?.weAccept}
                                </p>
                                <div className="mt-3 grid grid-cols-4 place-items-center gap-5">
                                    {paymentMethods.map((item, index) => (
                                        <Image
                                            key={index}
                                            src={item.image}
                                            alt="Payment"
                                            height={item.height}
                                            width={item.width}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="row-span-2 lg:min-w-max">
                               
                                <div className="mt-3 flex flex-col gap-x-4 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-8 lg:flex-col lg:items-start lg:gap-y-3">
                                    <a
                                        target="_blank"
                                        href="https://dribbble.com/web_wunder"
                                    >
                                        {changeData?.links?.dribble}
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.behance.net/webwunder"
                                    >
                                        {changeData?.links?.behance}
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.pinterest.com/webwunderde/"
                                    >
                                        {changeData?.links?.pinterest}
                                    </a>
                                </div>
                            </div>
                            <div className="row-span-2 lg:min-w-max">
                                <p className="font-dm-sans text-[16px] font-normal text-white/50">
                                    {changeData?.followUs}
                                </p>
                                <div className="mt-3 flex flex-col gap-x-4 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/web_wunder/"
                                    >
                                        {changeData?.links?.instagram}
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://x.com/web_wunder"
                                    >
                                        {changeData?.links?.twitter}
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com/profile.php?id=61559097817136"
                                    >
                                        {changeData?.links?.facebook}
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.youtube.com/@web_wunder"
                                    >
                                        {changeData?.links?.youtube}
                                    </a>
                                </div>
                            </div>
                            <div className="row-span-2 lg:min-w-max">
                                
                                <div className="mt-3 flex flex-col gap-x-4 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-8 lg:flex-col lg:items-start lg:gap-y-3">
                                    <a
                                        
                                        href="#faqs"
                                    >
                                        {changeData?.links?.faqs}
                                    </a>
                                    <a
                                        
                                        href="#contact-us"
                                    >
                                        {changeData?.links?.contact}
                                    </a>
                                    <a
                                        target="_blank"
                                       
                                    >
                                        {changeData?.links?.signUp}
                                    </a>
                                     <a
                                        target="_blank"
                                        
                                    >
                                        {changeData?.links?.signIn}
                                    </a>
                                </div>
                            </div>
                            <div className="col-start-1 row-span-2 ps-4 lg:min-w-max lg:ps-0">
                                <p className="font-dm-sans text-[16px] font-normal text-white/50">
                                    {changeData?.quickConnect}
                                </p>
                                <div className="mt-3 flex flex-col gap-x-4 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
                                    <Link href={paths.pages.benefits.href}>
                                        {changeData?.links?.benefits}
                                    </Link>
                                    <a href="#all-in-one">
                                        {changeData?.links?.yourwebsite}
                                    </a>
                                    <a href="#packages">
                                        {changeData?.links?.pricing}
                                    </a>
                                    <a href="/portfolio">
                                        {changeData?.links?.portfolio}
                                    </a>
                                </div>
                            </div>
                            <div className="col-start-2">
                                <p className="font-dm-sans text-[16px] font-normal text-white/50">
                                    {changeData?.getInTouch}
                                </p>
                                <div className="mt-3 flex flex-col gap-x-6 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-3 lg:flex-col lg:gap-y-3">
                                    <Link
                                        target="_blank"
                                        href={`mailto:${app.email}`}
                                    >
                                        {changeData?.links?.writeEmail}
                                    </Link>
                                   
                                    <Link
                                        target="_blank"
                                        href={paths.pages.bookCall.href}
                                    >
                                        {changeData?.links?.bookCall}
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://wa.me/+4915114039455"
                                    >
                                        {changeData?.links?.chatWhatsApp}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 mt-12 w-full border-b opacity-60"></div>
                        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
                            <div className="flex flex-row items-center gap-4 font-dm-sans text-[18px] font-normal text-white">
                                <Link href="/privacy-policy">
                                    {changeData?.links?.privacyPolicy}
                                </Link>
                                <Link href="/terms">
                                    {changeData?.links?.terms}
                                </Link>
                                <Link href="/imprint">
                                    {changeData?.links?.imprint}
                                </Link>
                            </div>
                            <p className="font-dm-sans text-[18px] font-normal text-white/50">
                                {changeData?.copyright1}
                                <span className="text-[#5D59E1]">
                                    {changeData?.webwunder}
                                </span>
                                {changeData?.copyright2}
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </footer>
    )
}

export default Footer
