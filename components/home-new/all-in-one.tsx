'use client'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../layout/home-template-new/header'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import FeaturesCarousel from './features-carousel'
import { gsap, ScrollTrigger } from 'gsap/all'
import { languageData } from '@/langauge'
const AllInOne = () => {
    const textSectionRef = useRef<HTMLDivElement>(null)
    const image1Ref = useRef<HTMLImageElement>(null)
    const [scrollPercent, setScrollPercent] = useState(0)
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.pageYOffset
    //         const documentHeight =
    //             document.documentElement.scrollHeight - window.innerHeight
    //         const percentageScrolled = (scrollPosition / documentHeight) * 100
    //         setScrollPercent(percentageScrolled) // Corrected the setScrollPercent line

    //         console.log(percentageScrolled) // Log the correct value of percentageScrolled

    //         // Only start the parallax effect when scrolled 30% of the page
    //         if (percentageScrolled >= 20) {
    //             const adjustedScrollPosition =
    //                 scrollPosition - 0.2 * documentHeight

    //             if (textSectionRef.current) {
    //                 textSectionRef.current.style.transform = `translateY(${adjustedScrollPosition * 0.3}px`
    //             }

    //             if (image1Ref.current) {
    //                 const adjustedScrollPercentage =
    //                     adjustedScrollPosition / (documentHeight * 0.7) // Adjusted for the remaining 70%
    //                 const scale = 1 + adjustedScrollPercentage * 0.15 // Scale from 1 to 1.05
    //                 image1Ref.current.style.transform = `scale(${scale})` // Adjusted transformation
    //                 image1Ref.current.style.transformOrigin = 'center bottom'
    //             }
    //         } else {
    //             // Reset transformations if scroll is less than 30%
    //             if (textSectionRef.current) {
    //                 textSectionRef.current.style.transform = 'none'
    //             }
    //             if (image1Ref.current) {
    //                 image1Ref.current.style.transform = 'none'
    //             }
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll)

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [scrollPercent]) // Added scrollPercent as dependency

    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger)

        // Get all heading elements you want to animate
        const main = document.querySelectorAll('.main')
        const s1 = document.querySelectorAll('.screen1')
        const s2 = document.querySelectorAll('.screen2')
        const s3 = document.querySelectorAll('.screen3')
        const s4 = document.querySelectorAll('.screen4')

        // Set a timeout to delay the animation
        const timeoutId = setTimeout(() => {
            // Animate each letter into view
            gsap.to(s1, {
                y: -200,
                x: -200,
                scrollTrigger: {
                    trigger: '.images',
                    start: 'top 50%', // Start when the top of the container reaches 75% of the viewport
                    end: 'bottom 25%', // End when the bottom of the container reaches 25% of the viewport
                    scrub: 1, // Smooth scrubbing
                },
                duration: 0.5,
                stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
                ease: 'power2.out',
            })

            gsap.to(s2, {
                y: -300,
                x: -100,
                scrollTrigger: {
                    trigger: '.images',
                    start: 'top 50%', // Start when the top of the container reaches 75% of the viewport
                    end: 'bottom 25%', // End when the bottom of the container reaches 25% of the viewport
                    scrub: 1, // Smooth scrubbing
                },
                duration: 0.5,
                stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
                ease: 'power2.out',
            })
            gsap.to(s3, {
                y: -300,
                x: 100,
                scrollTrigger: {
                    trigger: '.images',
                    start: 'top 50%', // Start when the top of the container reaches 75% of the viewport
                    end: 'bottom 25%', // End when the bottom of the container reaches 25% of the viewport
                    scrub: 1, // Smooth scrubbing
                },
                duration: 0.5,
                stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
                ease: 'power2.out',
            })

            gsap.to(s4, {
                y: -200,
                x: 200,
                scrollTrigger: {
                    trigger: '.images',
                    start: 'top 50%', // Start when the top of the container reaches 75% of the viewport
                    end: 'bottom 25%', // End when the bottom of the container reaches 25% of the viewport
                    scrub: 1, // Smooth scrubbing
                },
                duration: 0.5,
                stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
                ease: 'power2.out',
            })

            // gsap.to(main, {
            //     scale: 1.2,
            //     scrollTrigger: {
            //         trigger: '.images',
            //         start: 'top 50%', // Start when the top of the container reaches 75% of the viewport
            //         end: 'bottom 25%', // End when the bottom of the container reaches 25% of the viewport
            //         scrub: 1, // Smooth scrubbing
            //     },
            //     duration: 0.5,
            //     stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
            //     ease: 'power2.out',
            // })
        }, 300) // Delay of 300ms

        return () => clearTimeout(timeoutId) // Cleanup timeout on component unmount
    }, [])

    return (
        <div id='all-in-one' className="bg-[url('/images/home/all-in-one/all-in-one-bg.png')] bg-cover bg-center">
            <div className="lg:min-h-[60vh]">
                <FeaturesCarousel
                    bgColor="bg-[#CAFF00]"
                    tiltAngle="rotate(0.97deg)"
                    carouselTextColor="text-[#171411]"
                />

                <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4">
                    <div
                        className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4"
                        ref={textSectionRef}
                    >
                        <div className="mt-8 2xl:translate-y-0">
                            <Badge className="rounded-full bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white sm:text-sm">
                                {
                                    languageData?.allInOnePage?.[changeLanguage]
                                        ?.title
                                }{' '}
                            </Badge>
                        </div>

                        <div className="animated-text2 flex flex-col items-center leading-none 2xl:translate-y-0">
                            <p className="animated-text-1 w-4/5 text-center font-archivo text-[25px] font-bold leading-none text-black lg:w-3/5 lg:text-[45px]">
                                {
                                    languageData?.allInOnePage?.[changeLanguage]
                                        ?.header
                                }
                            </p>
                        </div>

                        <p className="px-4 text-center font-archivo text-sm font-normal text-zinc-600 lg:w-[65%] lg:text-base 2xl:translate-y-0">
                            {
                                languageData?.allInOnePage?.[changeLanguage]
                                    ?.description
                            }{' '}
                        </p>

                        <div className="flex items-center justify-center gap-3 sm:gap-5 2xl:translate-y-0">
                            <Link href="#purchase-plans">
                                <button
                                    className={`flex ${changeLanguage === 'de' ? 'h-14' : 'h-12'} w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2 transition-all hover:scale-95`}
                                >
                                    <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                        {
                                            languageData?.allInOnePage?.[
                                                changeLanguage
                                            ]?.explorePlans
                                        }
                                    </p>
                                    <div
                                        className={`flex ${changeLanguage === 'de' ? 'h-10 w-10' : 'h-8 w-8'} items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8`}
                                    >
                                        <ArrowRight
                                            size={18}
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
                                    <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                        {
                                            languageData?.additionalSection?.[
                                                changeLanguage
                                            ]?.bookCall
                                        }
                                    </p>
                                    <div
                                        className={`'h-6 flex w-6 items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8`}
                                    >
                                        <ArrowRight
                                            size={18}
                                            fontWeight={100}
                                            className="text-[#24252A]"
                                        />
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>

                    <div className="images relative mt-10 hidden translate-y-[142px] md:mt-6 lg:flex">
                        <Image
                            ref={image1Ref}
                            className="main  z-20"
                            src="/images/home/all-in-one/m1.svg"
                            alt="All in one agency"
                            width={4000}
                            height={4000}
                        />
                        <Image
                            className="screen1 absolute bottom-56 left-16 h-64 w-80"
                            src="/images/home/all-in-one/m5.svg"
                            alt="All in one agency"
                            width={4000}
                            height={4000}
                        />
                        <Image
                            className="screen2 absolute left-36 -top-24 h-64 w-80"
                            src="/images/home/all-in-one/m4.svg"
                            alt="All in one agency"
                            width={4000}
                            height={4000}
                        />{' '}
                        <Image
                            className="screen3 absolute -top-20 right-44 h-64 w-80"
                            src="/images/home/all-in-one/m3.svg"
                            alt="All in one agency"
                            width={4000}
                            height={4000}
                        />
                        <Image
                            className="screen4 absolute bottom-56 right-16 h-64 w-80"
                            src="/images/home/all-in-one/m2.svg"
                            alt="All in one agency"
                            width={4000}
                            height={4000}
                        />
                    </div>

                    <Image
                            className='pt-16 translate-y-12 lg:hidden flex'
                            src="/images/home/all-in-one/allnewmob.png"
                            alt="All in one agency"
                            width={4000}
                            height={4000}
                        />

                </div>
            </div>
        </div>
    )
}

export default AllInOne
