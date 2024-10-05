'use client'
import React, { useState, useEffect } from 'react'
import { Badge } from '../ui/badge'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import MainCard from './card-main'
import { motion } from 'framer-motion'
import { gsap, ScrollTrigger } from 'gsap/all'
import { languageData } from '@/langauge'
import axios from 'axios'
import LangLayout from '@/app/[locale]/langLayout'

// Container and Item Animations
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
}

const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

const WhyWebWunder = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 1024)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index)
    }

    // useEffect(() => {
    //     // Register ScrollTrigger plugin
    //     gsap.registerPlugin(ScrollTrigger);

    //     // Select all words in the text
    //     const words = document.querySelectorAll('.word');

    //     // Create a timeline for scroll-triggered animations
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.animated-text', // The container for the text
    //             start: 'top 75%', // Start when the top of the container reaches 75% of the viewport
    //             end: 'bottom 25%', // End when the bottom of the container reaches 25% of the viewport
    //             scrub: 1, // Smooth scrubbing
    //             // markers: true, // Enable markers for debugging (optional)
    //         },
    //     });

    //     // Animate each word individually
    //     words.forEach((word, index) => {
    //         tl.to(word, {
    //             color: '#24252A', // Change to black
    //             duration: 1,
    //             ease: 'none',
    //             stagger: {
    //                 amount: 0.5, // Delay between each word's animation
    //                 from: "start", // Start from the first word
    //             },
    //         }, index * 0.2); // Stagger start time for each word
    //     });
    // }, []);

    // useEffect(() => {
    //     // Register GSAP plugins

    //     // Get all heading elements you want to animate
    //     const upperdiv = document.querySelectorAll('.upperdiv');

    //     // Set a timeout to delay the animation
    //     const timeoutId = setTimeout(() => {
    //         // Animate each letter into view
    //         gsap.from(upperdiv, {
    //             height: 0, // Start 30px below

    //             duration: 0.5,
    //             stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
    //             ease: 'power2.out',
    //             scrollTrigger: {
    //                 trigger: upperdiv, // The container for the text
    //                 start: 'top 75%', // Start when the top of the container reaches 75% of the viewport
    //                 end: 'bottom 25%', // End when the bottom of the container reaches 25% of the viewport
    //                 scrub: 1, // Smooth scrubbing
    //                 // markers: true, // Enable markers for debugging (optional)
    //             },
    //         });
    //     }, 300); // Delay of 300ms

    //     return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
    // }, []);

    // useEffect(() => {
    //     // Register GSAP plugins

    //     // Get all heading elements you want to animate
    //     const lowerrdiv = document.querySelectorAll('.lowerrdiv');

    //     // Set a timeout to delay the animation
    //     const timeoutId = setTimeout(() => {
    //         // Animate each letter into view
    //         gsap.from(lowerrdiv, {
    //             height: 0, // Start 30px below

    //             duration: 1,
    //             stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
    //             ease: 'power2.out',
    //             scrollTrigger: {
    //                 trigger: ".trig", // The container for the text
    //                 start: 'top 30%', // Start when the top of the container reaches 75% of the viewport
    //                 end: 'bottom -50%', // End when the bottom of the container reaches 25% of the viewport
    //                 scrub: 1, // Smooth scrubbing
    //                 // markers: true, // Enable markers for debugging (optional)
    //             },
    //         });
    //     }, 300); // Delay of 300ms

    //     return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
    // }, []);

    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')
    const mainItems = [
        {
            cardWidth: 'lg:w-[700px] w-full',
            image: '/images/home/why-webwunder/why-webwunder-1.png',
            smallImage: '/images/home/why-webwunder/why-webwunder-1-small.png',
            imgWidth: 700,
            title: languageData?.additionalSection?.[changeLanguage]?.tabs[0]
                .title,
            description:
                languageData?.additionalSection?.[changeLanguage]?.tabs[0]
                    .description,
        },
        {
            cardWidth: 'lg:w-[350px] w-full',
            image: '/images/home/why-webwunder/why-webwunder-2.png',
            imgWidth: 350,
            title: languageData?.additionalSection?.[changeLanguage]?.tabs[1]
                .title,
            description:
                languageData?.additionalSection?.[changeLanguage]?.tabs[1]
                    .description,
        },
        {
            cardWidth: 'lg:w-[350px] w-full',
            image: '/images/home/why-webwunder/why-webwunder-3.png',
            imgWidth: 350,
            title: languageData?.additionalSection?.[changeLanguage]?.tabs[2]
                .title,
            description:
                languageData?.additionalSection?.[changeLanguage]?.tabs[2]
                    .description,
        },
        {
            cardWidth: 'lg:w-[350px] w-full',
            image: '/images/home/why-webwunder/why-webwunder-4.png',
            imgWidth: 350,
            title: languageData?.additionalSection?.[changeLanguage]?.tabs[3]
                .title,
            description:
                languageData?.additionalSection?.[changeLanguage]?.tabs[3]
                    .description,
        },
        {
            cardWidth: 'lg:w-[350px] w-fit',
            image: '/images/home/why-webwunder/why-webwunder-5.png',
            imgWidth: 350,
            title: languageData?.additionalSection?.[changeLanguage]?.tabs[4]
                .title,
            description:
                languageData?.additionalSection?.[changeLanguage]?.tabs[4]
                    .description,
        },
    ]

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    return (
        <div className=" flex flex-col items-center justify-center gap-6 px-4 lg:mb-10 lg:-mt-10 2xl:mb-8">
            {/* Heading */}
            <div className="flex flex-col items-center gap-4 text-center">
                <Badge className="w-fit mt-12 bg-[#5D59E1] font-archivo text-sm font-normal text-white">
                    {
                        languageData?.additionalSection?.[changeLanguage]
                            ?.designedToDominate
                    }
                </Badge>
                <div className="flex flex-col items-center leading-none">
                    {/* Split text into individual words */}
                    <p className="font-archivo text-[32px] font-bold text-black md:text-[45px]">
                        <span className="word">
                            {/* Why WebWunder? */}
                            {
                                languageData?.additionalSection?.[
                                    changeLanguage
                                ]?.whyWebWunder
                            }
                        </span>{' '}
                        <br />
                        <span className="word">
                            {/* We Make it Clear. */}
                            {
                                languageData?.additionalSection?.[
                                    changeLanguage
                                ]?.weMakeItClear
                            }
                        </span>
                    </p>
                </div>
                <p className="font-archivo text-sm font-normal text-black/50 md:text-base">
                    {/* Your business deserves more than just a website—it deserves
                    a game-changer. */}
                    {
                        languageData?.additionalSection?.[changeLanguage]
                            ?.businessDeservesMore
                    }
                </p>

                {/* Buttons */}
                <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">
                    <Link href="#purchase-plans">
                        <button
                            className={`flex ${changeLanguage === 'de' ? 'h-14' : 'h-12'} w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2 transition-all hover:scale-95`}
                        >
                            <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                {
                                    languageData?.additionalSection?.[
                                        changeLanguage
                                    ]?.explorePlans
                                }
                            </p>
                            <div
                                className={`flex ${changeLanguage === 'de' ? 'h-8 w-10' : 'h-8 w-8'} items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8`}
                            >
                                <ArrowRight
                                    size={18}
                                    fontWeight={100}
                                    className="text-[#24252A]"
                                />
                            </div>
                        </button>
                    </Link>
                    <Link href="https://tidycal.com/skylumina/webwunder">
                        <button
                            className={`flex ${changeLanguage === 'de' ? 'h-14' : 'h-12'} w-fit flex-row items-center justify-between gap-6 rounded-full border bg-[#ffffff] p-2 transition-all hover:scale-95`}
                        >
                            <Link
                                href="#"
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
                    </Link>
                </div>
            </div>

            <div
                style={{
                    backgroundImage:
                        'url("/images/home/why-webwunder/why-webwunder-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="h-full w-full lg:pt-6 lg:pb-12"
            >
                {isSmallScreen ? (
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                }}
                            >
                                {mainItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="items w-full flex-shrink-0"
                                    >
                                        <MainCard
                                            cardWidth="w-full"
                                            image={item.image}
                                            smallImage={item.smallImage}
                                            imgWidth={item.imgWidth}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-2">
                            {mainItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSlideChange(index)}
                                    className={`h-1 w-16 rounded-full transition-colors ${
                                        currentSlide === index
                                            ? 'bg-[#5D59E1]'
                                            : 'bg-[#D9D9D9]'
                                    }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center gap-16 lg:gap-4">
                        {/* First row - 2 items */}
                        <div className="flex h-full w-full flex-wrap justify-center gap-16 lg:gap-4 xl:gap-6">
                            {mainItems.slice(0, 2).map((item, index) => (
                                <div key={index} className="upperdiv trig">
                                    <MainCard
                                        cardWidth={item.cardWidth}
                                        image={item.image}
                                        imgWidth={item.imgWidth}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Second row - 3 items */}
                        <div className="flex w-full flex-wrap justify-center gap-6 lg:gap-4 xl:gap-4">
                            {mainItems.slice(2).map((item, index) => (
                                <div
                                    key={index}
                                    className="lowerrdiv rounded-xl"
                                >
                                    <MainCard
                                        cardWidth={item.cardWidth}
                                        image={item.image}
                                        imgWidth={item.imgWidth}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WhyWebWunder
