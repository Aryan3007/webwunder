"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from '../layout/home-template-new/header'
import { languageData } from '@/langauge'
import BrandsCarousel from './brands-carousel'

const Home_new = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang)
            }
        }
    }, [])

    return (
        <>
            <div className="h-screen lg:bg-white lg:p-5">
                <div className="relative h-screen overflow-hidden bg-[url('/images/home/home-landing-img.png')] bg-cover bg-center lg:rounded-2xl">
                    <Parallax pages={1}>
                        {/* Header */}
                        <ParallaxLayer offset={0} speed={0.1}>
                            <Header />
                        </ParallaxLayer>

                        {/* Text Content */}
                        <ParallaxLayer offset={0.2} speed={0.5}>
                            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 pt-4">
                                <Badge className="w-fit mt-8 rounded-full bg-[#5D59E1] px-5 py-1 font-archivo text-xs font-light text-white sm:text-sm">
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
                                <p className="text-center font-archivo text-sm mb-12 font-bold text-white lg:text-lg">
                                    {languageData?.heroSection?.[changeLanguage]?.description}
                                    <br />
                                    <span className='font-light text-[18px] text-white'>
                                        Proven to Boost Sales and Cut Costs.
                                    </span>
                                </p>
                            </div>
                        </ParallaxLayer>

                        {/* Cloud Left */}
                        <ParallaxLayer offset={0.4} speed={0.3}>
                            <Image
                                src="/images/newhome/cloudleft.svg"
                                alt="Cloud Left"
                                className='absolute bottom-40 z-10 -left-24'
                                width={5000}
                                height={5000}
                            />
                        </ParallaxLayer>

                        {/* Cloud Right */}
                        <ParallaxLayer offset={0.4} speed={0.4}>
                            <Image
                                src="/images/newhome/cloud_right.svg"
                                alt="Cloud Right"
                                className='absolute bottom-56 z-30 w-2/3 -right-16'
                                width={5000}
                                height={5000}
                            />
                        </ParallaxLayer>

                        {/* Rock Phone Left */}
                        <ParallaxLayer offset={0.6} speed={0.6}>
                            <Image
                                src="/images/newhome/rock_phone_left.svg"
                                alt="Rock Phone Left"
                                className='absolute z-40 bottom-36 w-3/5 left-0'
                                width={5000}
                                height={5000}
                            />
                        </ParallaxLayer>

                        {/* Right Phone */}
                        <ParallaxLayer offset={0.6} speed={0.7}>
                            <Image
                                src="/images/newhome/right_phone.svg"
                                alt="Right Phone"
                                className='absolute z-40 bottom-24 w-2/3 right-0'
                                width={5000}
                                height={5000}
                            />
                        </ParallaxLayer>

                        {/* Hero Image */}
                        <ParallaxLayer offset={0.8} speed={0.8}>
                            <Image
                                src="/images/newhome/heroimg.svg"
                                alt="Hero"
                                className='relative bottom-0 z-50 w-screen'
                                width={100}
                                height={100}
                            />
                        </ParallaxLayer>
                    </Parallax>
                </div>
            </div>
            <BrandsCarousel />
        </>
    )
}

export default Home_new