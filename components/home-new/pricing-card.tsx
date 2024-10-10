import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { gsap } from 'gsap'

import { languageData } from '@/langauge'
import axios from 'axios'
import Link from 'next/link'

export interface PricingCardProps {
    icon: string
    color: string
    iconBg: string
    title: string
    id:string
    description: string
    price: number
    setupFee: string
    signMeUp: string
    features: string[]
    ctaText?: string
    onSignUp?: () => void
    isCenter?: boolean
    isBooked?: boolean
    onCardClick?: () => void
}

const PricingCard: React.FC<PricingCardProps> = ({
    icon,
    iconBg,
    color,
    id,
    title,
    description,
    price,
    setupFee,
    features,
    signMeUp,
    ctaText,
    onSignUp,
    isBooked,
    isCenter = false,
    onCardClick,
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
        <Card id={id}
            className={` flex h-[700px] cursor-grab flex-col justify-between rounded-[32px] border-2 border-white bg-[#191919] text-white transition-all duration-300 lg:w-[500px] lg:scale-[87%] lg:border lg:border-[#D9D9D9] xl:w-[700px] ${isCenter
                ? ` ${changeLanguage === 'de' ? 'lg:h-[870px]' : 'lg:h-[800px]'} lg:-translate-y-10 lg:scale-[200%] lg:border-[5px] lg:border-white xl:scale-90`
                : `lg:h-[880px] ${changeLanguage === 'de' ? 'xl:h-[820px]' : 'xl:h-[720px]'}`
                }`}
            onClick={onCardClick}
        >
            <div className="flex flex-col">
                <CardHeader className="flex p-6 pb-0 flex-row justify-between">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col items-centers justify-between h-full">
                            <div
                                className={`flex h-12 justify-center items-center w-12 rounded-full p-2 ${iconBg}`}
                            >
                                <Image
                                    src={icon}
                                    alt={title}
                                    width={25}
                                    height={25}
                                />
                            </div>

                            <div className='flex flex-col'>

                            <p className="font-inter text-base font-semibold text-white lg:text-2xl">
                                {title}
                            </p>
                            <div style={{ color }} className=" font-inter text-base font-semibold lg:text-xl">
                                €{setupFee}
                            </div>
                            </div>

                        </div>

                    </div>

                    <div className="leading-none flex flex-col items-end justify-between">
                        <div className='flex flex-col items-end'>

                        <div className="font-inter text-[35px] font-semibold text-white lg:text-[55px]">
                            €{price}

                        </div>
                        <span style={{ color }} className="font-inter text-base font-normal text-white">
                           
                            {
                                languageData?.paymentsCard?.[changeLanguage]
                                ?.priceTag
                            }
                        </span>
                                </div>

                        {ctaText && (
                            <Badge className="rounded-full bg-[#5D59E1] my-2 font-archivo text-sm font-normal text-white">
                                {ctaText}
                            </Badge>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="flex-grow pt-4">

                    <p className=" font-inter py-2 text-sm font-normal text-white/50 lg:text-base">
                        {description}
                    </p>
                    <div className="space-y-2">
                        <p className="font-inter text-sm font-bold text-white lg:text-base">
                            {/* What You Get: */}
                            {
                                languageData?.paymentsCard?.[changeLanguage]
                                    ?.whatYouGet
                            }
                        </p>
                        <div className={` ${isCenter ? 'flex flex-col' : ''}`}>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2 py-1 lg:py-0"
                                >
                                    <div className="flex h-fit w-fit items-center justify-center rounded-full bg-[#46B277] p-1">
                                        <Check
                                            size={12}
                                            className="font-extrabold text-black"
                                        />
                                    </div>
                                    <span className="py-1 font-inter text-[12px] font-light leading-none text-white/50 lg:my-0 lg:text-base">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </div>
            <CardFooter className="flex flex-col gap-2 space-y-2 text-white">
                {isBooked ? (
                    <button
                       className="w-full rounded-full bg-[#c2c2c2] py-4 font-inter text-base text-black font-bold transition-all duration-200 hover:scale-95"
                        onClick={onSignUp}
                    >
                        <Link href={'mailto:info@webwunder.de'} target="_blank">
                            {/* Sign Me Up! */}
                            
                            <div className="text-sm lg:text-base">
                                {
                                    languageData?.paymentsCard?.[changeLanguage]
                                        ?.booked2
                                }
                            </div>
                        </Link>
                    </button>
                ) : (
                    <button
                        className="w-full rounded-full bg-[#5D59E1] py-4 font-inter text-base font-semibold text-white transition-all duration-200 hover:scale-95"
                        onClick={onSignUp}
                    >
                        {/* Sign Me Up! */}
                        {languageData?.paymentsCard?.[changeLanguage]?.signMeUp}
                    </button>
                )}
            </CardFooter>
        </Card>
    )
}

export default PricingCard
