import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ArrowRight } from 'lucide-react'
import { Badge } from '../ui/badge'

import Image from 'next/image'
import Link from 'next/link'
import { languageData } from '@/langauge'
import axios from 'axios'
interface TestimonialProps {
    icon: string
    content: string
    title: string
}

const Testimonial: React.FC<TestimonialProps> = ({ icon, content, title }) => (
    <div className="keen-slider__slide">
        <div className="p-2">
            <div className="flex h-[280px] lg:h-[245px] min-h-56 w-fit flex-col justify-between overflow-hidden rounded-3xl bg-[#191919] p-4 lg:px-5">
                <div className="flex flex-col gap-4 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#29292F]">
                        <Image src={icon} alt={title} width={50} height={50} />
                    </div>
                    <h3 className="mt-2 text-xl font-bold leading-none text-white">
                        {title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{content}</p>
                </div>
            </div>
        </div>
    </div>
)
const JoinUsSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(1) // Default to 1 slide

    const updateSlidesPerView = () => {
        if (window.innerWidth < 640) {
            // Tailwind's 'sm' breakpoint
            setSlidesPerView(1) // 1 slide for small screens
        } else if (window.innerWidth < 1024) {
            // Tailwind's 'lg' breakpoint
            setSlidesPerView(2) // 2 slides for medium/large screens
        } else if (window.innerWidth < 1440) {
            // Tailwind's 'xl' breakpoint
            setSlidesPerView(3) // 3 slides for large screens
        } else {
            setSlidesPerView(3) // 4 slides for extra-large screens and above
        }
    }

    useEffect(() => {
        updateSlidesPerView()
        window.addEventListener('resize', updateSlidesPerView)
        return () => {
            window.removeEventListener('resize', updateSlidesPerView)
        }
    }, [])

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            mode: 'free-snap',
            slides: {
                perView: slidesPerView,
            },
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel)
            },
        },
        [],
    )

    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const items = [
        {
            id: 1,
            icon: '/images/home/join-us/i1.svg',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[0].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[0]
                    .description,
        },
        {
            id: 2,
            icon: '/images/home/join-us/i2.svg',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[1].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[1]
                    .description,
        },
        {
            id: 3,
            icon: '/images/home/join-us/i3.svg',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[2].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[2]
                    .description,
        },
        {
            id: 4,
            icon: '/images/home/join-us/i4.svg',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[3].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[3]
                    .description,
        },
        {
            id: 5,
            icon: '/images/home/join-us/i4.svg',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[4].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[4]
                    .description,
        },
        {
            id: 6,
            icon: '/images/home/join-us/i6.svg',
            title: languageData?.joinUsSection?.[changeLanguage]?.tabs[5].title,
            content:
                languageData?.joinUsSection?.[changeLanguage]?.tabs[5]
                    .description,
        },
    ]

    return (
        <section className="bg-black py-12 text-white lg:pl-32">
            <div className="mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 items-center lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-center lg:col-span-1 lg:items-start lg:pl-20">

                    <Badge className="w-fit my-2 bg-[#5D59E1] font-archivo text-sm font-normal">
                    {
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.cta
                            }
                    </Badge>
                        <h2 className="mb-4 text-center text-4xl font-bold lg:text-start">
                            {
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.title
                            }
                            <br />
                            {
                                languageData?.joinUsSection?.[changeLanguage]
                                    ?.description
                            }
                        </h2>
                        <div className="my-1 flex lg:scale-100 scale-90 items-start justify-start gap-2 lg:my-2 lg:gap-3">
                            <Link href="#purchase-plans">
                                <button
                                    className={`flex ${changeLanguage === 'de' ? 'h-14' : 'h-12'} w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2 transition-all hover:scale-95`}
                                >
                                    <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                        {
                                            languageData?.joinUsSection?.[
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
                                    <div
                                        className={`flex ${changeLanguage === 'de' ? 'h-8 w-10' : 'h-6 w-6'} items-center justify-center rounded-full bg-[#fefffe] lg:h-8 lg:w-8`}
                                    >
                                        <ArrowRight
                                            size={18}
                                            fontWeight={100}
                                            className="text-[#24252A]"
                                        />
                                    </div>
                                </Link>
                            </button>
                        </div>
                        <div className="mt-6 hidden space-x-4 self-start lg:flex">
                            <button
                                className="rounded-full bg-[#8080f2] p-3"
                                onClick={() => instanceRef.current?.prev()}
                            >
                                <ArrowRight className="rotate-180" size={24} />
                            </button>
                            <button
                                className="rounded-full bg-[#8080f2] p-3"
                                onClick={() => instanceRef.current?.next()}
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center overflow-hidden md:col-span-1 lg:col-span-2">
                        <div
                            ref={sliderRef}
                            className="keen-slider cursor-grab"
                        >
                            {[...items].map((testimonial) => (
                                <Testimonial
                                    key={testimonial.id}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                        <div className="mt-8 flex h-4 lg:w-96 w-72 justify-between">
                            {/* Pagination discs */}
                            {[...Array(items.length)].map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`mx-2 h-1 lg:w-16 w-12 rounded-full ${idx === currentSlide ? 'bg-[#5D59E1]' : 'bg-zinc-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center space-x-4 lg:hidden">
                        <button
                            className="rounded-full bg-[#8080f2] p-3"
                            onClick={() => instanceRef.current?.prev()}
                        >
                            <ArrowRight className="rotate-180" size={24} />
                        </button>
                        <button
                            className="rounded-full bg-[#8080f2] p-3"
                            onClick={() => instanceRef.current?.next()}
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinUsSection
