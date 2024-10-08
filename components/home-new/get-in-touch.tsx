'use client'
import React, { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { languageData } from '@/langauge'
import Link from 'next/link'
const GetInTouch = () => {
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
        <div className="relative h-[400px] bg-black">
            <div
                className="absolute inset-0 scale-150"
                style={{
                    backgroundImage: "url('/images/bg-grad-review.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                <Badge
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="mb-3 bg-[#5D59E1] font-archivo text-sm font-normal"
                >
                    {languageData?.faqPage?.[changeLanguage]?.contactCta}
                </Badge>
                <h2 className="font-archivo text-[20px] font-bold leading-none text-white lg:text-[45px]">
                    {/* Leave the Competition Behind! */}
                    {languageData?.faqPage?.[changeLanguage]?.contactTitle}
                </h2>
                <p className="max-w-xl font-archivo text-xs font-normal text-gray-400 md:text-[16px] lg:text-base">
                    {
                        languageData?.faqPage?.[changeLanguage]
                            ?.contactDescription
                    }
                </p>
                <button className="flex w-fit flex-row items-center justify-between gap-6 rounded-full border bg-[#ffffff] px-2 py-1 transition-all hover:scale-95 md:p-2">
                    <Link
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
            </div>
        </div>
    )
}

export default GetInTouch
