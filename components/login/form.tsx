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
import CustomLanguageDropdown from '../CustomLanguageDropdown'

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
        <div className="min-h-screen overflow-hidden lg:p-4">
            <div
                style={{
                    backgroundImage: "url('/signupbg.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="flex flex-col rounded-none bg-black lg:flex-col lg:rounded-2xl"
            >
                <div className="z-40 flex w-full items-center justify-between p-4">
                    <Link href={`/`}>
                        <Image
                            src="./images/logo.svg"
                            alt="WebWunder Logo"
                            width="225"
                            height="17"
                        />
                    </Link>

                    <div className="scale-75">
                        <CustomLanguageDropdown />
                    </div>
                </div>
                {/* Left side with carousel */}

                {/* Right side with form */}
                <div
                    className={`m-auto flex flex-col lg:h-[91vh] lg:w-[40%] ${scale} items-center justify-center bg-cover bg-center px-3 py-8`}
                >
                    <div className="z-10 w-full max-w-lg space-y-10 lg:min-w-[30rem] lg:space-y-4">
                        <div
                            className={`mx-auto space-y-2 text-center lg:ml-0 ${changeLanguage === 'de' ? 'ml-8' : 'ml-0'}`}
                        >
                            <h2
                                className={`text-center font-archivo text-[45px] leading-none lg:w-full ${changeLanguage === 'de' ? 'w-3/4' : 'w-full'} font-bold text-white`}
                            >
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.welcomeBack
                                }
                            </h2>
                            <p className="text-center font-archivo text-base font-normal text-white">
                                {
                                    languageData?.loginPage?.[changeLanguage]
                                        ?.newTo
                                }{' '}
                                <Link href="/signup" className="text-[#5D59E1]">
                                    {
                                        languageData?.loginPage?.[
                                            changeLanguage
                                        ]?.signUp
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
                        </div>

                        <Socials/>

                        <div className="space-y-16 text-center text-xs text-white/70">
                            <div className="flex flex-wrap justify-center space-x-8 font-archivo text-sm font-normal text-white">
                                <a
                                    href="/privacy-policy"
                                    className="hover:text-white"
                                >
                                    {
                                        languageData?.loginPage?.[
                                            changeLanguage
                                        ]?.privacyPolicy
                                    }{' '}
                                </a>
                                <a href="/terms" className="hover:text-white">
                                    {/* Terms & Conditions */}
                                    {
                                        languageData?.loginPage?.[
                                            changeLanguage
                                        ]?.termsConditions
                                    }{' '}
                                </a>
                                <a href="/imprint" className="hover:text-white">
                                    {
                                        languageData?.loginPage?.[
                                            changeLanguage
                                        ]?.imprint
                                    }{' '}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
