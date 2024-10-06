"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from '../layout/home-template-new/header'
import { languageData } from '@/langauge'
import BrandsCarousel from './brands-carousel'
import SidebarMenu from '../layout/home-template-new/menu-mobile'
import Logo from '../common/logo'
import { gsap, ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
const Home_new = () => {
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
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger)
        // Get all heading elements you want to animate
        const laptop = document.querySelectorAll('.laptop');
        const clouds = document.querySelectorAll('.clouds');
        const mobile = document.querySelectorAll('.mobiles');
        const text = document.querySelectorAll('.text');



        // Animate each letter into view
        gsap.to(laptop, {
            y: -80,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: laptop, // The container for the text
                start: 'top 60%', // Start when the top of the container reaches 75% of the viewport
                end: 'bottom 20%', // End when the bottom of the container reaches 25% of the viewport
                scrub: 1, // Smooth scrubbing
                // markers: true, // Enable markers for debugging (optional)
            },
        });



        // Animate each letter into view
        gsap.to(mobile, {
            y: 80, // Start 30px below
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: laptop, // The container for the text
                start: 'top 60%', // Start when the top of the container reaches 75% of the viewport
                end: 'bottom 20%', // End when the bottom of the container reaches 25% of the viewport
                scrub: 1, // Smooth scrubbing
                // markers: true, // Enable markers for debugging (optional)
            },
        });


        // Animate each letter into view
        gsap.to(clouds, {
            y: 20, // Start 30px below
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: laptop, // The container for the text
                start: 'top 60%', // Start when the top of the container reaches 75% of the viewport
                end: 'bottom 20%', // End when the bottom of the container reaches 25% of the viewport
                scrub: 1, // Smooth scrubbing
                // markers: true, // Enable markers for debugging (optional)
            },
        });


        // Animate each letter into view
        gsap.to(text, {
            y: 50,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: laptop, // The container for the text
                start: 'top 60%', // Start when the top of the container reaches 75% of the viewport
                end: 'bottom 20%', // End when the bottom of the container reaches 25% of the viewport
                scrub: 1, // Smooth scrubbing
                // markers: true, // Enable markers for debugging (optional)
            },
        });


    }, []);

    return (
        <>
            <div id='home' className="xl:min-h-screen  h-full lg:bg-white lg:p-5">
                <div className="relative sm:min-h-[480px] h-[100%] overflow-hidden bg-[url('/images/home/home-landing-img.png')] bg-cover bg-center lg:rounded-t-2xl">

                    {/* Header */}

                    <div className='lg:flex hidden'>
                        <Header />
                    </div>

                    <div className='lg:hidden w-full justify-between items-center p-4 flex'>
                        <Logo />
                        <SidebarMenu />
                    </div>



                    {/* Text Content */}

                    <div className="mx-auto text flex max-w-6xl md:mb-12 lg:mb-0 mb-12 mt-6 flex-col items-center justify-center gap-4 ">
                        <Badge className="w-fit rounded-full bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white sm:text-sm">
                            {languageData?.heroSection?.[changeLanguage]?.badge}
                        </Badge>
                        <div className="heading">
                            <p className="overflow-hidden text-center font-archivo text-[35px] font-bold leading-none text-white lg:text-5xl">
                                {languageData?.heroSection?.[changeLanguage]?.headline}
                            </p>
                            <p className="overflow-hidden text-center font-archivo text-[28px] font-bold leading-none text-[#9DFF50] lg:text-4xl">
                                {languageData?.heroSection?.[changeLanguage]?.subHeadline}
                            </p>
                        </div>
                        <p className="text-center font-archivo text-sm mb-12 font-bold text-white lg:text-lg">
                            {languageData?.heroSection?.[changeLanguage]?.description}
                            <br />
                            <span className='font-light text-[18px] text-white'>
                                Proven to Boost Sales and Cut Costs.
                            </span>
                        </p>
                    </div>

                    <div className="my-4 flex md:hidden items-center justify-center gap-2 lg:my-2 lg:gap-3">
                        <button
                            className={`flex ${changeLanguage === 'de' ? 'h-14' : 'h-12'} w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] px-2 transition-all hover:scale-95`}
                        >
                            <a href="https://youtu.be/1g0oik5droE">

                            <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                {
                                    languageData?.heroSection?.[changeLanguage]
                                    ?.watchVideo
                                }
                            </p>
                                </a>
                            <div
                                className={`flex ${changeLanguage === 'de' ? 'h-10 w-12' : 'h-8 w-8'} items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8`}
                            >
                                <ArrowRight
                                    size={18}
                                    fontWeight={100}
                                    className="text-[#24252A]"
                                />
                            </div>
                        </button>

                        <button
                            className={`flex ${changeLanguage === 'de' ? 'h-14' : 'h-12'} w-fit flex-row items-center justify-between gap-6 rounded-full border bg-[#ffffff] px-2 transition-all hover:scale-95`}
                        >
                            <Link
                                target="_blank"
                                href="https://tidycal.com/skylumina/webwunder"
                                className="flex flex-row items-center justify-between gap-4"
                            >
                                <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                    {
                                        languageData?.additionalSection?.[
                                            changeLanguage
                                        ]?.bookCall
                                    }
                                </p>
                                <div className="flex h-6 w-6 items-center justify-center rounded-full lg:h-8 lg:w-8">
                                    <ArrowRight
                                        size={18}
                                        fontWeight={100}
                                        className="text-[#24252A]"
                                    />
                                </div>
                            </Link>
                        </button>
                    </div>


                    {/* Cloud Left */}
                    <div className='hidden md:block'>

                        <Image
                            src="/images/newhome/cloudleft.svg"
                            alt="Cloud Left"
                            className='absolute clouds bottom-28 md:bottom-36 lg:bottom-44 z-10 -left-24'
                            width={5000}
                            height={5000}
                        />


                        {/* Cloud Right */}

                        <Image
                            src="/images/newhome/cloud_right.svg"
                            alt="Cloud Right"
                            className='absolute clouds bottom-24 md:bottom-36 lg::bottom-56 2xl:bottom-80 z-30 w-2/3 -right-16'
                            width={5000}
                            height={5000}
                        />


                        {/* Rock Phone Left */}

                        <Image
                            src="/images/newhome/rock_phone_left.svg"
                            alt="Rock Phone Left"
                            className='absolute mobiles z-40 bottom-24 md:bottom-24 lg:bottom-40 xl:bottom-44 2xl:bottom-44 w-3/5 left-0'
                            width={5000}
                            height={5000}
                        />


                        {/* Right Phone */}

                        <Image
                            src="/images/newhome/right_phone.svg"
                            alt="Right Phone"
                            className='absolute mobiles z-40 bottom-20 md:bottom-24 2xl:bottom-32 w-2/3 right-0'
                            width={5000}
                            height={5000}
                        />


                        {/* Hero Image */}

                        <Image
                            src="/images/newhome/newlaptop.svg"
                            alt="Hero"
                            className='relative laptop md:-bottom-24 z-50 w-screen'
                            width={100}
                            height={100}
                        />

                    </div>


                    <Image
                            src="/images/heromob.svg"
                            alt="Hero"
                            className=' block md:hidden w-screen'
                            width={100}
                            height={100}
                        />

                </div>
            </div>
            <BrandsCarousel />
        </>
    )
}

export default Home_new