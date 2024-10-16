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
import {
    Select,
    SelectContent,
    SelectLabel,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import CustomLanguageDropdown2 from '@/components/CustomLanguageDropdown2'
import CustomLanguageDropdown from '@/components/CustomLanguageDropdown'


const paymentMethods = [
    { image: '/images/i1.svg', height: 200, width: 200 },
    { image: '/images/i2.svg', height: 50, width: 50 },
    { image: '/images/i3.svg', height: 50, width: 50 },
    { image: '/images/i4.svg', height: 50, width: 50 },
    { image: '/images/i5.svg', height: 200, width: 200 },
    { image: '/images/i6.svg', height: 50, width: 50 },
    { image: '/images/i7.svg', height: 50, width: 50 },
    { image: '/images/i8.svg', height: 50, width: 50 },
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


    const handleLanguageChange = (value: string) => {
        const newLang = value === 'german' ? 'de' : 'en'
        setChangeLanguage(newLang)
        localStorage.setItem('lang', newLang)
        location.reload()
    }

    const getLanguageIcon = (lang: 'de' | 'en') => {
        return lang === 'de' ? '/images/germany.png' : '/images/united-kingdom.png'
    }

    const changeData = languageData?.footerSections?.[changeLanguage]
    return (
        <footer className=" px-2 py-6 lg:px-20 lg:pb-8 2xl:pl-0 2xl:pr-36">
            <FadeIn>
                <div className="container mx-auto">
                    {/* Mobile Layout */}
                    <div className="flex flex-col items-center lg:hidden">
                    <Link href={`/`}>
            <Image src="./images/logo.svg"
                className="mb-4"
                alt="WebWunder Logo"
                width="225"
                height="17" />
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
                            <div className='flex justify-center items-center scale-75'>

                                {/* <Select onValueChange={handleLanguageChange} value={changeLanguage === 'de' ? 'german' : 'english'}>
                                    <SelectTrigger className="w-fit rounded-full bg-white/20 p-3 gap-2 text-base font-medium text-white border-none hover:text-white lg:flex">
                                        <Image src={getLanguageIcon(changeLanguage)} alt='Language' width={25} height={25} />
                                        <p className='text-white'>{changeLanguage === 'de' ? 'Deutsch' : 'English'}</p>
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
                                </Select> */}

                                <CustomLanguageDropdown/>
                            </div>
                                    <div className='bg-zinc-700 h-[1px]' />

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
                            <Link href={`/`}>
            <Image src="./images/logo.svg"
                className="mb-4"
                alt="WebWunder Logo"
                width="225"
                height="17" />
        </Link>
                                <p className="font-dm-sans text-[18px] font-normal text-gray-500 text-white/50 lg:w- lg:text-end">
                                    {changeData?.winningSupport}
                                    {/* winningSupport */}
                                </p>
                                <p className="mt-5 text-end font-dm-sans text-[18px] font-bold text-white">
                                    {changeData?.weAccept}
                                </p>
                                <div className="mt-3 grid grid-cols-4 place-items-center gap-5">
                                    {paymentMethods.map((item, index) => (
                                        <Image
                                            className=''
                                            key={index}
                                            src={item.image}
                                            alt="Payment"
                                            height={item.height}
                                            width={item.width}
                                        />
                                    ))}
                                </div>
                                <div className='translate-y-6'>

                                    {/* <Select onValueChange={handleLanguageChange} value={changeLanguage === 'de' ? 'german' : 'english'}>
                                        <SelectTrigger className="w-24 hidden rounded-full bg-white/20 p-3 gap-2 text-base font-medium text-white border-none hover:text-white lg:flex">
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
                                    </Select> */}

<CustomLanguageDropdown/>
                                </div>


                            </div>
                            <div className="row-span-2 lg:min-w-max">
                                <h1 className='h-6'></h1>

                                <div className="mt-3 flex flex-col gap-x-4 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
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
                                <h1 className='h-6'></h1>
                                <div className=" mt-3 flex flex-col gap-x-4 gap-y-3 font-dm-sans text-[18px] font-normal text-white lg:mt-3 lg:flex-col lg:items-start lg:gap-y-3">
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
                                    <Link
                                        href="/signup"

                                    >
                                        {changeData?.links?.signUp}
                                    </Link>
                                    <Link
                                        href="/login"

                                    >
                                        {changeData?.links?.signIn}
                                    </Link>
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
                            <div className="flex flex-row items-center gap-10 font-dm-sans text-[18px] font-normal text-white">
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
