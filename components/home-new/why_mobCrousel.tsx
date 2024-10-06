'use client'

import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Badge } from '../ui/badge'
import { languageData } from '@/langauge'
import axios from 'axios'

interface TestimonialProps {
    image: string
    title: string
    description: string
}

const Testimonial: React.FC<TestimonialProps> = ({
    image,
    title,
    description,
}) => {
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
        <div className="keen-slider__slide">
            <div className="h-[370px] w-[calc(100vw-40px)] overflow-hidden rounded-xl border-2 bg-white md:w-full">
                <Image
                    className="h-56"
                    src={image}
                    alt={title}
                    width={1000}
                    height={1000}
                />
                <div className="p-2">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

const Why_mobCrousel: React.FC = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const [currentSlide, setCurrentSlide] = useState(0) // Track the active slide
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,

            slides: {
                perView: 0.5,
                spacing: -150,
            },
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel) // Update active slide index
            },
        },
        [],
    )

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

    return (
        <section
            style={{
                backgroundImage:
                    'url("/images/home/why-webwunder/why-webwunder-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="min-h-[500px] py-10 text-black lg:pl-32"
        >
            <div className="flex flex-col items-center gap-4 text-center">
                <Badge
                    data-aos="fade-up"
                    className="w-fit bg-[#5D59E1] font-archivo text-sm font-normal text-white"
                >
                    {
                        languageData?.additionalSection?.[changeLanguage]
                            ?.designedToDominate
                    }
                </Badge>
                <div className="flex flex-col items-center leading-none">
                    {/* Split text into individual words */}
                    <p className="font-archivo text-[32px] font-bold text-black md:text-[45px]">
                        {
                            languageData?.additionalSection?.[changeLanguage]
                                ?.whyWebWunder
                        }{' '}
                        <br />
                        {
                            languageData?.additionalSection?.[changeLanguage]
                                ?.weMakeItClear
                        }
                    </p>
                </div>
                <p className="font-archivo text-sm font-normal text-black/50 md:text-base">
                    {
                        languageData?.additionalSection?.[changeLanguage]
                            ?.businessDeservesMore
                    }
                </p>

                {/* Buttons */}
                <div className="mb-7 mt-2 lg:scale-100 scale-90 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">
                    <Link href="#purchase-plans">
                        {' '}
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
                                className={`flex ${changeLanguage === 'de' ? 'h-10 w-10' : 'h-8 w-8'} items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8`}
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
            </div>

            <div className="mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-1">
                    <div className="flex flex-col items-center justify-center overflow-hidden lg:col-span-1">
                        <div ref={sliderRef} className="keen-slider">
                            {mainItems.map((testimonial, index) => (
                                <Testimonial key={index} {...testimonial} />
                            ))}
                        </div>
                        <div className="mt-8 flex h-4 lg:w-96 w-72 justify-between">
                            {/* Pagination discs */}
                            {[...Array(mainItems.length)].map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 lg:w-16 w-12 rounded-full ${idx === currentSlide ? 'bg-[#5D59E1]' : 'bg-zinc-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why_mobCrousel
