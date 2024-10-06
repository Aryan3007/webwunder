'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Socials from './form/social'
import Header from '../layout/home-template-new/header'
import { LoginForm } from './form/fields'
import { languageData } from '@/langauge'
import axios from 'axios'

export default function LoginPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliding, setSliding] = useState(false)
    const [slideDirection, setSlideDirection] = useState('')
    const [scale, setScale] = useState('')

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth

            // Define breakpoints at intervals of 100px
            if (windowWidth >= 1536) {
                setScale('scale-100') // For 1536px and above
            } else if (windowWidth >= 1280) {
                setScale('scale-90') // For 1400px to 1535px
            } else if (windowWidth >= 1024) {
                setScale('scale-75') // For 1300px to 1399px
            } else {
                setScale('scale-[100%]') // Default or fallback width
            }
        }

        // Call the function on mount and when window is resized
        window.addEventListener('resize', handleResize)
        handleResize() // Call it once to set the initial width

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (sliding) {
            const timer = setTimeout(() => {
                setSliding(false)
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [sliding])

    const nextSlide = () => {
        if (sliding) return
        setSliding(true)
        setSlideDirection('left')
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        if (sliding) return
        setSliding(true)
        setSlideDirection('right')
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const getSlideClass = (index: number) => {
        if (index === currentSlide) {
            return 'translate-x-0'
        } else if (
            index ===
            (currentSlide - 1 + slides.length) % slides.length
        ) {
            return slideDirection === 'left'
                ? '-translate-x-full'
                : 'translate-x-full'
        } else {
            return slideDirection === 'left'
                ? 'translate-x-full'
                : '-translate-x-full'
        }
    }

    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const slides = [
        {
            image: '/assets/auth1.png',
            title: languageData?.loginPage?.[changeLanguage]?.title,
            description: languageData?.loginPage?.[changeLanguage]?.description,
        },
        {
            image: '/assets/auth2.png',
            title: languageData?.loginPage?.[changeLanguage]?.title2,
            description:
                languageData?.loginPage?.[changeLanguage]?.description2,
        },
    ]

    return (
        <div className="flex min-h-screen flex-col overflow-hidden  bg-black lg:flex-row">
            <div className="block md:hidden">
                <Header />
            </div>
            {/* Left side with carousel */}
            <div className="relative h-[50vh] rounded-3xl w-full overflow-hidden lg:ml-4 lg:mt-4 lg:h-[91vh] lg:w-[60%]">
                <div className="absolute  inset-0">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getSlideClass(index)}`}
                        >
                            {/* Wrap the Image in a div with padding */}
                            <div className="h-full w-full rounded-3xl">
                                <Link href="/">
                                    <Image
                                        className="rounded-3xl p-4 lg:p-0"
                                        src={slide.image}
                                        alt={`Slide ${index + 1}`}
                                        fill
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute left-4 top-4 z-10 hidden cursor-pointer px-6 py-8 lg:block">
                    <Link href={'/'}>
                    <Image src="./images/logo.svg"
                
                alt="WebWunder Logo"
                width="225"
                height="17" />
                    </Link>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 space-y-3 bg-gradient-to-t from-black to-transparent p-6 px-10 text-white">
                    <h1 className="text-xl font-bold leading-none md:text-2xl lg:text-3xl xl:text-2xl">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-sm text-white/70 lg:w-4/5 xl:text-base">
                        {slides[currentSlide].description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex space-x-2 text-sm">
                            <span className="text-white/40">
                                {currentSlide + 1}
                            </span>
                            <span className="text-white">of</span>
                            <span className="text-white">{slides.length}</span>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={prevSlide}
                                className="rounded-full border border-white/40 bg-transparent p-2 text-white hover:bg-white/20"
                            >
                                <ArrowLeft size={16} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="rounded-full border border-white bg-transparent p-2 text-white hover:bg-white/20"
                            >
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side with form */}
            <div className={`m-auto  lg:w-[40%] lg:h-[91vh] flex flex-col ${scale} items-center justify-center px-3 py-8 bg-cover bg-center`}
               style={{ backgroundImage: "url('/images/login-bg-main.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}

            
             >
                <div className="z-10 w-full max-w-lg lg:space-y-4 space-y-10 lg:min-w-[30rem]">
                    <div className={`space-y-2 lg:ml-0 mx-auto lg:text-left ${changeLanguage === 'de' ? 'ml-8' : 'ml-0'}`}>
                        <h2 className={`font-archivo lg:text-start text-center leading-none text-[45px] lg:w-full ${changeLanguage === 'de' ? 'w-3/4' : 'w-full'} font-bold text-white`}>
                            {
                                languageData?.loginPage?.[changeLanguage]
                                    ?.welcomeBack
                            }
                        </h2>
                        <p className="font-archivo lg:text-start text-center text-base font-normal text-white">
                            {languageData?.loginPage?.[changeLanguage]?.newTo}{' '}
                            <Link href="/signup" className="text-[#5D59E1]">
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.signUp
                                }{' '}
                            </Link>
                        </p>
                    </div>

                    <LoginForm />

                    <div className="text-center">
                        <p className="mb-4 font-archivo text-base font-normal text-white">
                            {
                                languageData?.loginPage?.[changeLanguage]
                                    ?.orSignInwith
                            }{' '}
                        </p>
                        <Socials />
                    </div>

                    <div className="space-y-16 text-center text-xs text-white/70">
                        <div className="flex flex-wrap justify-center space-x-4 font-archivo text-sm font-normal text-white">
                            <a
                                href="/privacy-policy"
                                className="hover:text-white"
                            >
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.privacyPolicy
                                }{' '}
                            </a>
                            <a href="/terms" className="hover:text-white">
                                {/* Terms & Conditions */}
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.termsConditions
                                }{' '}
                            </a>
                            <a href="/imprint" className="hover:text-white">
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.imprint
                                }{' '}
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 font-inter text-sm font-normal text-white">
                            <a href="#" className="hover:text-white">
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.navLinks[0]
                                }{' '}
                            </a>
                            <a href="#" className="hover:text-white">
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.navLinks[1]
                                }{' '}
                            </a>
                            <a href="#" className="hover:text-white">
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.navLinks[2]
                                }{' '}
                            </a>
                            <a href="#" className="hover:text-white">
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.navLinks[3]
                                }{' '}
                            </a>
                            <a href="#" className="hover:text-white">
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.navLinks[4]
                                }{' '}
                            </a>
                            <a href="#" className="hover:text-white">
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.navLinks[5]
                                }{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
