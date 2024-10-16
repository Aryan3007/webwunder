'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import WhyWebWunder from '@/components/home-new/why-webwunder'
import AllInOne from '@/components/home-new/all-in-one'
import JoinUs from '@/components/home-new/join-us'
import StayOnTop from '@/components/home-new/stay-on-top'
import PurchasePlans from '@/components/home-new/purchase-plans'
import ContactUs from '@/components/home-new/contact-us'
import OurPortfolio from '@/components/home-new/our-portfolio'
import Reviews from '@/components/home-new/reviews'
import FAQs from '@/components/home-new/faqs'
import GetInTouch from '@/components/home-new/get-in-touch'
import Footer from '@/components/layout/home-template-new/footer'
import Why_mobCrousel from '@/components/home-new/why_mobCrousel'
import LangLayout from '../langLayout'
import BrandsCarousel from '@/components/home-new/brands-carousel'
import HeroSection from '@/components/home-new/Home_new'
import Image from 'next/image'
import { languageData } from '@/langauge'
import Link from 'next/link'

const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false)
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')

    useEffect(() => {
        const lastPopupTime = localStorage.getItem('popupTimestamp')
        const now = new Date().getTime()

        if (!lastPopupTime || now - parseInt(lastPopupTime) >= TWENTY_FOUR_HOURS) {
            // Show popup if it hasn't been shown in the last 24 hours
            setIsVisible(true)
            localStorage.setItem('popupTimestamp', now.toString())
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) setChangeLanguage(storedLang)
        }
    }, [])

    return (
        <LangLayout>
            <div className="overflow-hidden">
                {isVisible && (
                    <div className="fixed inset-0 p-2 lg:p-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]">
                        <div className="bg-white overflow-hidden rounded-2xl shadow-lg max-w-4xl 3xl:max-w-6xl w-full relative">
                            <button
                                onClick={() => setIsVisible(false)}
                                className="absolute z-[50] top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                <X className="h-6 w-6" />
                            </button>
                            <div className="flex justify-between flex-col lg:flex-row">
                                <div className="relative lg:w-2/3 lg:h-96 h-48 overflow-hidden w-full">
                                    <Image
                                        src="/images/popupimg.webp"
                                        alt="Cloud Left"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute inset-0"
                                    />
                                </div>
                                <div className="lg:w-3/4 w-full flex px-4 flex-col justify-center lg:px-8">
                                    <h2 className="lg:text-4xl text-lg font-bold text-left mb-2 pt-3 lg:pt-6">
                                        {languageData?.popup?.[changeLanguage]?.Heading}
                                    </h2>
                                    <p className="text-gray-600 text-xs lg:text-base mb-2">
                                        {languageData?.popup?.[changeLanguage]?.text}
                                    </p>
                                    <div className="flex space-x-4">
                                        <div className="my-4 flex items-center justify-center gap-2 lg:my-2 lg:gap-3">
                                            <Link target="_blank" href="https://wa.me/c/4915114039455">
                                                <button
                                                    className={`flex ${
                                                        changeLanguage === 'de' ? 'h-14' : 'h-12'
                                                    } w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2 transition-all hover:scale-95`}
                                                >
                                                    <p className="ml-4 font-archivo text-xs font-medium text-white lg:text-[13px]">
                                                        {languageData?.contactUs?.[changeLanguage]?.chatOnWhatsApp}
                                                    </p>
                                                    <div
                                                        className={`flex ${
                                                            changeLanguage === 'de' ? 'h-8 w-10' : 'h-8 w-8'
                                                        } items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8`}
                                                    >
                                                        <ArrowRight size={18} fontWeight={100} className="text-[#24252A]" />
                                                    </div>
                                                </button>
                                            </Link>
                                            <Link target="_blank" href="mailto:info@webwunder.de">
                                                <button
                                                    className={`flex ${
                                                        changeLanguage === 'de' ? 'h-14' : 'h-12'
                                                    } w-fit flex-row items-center justify-between gap-6 rounded-full border bg-[#ffffff] p-2 transition-all hover:scale-95`}
                                                >
                                                    <p className="ml-4 font-inter text-xs font-medium text-[#24252A] lg:text-[13px]">
                                                        {languageData?.contactUs?.[changeLanguage]?.sendMessage}
                                                    </p>
                                                    <div className="flex h-6 w-6 items-center justify-center rounded-full lg:h-8 lg:w-8">
                                                        <ArrowRight size={18} fontWeight={100} className="text-[#24252A]" />
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <HeroSection />
                <BrandsCarousel />

                <div className="hidden lg:flex">
                    <WhyWebWunder />
                </div>
                <div className="flex lg:hidden">
                    <Why_mobCrousel />
                </div>
                <AllInOne />
                <JoinUs />
                <StayOnTop />
                <PurchasePlans />
                <ContactUs />
                <OurPortfolio />
                <Reviews />
                <FAQs />
                <GetInTouch />
                <div className="bg-black">
                    <Footer />
                </div>
            </div>
        </LangLayout>
    )
}
