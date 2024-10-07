'use client'
import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { languageData } from '@/langauge'
import axios from 'axios'
import LangLayout from '@/app/[locale]/langLayout'
interface ContactCardProps {
    width: string
    bgColor: string
    tag: string
    title: string
    description: string
    buttonText: string
    buttonTarget: string
    isHovered: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
}

const ContactCard: React.FC<ContactCardProps> = ({
    width,
    bgColor,
    tag,
    title,
    description,
    buttonText,
    buttonTarget,
    isHovered,
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <div
            className={`flex h-fit flex-col items-start justify-between transition-all duration-300 lg:mt-2 lg:h-80 ${
                isHovered ? 'lg:w-1/2' : width
            } ${bgColor} rounded-3xl p-8`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex flex-col gap-2">
                <div className="h-fit w-fit rounded-full border border-white bg-transparent px-2 py-1 font-archivo text-sm font-normal text-white">
                    {tag}
                </div>
                <p className="font-archivo text-[26px] font-bold leading-none text-white">
                    {title}
                </p>
                <p className="font-archivo text-sm font-normal text-white">
                    {description}
                </p>
            </div>
            <a target='_blank' href={buttonTarget}>
                <button className="flex w-fit mt-4 flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2 transition-all hover:scale-95">
                    <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                        {buttonText}
                    </p>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8">
                        <ArrowRight
                            size={18}
                            fontWeight={100}
                            className="text-[#24252A]"
                        />
                    </div>
                </button>
            </a>
        </div>
    )
}

const ContactUs = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const contactCards = [
        {
            id: 1,
            width: 'lg:w-[40%] 2xl:w-[42%] w-full',
            bgColor: 'bg-[#FB421F]',
            tag: languageData?.contactUs?.[changeLanguage]?.call,
            title: languageData?.contactUs?.[changeLanguage]?.book15MinCall,
            description:
                languageData?.contactUs?.[changeLanguage]?.callDescription,
            buttonText: languageData?.contactUs?.[changeLanguage]?.bookNow,
            buttonTarget: 'https://tidycal.com/skylumina/webwunder',
        },
        {
            id: 2,
            width: 'lg:w-1/4 2xl:w-[33%] w-full',
            bgColor: 'bg-[#25D366]',
            tag: languageData?.contactUs?.[changeLanguage]?.chat,
            title: languageData?.contactUs?.[changeLanguage]?.preferChatFirst,
            description:
                languageData?.contactUs?.[changeLanguage]?.chatDescription,
            buttonText:
                languageData?.contactUs?.[changeLanguage]?.chatOnWhatsApp,
            buttonTarget: 'https://wa.me/c/4915114039455',
        },
        {
            id: 3,
            width: 'lg:w-[22%] 2xl:w-[27%] w-full',
            bgColor: 'bg-[#4148FA]',
            tag: languageData?.contactUs?.[changeLanguage]?.email,
            title: languageData?.contactUs?.[changeLanguage]?.getInTouch,
            description:
                languageData?.contactUs?.[changeLanguage]?.emailDescription,
            buttonText: languageData?.contactUs?.[changeLanguage]?.sendMessage,
            buttonTarget: 'mailto:info@webwunder.de',
        },
    ]
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    return (
        <div id='contact-us' className="flex flex-col items-center gap-4 bg-black 2xl:pt-3">
            <Badge
                data-aos="fade-up"
                className="mt-10 bg-[#5D59E1] font-archivo text-sm font-normal"
            >
                {languageData?.contactUs?.[changeLanguage]?.cta}
            </Badge>
            <p className="font-archivo text-[25px] font-bold text-white lg:text-[45px]">
                {languageData?.contactUs?.[changeLanguage]?.title}
            </p>
            <div className="mx-auto flex w-full flex-col items-center justify-center gap-5 px-4 lg:w-[89%] lg:flex-row lg:gap-3 lg:px-0 xl:max-w-[1230px] 2xl:max-w-[1450px] 2xl:gap-6">
                {contactCards.map((card) => (
                    <ContactCard
                        key={card.id}
                        bgColor={card.bgColor}
                        tag={card.tag}
                        title={card.title}
                        description={card.description}
                        width={card.width}
                        buttonTarget={card.buttonTarget}
                        buttonText={card.buttonText}
                        isHovered={hoveredCard === card.id}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ContactUs
