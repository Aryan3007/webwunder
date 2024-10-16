'use client'
import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { InfiniteMovingCards } from '../ui/infinite-moving-review-cards'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { languageData } from '@/langauge'
import axios from 'axios'
import Link from 'next/link'

const Reviews = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const testimonials = [
        {
            content:
                languageData?.ourClient?.[changeLanguage]?.testimonials[0].text,
            writer: languageData?.ourClient?.[changeLanguage]?.testimonials[0]
                .name,
            rating: 5,
        },
        {
            content:
                languageData?.ourClient?.[changeLanguage]?.testimonials[1].text,
            writer: languageData?.ourClient?.[changeLanguage]?.testimonials[1]
                .name,
            rating: 5,
        },
        {
            content:
                languageData?.ourClient?.[changeLanguage]?.testimonials[2].text,
            writer: languageData?.ourClient?.[changeLanguage]?.testimonials[2]
                .name,
            rating: 5,
        },
    ]
    return (
        <div className="flex flex-col items-center gap-4 bg-black px-4 lg:px-0">
            <Badge
               
                className="mt-10 bg-[#5D59E1] font-archivo text-sm font-normal lg:mt-20"
            >
                {languageData?.ourClient?.[changeLanguage]?.reviewsTitle}
            </Badge>
            <p className="font-archivo text-[25px] font-bold text-white lg:text-[45px]">
                {languageData?.ourClient?.[changeLanguage]?.whatClientsSay}{' '}
            </p>
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <InfiniteMovingCards items={testimonials} direction="left" speed="normal" pauseOnHover={true} />
            </div>{' '}
            {/* <div className="relative hidden -my-28 scale-50 flex-col items-center justify-center overflow-hidden rounded-md antialiased lg:flex">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
            </div> */}
            <div className="flex flex-col  mt-12  items-center gap-2 lg:items-center lg:justify-between lg:px-10 2xl:w-[1450px] 2xl:items-center 2xl:px-0">
                <p className="text-center font-archivo text-lg font-bold text-white lg:self-start lg:text-[26px]">
                    {languageData?.ourClient?.[changeLanguage]?.reviewPrompt}
                </p>
                {/* Wrap the title and description in a flex column container */}
                <div className="flex flex-col lg:w-full lg:flex-row lg:items-start lg:justify-between">
                    <p className="self-start text-center font-archivo text-sm font-normal text-white/50 lg:mr-8 lg:w-3/5 lg:text-start lg:text-base">
                        {
                            languageData?.ourClient?.[changeLanguage]
                                ?.reviewDescription
                        }
                    </p>
                    <div className="my-5 flex items-center justify-center lg:my-0">
                        <Link target='_blank' href="https://g.page/r/CUIwk9NM4ejJEBM/review">
                            <Button
                                size={'base'}
                                className="flex items-center justify-between gap-3 bg-[#FFDC26] transition-all hover:scale-95"
                            >
                                <p className="font-archivo ml-2 text-[15px] font-medium text-[#24252A]">
                                    {
                                        languageData?.ourClient?.[
                                            changeLanguage
                                        ]?.writeReview
                                    }
                                </p>
                                <ArrowRight
                                    size={15}
                                    className="text-[#24252A]"
                                />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
