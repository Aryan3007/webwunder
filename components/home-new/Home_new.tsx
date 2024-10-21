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
import { ArrowRight, X } from 'lucide-react'
import New_Header from '../layout/home-template-new/New_Header'
import MobileMenu from '../layout/home-template-new/MobileMenu'
import MenuComponent from '../layout/home-template-new/MenuComponent'
import FixedHeader from './FixedHeader'
import FixedHeaderMob from './FixedHeaderMob'
const Home_new = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const openPopup = () => setIsPopupOpen(true)
    const closePopup = () => setIsPopupOpen(false)

    const videoSrc =
    changeLanguage === 'de'
      ? "https://www.youtube.com/embed/mdaxGJFxj3g?si=Kplkw-MGBSzfqmud"  // Replace with German video URL
      : "https://www.youtube.com/embed/j6SZoN30F84?si=FzioD18NYkjKuotN" ; // English video URL


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



        gsap.to(laptop, {
            y: -100,
            duration: 0.5,

            ease: 'power2.out',
            scrollTrigger: {
                trigger: laptop, // The container for the text
                start: 'top 60%', // Start when the top of the container reaches 60% of the viewport
                end: 'bottom 20%', // End when the bottom of the container reaches 20% of the viewport
                scrub: 2, // Smooth scrubbing
                // markers: true, // Enable markers for debugging (optional)
            },
        });




        // Animate each letter into view
        gsap.to(mobile, {
            y: 50, // Start 30px below
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: laptop, // The container for the text
                start: 'top 60%', // Start when the top of the container reaches 75% of the viewport
                end: 'bottom 20%', // End when the bottom of the container reaches 25% of the viewport
                scrub: 2, // Smooth scrubbing
                // markers: true, // Enable markers for debugging (optional)
            },
        });


        // Animate each letter into view
        gsap.to(clouds, {
            y: 150, // Start 30px below
            duration: 3,
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
        // gsap.to(text, {
        //     y: 160,

        //     ease: 'power2.out',
        //     scrollTrigger: {
        //         trigger: laptop, // The container for the text
        //         start: 'top 70%', // Start when the top of the container reaches 75% of the viewport
        //         end: 'bottom 20%', // End when the bottom of the container reaches 25% of the viewport
        //         scrub: 2, // Smooth scrubbing
        //         // markers: true, // Enable markers for debugging (optional)
        //     },
        // });


    }, []);


    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger)
        // Get all heading elements you want to animate
        const laptop = document.querySelectorAll('.laptop2');
        const clouds = document.querySelectorAll('.clouds2');
        const mobile = document.querySelectorAll('.mobiles2');
        const text = document.querySelectorAll('.text2');





        gsap.to(laptop, {
            y: -10,
            duration: 0.5,

            ease: 'power2.out',
            scrollTrigger: {
                trigger: laptop, // The container for the text
                start: 'top 60%', // Start when the top of the container reaches 60% of the viewport
                end: 'bottom 20%', // End when the bottom of the container reaches 20% of the viewport
                scrub: 2, // Smooth scrubbing
                // markers: true, // Enable markers for debugging (optional)
            },
        });




        // Animate each letter into view
        gsap.to(mobile, {
            y: 60, // Start 30px below
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: laptop, // The container for the text
                start: 'top 60%', // Start when the top of the container reaches 75% of the viewport
                end: 'bottom 20%', // End when the bottom of the container reaches 25% of the viewport
                scrub: 2, // Smooth scrubbing
                // markers: true, // Enable markers for debugging (optional)
            },
        });


        // Animate each letter into view
        gsap.to(clouds, {
            y: 80, // Start 30px below
            duration: 3,
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
            <div id='home' className=" lg:h-full  h-full lg:bg-white">
                <div className="relative bg-fixed sm:min-h-[480px] h-[100%] overflow-hidden bg-[url('/images/home/home-landing-img.png')] bg-cover bg-center">

                    {/* Header */}

                    <div className='menu hidden py-8 lg:flex items-center justify-center top-2 w-full z-[99]'>
                        <Header />
                    </div>

                    <div className='lg:hidden  top-5 z-[999] w-full justify-between items-center px-6 flex'>
                        <Logo />
                        <SidebarMenu />
                    </div>

                    {/* <MenuComponent /> */}
                    <FixedHeader/>
                    <FixedHeaderMob/>



                    {/* Text Content */}

                    <div className="mx-auto text hidden lg:flex max-w-6xl md:mb-12 lg:mb-0 mb-8 translate-y-24 flex-col items-center justify-center gap-4 ">
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
                        <p className="text-center font-archivo text-base mb-12 font-bold text-white lg:text-lg">
                            {languageData?.heroSection?.[changeLanguage]?.description}
                            <br />

                            {
                                changeLanguage === 'de' ? (<span className='font-light text-sm lg:text-[18px] text-white'>
                                    Mehr Erfolg. Weniger Kosten. Garantiert.

                                </span>) : (<span className='font-light text-sm lg:text-[18px] text-white'>
                                    Proven to Boost Sales and Cut Costs.
                                </span>)
                            }



                        </p>
                    </div>

                    <div className="mx-auto text2 flex lg:hidden max-w-6xl md:mb-12 lg:mb-0 mb-8 mt-12 flex-col items-center justify-center gap-4 ">
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
                        <p className="text-center font-archivo text-base font-bold text-white lg:text-lg">
                            {languageData?.heroSection?.[changeLanguage]?.description}
                            <br />

                            {
                                changeLanguage === 'de' ? (<span className='font-light text-sm lg:text-[18px] text-white'>
                                    Mehr Erfolg. Weniger Kosten. Garantiert.

                                </span>) : (<span className='font-light text-sm lg:text-[18px] text-white'>
                                    Proven to Boost Sales and Cut Costs.
                                </span>)
                            }



                        </p>
                    </div>

                    {/* <div className=" flex scale-90 lg:hidden items-center justify-center gap-2 lg:my-2 lg:gap-3">
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
                                <p className="ml-4 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
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
                    </div> */}

                    {/* {

                        changeLanguage === "de" ? (<p className=" font-archivo block md:hidden text-sm px-4 text-center text-white lg:text-lg">
                            Hunderte erfolgreicher Projekte für hunderte zufriedener Kunden realisiert.

                        </p>) : (<p className=" font-archivo block md:hidden text-sm px-4 text-center mt-3 text-white lg:text-lg">
                            Hundreds of perfect projects delivered to hundreds of  thrilled customers.

                        </p>)
                    } */}


                    {/* Cloud Left */}
                    <div className='hidden md:block'>

                        <Image
                            src="/images/home/hero/clouds-1.webp"
                            alt="Cloud Left"
                            className='absolute clouds bottom-28 md:bottom-36 lg:bottom-64 z-10 -left-24'
                            width={5000}
                            height={5000}

                        />


                        {/* Cloud Right */}

                        <Image
                            src="/images/home/hero/clouds-2.webp"
                            alt="Cloud Right"
                            className='absolute clouds bottom-24 md:bottom-36 lg:bottom-72 2xl:bottom-96 z-30 w-2/3 -right-16'
                            width={5000}
                            height={5000}
                        />


                        {/* Rock Phone Left */}

                        <Image
                            src="/images/home/hero/hero-img-2.webp"
                            alt="Rock Phone Left"
                            className='absolute mobiles z-40 bottom-24 md:bottom-24 lg:bottom-40 xl:bottom-44 2xl:bottom-44 w-3/5 left-0'
                            width={5000}
                            height={5000}
                        />


                        {/* Right Phone */}

                        <Image
                            src="/images/home/hero/hero-img-3.webp"
                            alt="Right Phone"
                            className='absolute mobiles z-40 bottom-20 md:bottom-24 2xl:bottom-32 w-2/3 right-0'
                            width={5000}
                            height={5000}
                        />

                        {/* Hero Image */}
                        <Image
                            src="/images/herbut.webp"
                            alt="Hero"
                            className='relative laptop md:-bottom-44 z-50 w-screen'
                            width={5000}
                            height={5000}
                            onClick={openPopup}
                        />

                        {isPopupOpen && (
                            <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
                                <button
                                    onClick={closePopup}
                                    className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
                                    aria-label="Close video"
                                >
                                    <X size={24} />
                                </button>
                                <iframe width="960" height="615" src={videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                        )}

                    </div>
                    <div className=' md:hidden flex  mt-12'>

                        <Image
                            src="/images/home/hero/clouds-1.webp"
                            alt="Cloud Left"
                            className='absolute clouds2 bottom-36 z-10 -left-24'
                            width={5000}
                            height={5000}

                        />


                        {/* Cloud Right */}

                        <Image
                            src="/images/home/hero/clouds-2.webp"
                            alt="Cloud Right"
                            className='absolute clouds2 bottom-36  z-20 w-2/3 -right-16'
                            width={5000}
                            height={5000}
                        />


                        {/* Rock Phone Left */}

                        <Image
                            src="/images/home/hero/hero-img-2.webp"
                            alt="Rock Phone Left"
                            className='absolute mobiles2 z-30 bottom-20 w-3/5 left-0'
                            width={5000}
                            height={5000}
                        />


                        {/* Right Phone */}

                        <Image
                            src="/images/home/hero/hero-img-3.webp"
                            alt="Right Phone"
                            className='absolute mobiles2 z-30 bottom-20 w-2/3 right-0'
                            width={5000}
                            height={5000}
                        />


                        {/* Hero Image */}

                        <Image
                            src="/images/herbut.webp"
                            alt="Hero"
                            className='relative laptop2 -bottom-8 z-40 w-screen'
                            width={5000}
                            height={5000}
                            onClick={openPopup}
                        />

                        {isPopupOpen && (
                            <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
                                <button
                                    onClick={closePopup}
                                    className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
                                    aria-label="Close video"
                                >
                                    <X size={24} />
                                </button>
                                <iframe width="350" height="315" src={videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                        )}

                    </div>

                </div>
            </div>


        </>

    )

}




export default Home_new