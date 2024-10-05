'use client'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../layout/home-template-new/header'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { gsap } from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { languageData } from '@/langauge'
import axios from 'axios'
import LangLayout from '@/app/[locale]/langLayout'
import BrandsCarousel from './brands-carousel'

const New_Homepage = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin()

        // Get all heading elements you want to animate
        const headings = document.querySelectorAll('.heading span')

        // Set a timeout to delay the animation
        const timeoutId = setTimeout(() => {
            // Animate each letter into view
            gsap.from(headings, {
                y: 80, // Start 30px below

                duration: 0.5,
                stagger: 0.1, // Stagger animation by 0.1 seconds for each letter
                ease: 'power2.out',
            })
        }, 300) // Delay of 300ms

        return () => clearTimeout(timeoutId) // Cleanup timeout on component unmount
    }, [])
    const splitText = (text: string) => {
        return text.split('').map((char, index) => (
            <span key={index} className="inline-block">
                {char}
            </span>
        ))
    }

    const textSectionRef = useRef<HTMLDivElement>(null)
   
    const image1Ref = useRef<HTMLImageElement>(null)
    const image2Ref = useRef<HTMLImageElement>(null)
    const image3Ref = useRef<HTMLImageElement>(null)
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset
            const windowHeight = window.innerHeight

            // Handle first image (scaling)
            if (image1Ref.current) {
                const scrollPercentage = scrollPosition / windowHeight
                const scale = 1 + scrollPercentage * 0.1 // Scale from 1 to 1.1
                image1Ref.current.style.transform = `scale(${scale})`
                image1Ref.current.style.transformOrigin = 'center bottom'
            }

            // Handle second image (translate downwards)
            if (textSectionRef.current) {
                const translateY = scrollPosition * 0.3 // Move downwards with positive value
                textSectionRef.current.style.transform = `translateY(${translateY}px)`
                textSectionRef.current.style.transformOrigin = 'center bottom'
            }

 // Handle second image (translate downwards)
            if (image2Ref.current) {
                const translateY = scrollPosition * 0.2 // Move downwards with positive value
                image2Ref.current.style.transform = `translateY(${translateY}px)`
                image2Ref.current.style.transformOrigin = 'center bottom'
            }

            // Handle second image (translate downwards)
            if (image3Ref.current) {
                const translateY = scrollPosition * 0.2 // Move downwards with positive value
                image3Ref.current.style.transform = `translateY(${translateY}px)`
                image3Ref.current.style.transformOrigin = 'center bottom'
            }

            // Handle text section (parallax effect)
           
        }

        // Attach the single scroll event listener
        window.addEventListener('scroll', handleScroll)

        return () => {
            // Cleanup the event listener on component unmount
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
      
        <div className="h-full  lg:bg-white lg:p-5">
            <div className="relative h-full overflow-hidden bg-[url('/images/home/home-landing-img.png')] bg-cover bg-center lg:rounded-2xl">
                <div className="relative z-10">
                    <Header />
                </div>

                <div
                    ref={textSectionRef}
                    className="relative z-50 mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 pt-4"
                >
                    <Badge
                        data-aos="fade-up"
                        className="w-fit mt-12 rounded-full bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white sm:text-sm"
                    >
                        {/* Rock-Solid Business Growth */}
                        {languageData?.heroSection?.[changeLanguage]?.badge}
                    </Badge>

                    <div  className="heading">
                        <p data-aos="fade-up" className="overflow-hidden text-center font-archivo text-[35px] font-bold leading-none text-white lg:text-7xl">
                            {
                                languageData?.heroSection?.[changeLanguage]
                                    ?.headline
                            }
                            {/* {splitText("Winning")} {"  "}{splitText("Websites")} */}
                        </p>
                        <p  data-aos="fade-up" className="overflow-hidden text-center font-archivo text-[28px] font-bold leading-none text-[#9DFF50] lg:text-5xl">
                            {
                                languageData?.heroSection?.[changeLanguage]
                                    ?.subHeadline
                            }
                            {/* {splitText("Unshakable")}  {"  "}  {splitText("Support")} */}
                        </p>
                    </div>
                    <div>
                        <p
                            data-aos="fade-up"
                            className="text-center font-archivo text-sm font-bold text-white lg:text-lg"
                        >
                            {/* Websites by Entrepreneurs for Entrepreneurs */}
                            {
                                languageData?.heroSection?.[changeLanguage]
                                    ?.description
                            }
                        </p>
                        <p
                            data-aos="fade-up"
                            className="text-center font-archivo text-sm  font-normal text-white lg:text-base"
                        >
                            {
                                languageData?.heroSection?.[changeLanguage]
                                    ?.shortDescription
                            }{' '}
                        </p>
                    </div>
                    <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">
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
                    <p className="toptrigger relative mb-6 px-7 text-center font-archivo text-sm font-bold text-white sm:top-3 lg:text-xl">
                        {/* Hundreds of perfect projects delivered to hundreds of
                        thrilled customers. */}
                        {
                            languageData?.heroSection?.[changeLanguage]
                                ?.projectsInfo
                        }
                    </p>
                </div>
                <div className="relative">
                    <Image
                        ref={image1Ref}
                        src="/images/home/hero/newhero.png"
                        alt="Figma"
                        className="relative z-20 hidden w-screen pt-12 lg:flex"
                        width={5000}
                        height={5000}
                    />
                    <Image
                        ref={image2Ref}
                        src="/images/home/hero/phone1.png"
                        alt="Figma"
                        className="absolute bottom-20 left-72 z-10 hidden h-80 w-72 lg:flex"
                        width={5000}
                        height={5000}
                    />
                    <Image
                        ref={image3Ref}
                        src="/images/home/hero/phone2.png"
                        alt="Figma"
                        className="absolute bottom-28 right-72 z-10 hidden h-64 w-36 lg:flex"
                        width={5000}
                        height={5000}
                    />
                </div>

                <Image
                     src="/images/home/hero/newheromob.png"
                    alt="Figma"
                    className="mt-24 flex w-screen bottom-0 lg:hidden"
                    width={5000}
                    height={5000}
                />
            </div>
        </div>
            <BrandsCarousel />
          </>
    )
}

export default New_Homepage
