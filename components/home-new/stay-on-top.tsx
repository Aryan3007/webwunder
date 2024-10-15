'use client'
import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { HeroCardsLeft, HeroCardsRight } from './hero-cards'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import FeaturesCarousel from './features-carousel'
import { languageData } from '@/langauge'
import axios from 'axios'
import LangLayout from '@/app/[locale]/langLayout'
const StayOnTop = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    return (
        <div className="md:-mt-10 pt-12 flex flex-col items-center gap-6 bg-black">
            <div className="flex flex-col items-center gap-4">
                <Badge
                    data-aos="fade-up"
                    className="bg-[#5D59E1] font-archivo text-sm font-normal"
                >
                    {languageData?.unlimitedDesign?.[changeLanguage]?.badge}
                </Badge>
                <p className="mb-4 w-5/6 text-center font-dm-sans text-[30px] font-bold leading-none text-white lg:w-[86%] lg:text-[40px] xl:w-[66%]">
                    {/* “WebWunder pushes Figma to its limits, delivering unique
                    designs that keep you ahead—stress-free.” */}
                    {
                        languageData?.unlimitedDesign?.[changeLanguage]
                            ?.stayonTopDescription
                    }
                </p>
                <Image
                className='pb-12'
                    src="/images/home/stay-on-top/figma.png"
                    alt="Figma"
                    width={100}
                    height={20}
                />
            </div>
            <div className="-mt-36 block h-full py-6 scale-50 bg-gradient-to-b from-black via-[#121212] to-[#131313] md:hidden">
                <HeroCardsRight />
                <HeroCardsLeft />
            </div>
            <div className="mt-6 hidden bg-gradient-to-b from-black via-[#121212] to-[#131313] md:block lg:pb-20 xl:mb-20">
                <HeroCardsRight />
                <HeroCardsLeft />
            </div>
            <div className="relative -mt-48 flex w-screen flex-col items-center justify-between gap-12 bg-gradient-to-b from-[#131313] to-[#1E1E1E] pt-5 lg:flex-row lg:pt-14 xl:pt-0 2xl:pt-20">
                <div className="flex flex-col lg:ml-24">
                    <div className="flex max-w-[575px] flex-col items-center justify-center gap-4 p-4 lg:items-start 2xl:relative 2xl:bottom-32 2xl:left-36">
                        <Badge
                            data-aos="fade-up"
                            className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal"
                        >
                            {/* Endless Creativity */}
                            {
                                languageData?.unlimitedDesign?.[changeLanguage]
                                    ?.creativity
                            }
                        </Badge>
                        <p className="font-archivo text-[25px] font-bold leading-none text-white lg:text-[45px]">
                            {/* Unlimited Design */}
                            {
                                languageData?.unlimitedDesign?.[changeLanguage]
                                    ?.title
                            }
                        </p>
                        <p className="w-11/12 text-left font-archivo text-[13px] font-normal text-white/50 lg:w-auto lg:text-start text-center lg:text-base">
                            {/* We&apos;ve created the Unlimited Design Package for
                            businesses that just can&apos;t get enough of our
                            exceptional design work. With limited spots
                            available, this exclusive package offers unlimited
                            requests, fast delivery, and 100% design ownership.
                            Interested? Let&apos;s talk! */}
                            {
                                languageData?.unlimitedDesign?.[changeLanguage]
                                    ?.description
                            }
                        </p>
                        <div className="my-4 flex items-center justify-start gap-2 lg:my-2 lg:gap-3">
                            <Link href="#purchase-plans">
                                <button
                                    className={`flex ${changeLanguage === 'de' ? 'h-14' : 'h-12'} w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2 transition-all hover:scale-95`}
                                >
                                    <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                        {/* See Plans */}
                                        {
                                            languageData?.unlimitedDesign?.[
                                                changeLanguage
                                            ]?.seePlans
                                        }
                                    </p>
                                    <div
                                        className={`flex ${changeLanguage === 'de' ? 'h-8 w-8' : 'h-8 w-8'} items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8`}
                                    >
                                        <ArrowRight
                                            size={18}
                                            fontWeight={100}
                                            className="text-[#24252A]"
                                        />
                                    </div>
                                </button>
                            </Link>

                            <button
                                className={`flex ${changeLanguage === 'de' ? 'h-14' : 'h-12'} w-fit flex-row items-center justify-between gap-6 rounded-full border bg-[#ffffff] p-2 transition-all hover:scale-95`}
                            >
                                <Link
                                    href="https://tidycal.com/skylumina/webwunder"
                                    className="flex flex-row items-center justify-between gap-4"
                                >
                                    <p className="ml-4 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                        {/* Book a call */}
                                        {
                                            languageData?.unlimitedDesign?.[
                                                changeLanguage
                                            ]?.bookCall
                                        }
                                    </p>
                                    <ArrowRight
                                        size={18}
                                        fontWeight={100}
                                        className="text-[#24252A]"
                                    />
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <Image
                            className="absolute left-4 top-4 animate-heartbeat lg:left-48 lg:top-12 xl:left-48 xl:top-12"
                            src="/images/home/stay-on-top/i4.svg"
                            alt="Unlimited Design"
                            width={75.56}
                            height={79.07}
                        />
                        <Image
                            className="absolute right-4 top-4 animate-heartbeat lg:bottom-44 lg:left-12 xl:bottom-44 xl:left-12"
                            src="/images/home/stay-on-top/i1.svg"
                            alt="Unlimited Design"
                            width={50}
                            height={50}
                        />
                        <Image
                            className="absolute left-8 top-96 animate-heartbeat lg:right-12 lg:top-12 xl:right-12 xl:top-12"
                            src="/images/home/stay-on-top/i2.svg"
                            alt="Unlimited Design"
                            width={76}
                            height={79}
                        />
                        <Image
                            className="absolute bottom-80 right-12 animate-heartbeat lg:bottom-16 lg:left-[43%] xl:bottom-44 xl:left-[48%]"
                            src="/images/home/stay-on-top/i4.svg"
                            alt="Unlimited Design"
                            width={32.26}
                            height={33.76}
                        />
                    </div>

                    <div className="hidden lg:flex">
                        <Image
                            className="absolute animate-heartbeat lg:left-48 lg:top-12 xl:left-48 xl:top-12"
                            src="/images/home/stay-on-top/icon-3.png"
                            alt="Unlimited Design"
                            width={75.56}
                            height={79.07}
                        />
                        <Image
                            className="absolute animate-heartbeat lg:bottom-44 lg:left-12 xl:bottom-44 xl:left-12"
                            src="/images/home/stay-on-top/icon-5.png"
                            alt="Unlimited Design"
                            width={50}
                            height={50}
                        />
                        <Image
                            className="absolute animate-heartbeat lg:right-12 lg:top-12 xl:right-12 xl:top-12"
                            src="/images/home/stay-on-top/icon-1.png"
                            alt="Unlimited Design"
                            width={76}
                            height={79}
                        />
                        <Image
                            className="absolute animate-heartbeat lg:bottom-16 lg:left-[43%] xl:bottom-44 xl:left-[48%]"
                            src="/images/home/stay-on-top/icon-4.png"
                            alt="Unlimited Design"
                            width={32.26}
                            height={33.76}
                        />
                    </div>
                </div>

                {/* Show the image on all screen sizes but apply specific height for smaller screens */}
                <div
                    className="block w-full max-w-full self-end lg:w-[60vw]" // Ensure image responsiveness
                >
                    <Image
                        src="/images/home/stay-on-top/unlimited-design-img4.webp"
                        alt="Unlimited Design"
                        layout="responsive"
                        width={800}
                        height={1000}
                        priority={false}
                    />
                </div>
            </div>
            <div className="relative bottom-14 w-full">
                <FeaturesCarousel
                    bgColor="bg-[#FB421F]"
                    tiltAngle="rotate(-0.97deg)"
                    carouselTextColor="text-white"
                />
            </div>
        </div>
    )
}

export default StayOnTop
