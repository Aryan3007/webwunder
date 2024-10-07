'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { languageData } from '@/langauge'
import axios from 'axios'
import Link from 'next/link'

const galleryImages = [
    '/images/home/our-portfolio/portfolio-images-1.webp',
    '/images/home/our-portfolio/portfolio-images-2.webp',
    '/images/home/our-portfolio/portfolio-images-3.webp',
    '/images/home/our-portfolio/portfolio-images-4.webp',
    '/images/home/our-portfolio/portfolio-images-5.webp',
    '/images/home/our-portfolio/portfolio-images-6.webp',
    
]

const OurPortfolio = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value
    const [isVeryLargeScreen, setIsVeryLargeScreen] = useState(false)

    useEffect(() => {
        // Function to check screen size
        const handleResize = () => {
            setIsVeryLargeScreen(window.innerWidth >= 1536) // Tailwind's 2xl breakpoint is 1536px
        }

        // Check screen size on mount
        handleResize()

        // Add event listener to check on resize
        window.addEventListener('resize', handleResize)

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const tags = [
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[0],
            bgColor: 'bg-[#5D59E1]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[1],
            bgColor: 'bg-[#27DAB7]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[2],
            bgColor: 'bg-[#FB421F]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[3],
            bgColor: 'bg-[#FFDC26]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[4],
            bgColor: 'bg-[#FF1EF6]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[5],
            bgColor: 'bg-[#9DFF50]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[6],
            bgColor: 'bg-[#FF9E0C]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[7],
            bgColor: 'bg-[#FF0000]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[8],
            bgColor: 'bg-[#2245FF]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[9],
            bgColor: 'bg-[#00C8F4]',
        },
        {
            tagName: languageData?.userPortfolio?.[changeLanguage]?.tags[10],
            bgColor: 'bg-[#4F00F8]',
        },
    ]

    const [visibleImages, setVisibleImages] = useState<boolean[]>(
        Array(galleryImages.length).fill(false),
    )

    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = Number(entry.target.getAttribute('data-index'))
                if (entry.isIntersecting) {
                    // Mark this image as visible
                    setVisibleImages((prev) => {
                        const newVisibleImages = [...prev]
                        newVisibleImages[index] = true
                        return newVisibleImages
                    })
                } else {
                    // Mark this image as not visible
                    setVisibleImages((prev) => {
                        const newVisibleImages = [...prev]
                        newVisibleImages[index] = false
                        return newVisibleImages
                    })
                }
            })
        })

        // Observe each image
        const imageElements = document.querySelectorAll('.gallery-image')
        imageElements.forEach((image) => observer.current?.observe(image))

        return () => {
            if (observer.current) {
                imageElements.forEach((image) =>
                    observer.current?.unobserve(image),
                )
            }
        }
    }, [])

    return (
        <div id='our-portfolio' className="-mt-4 flex flex-col items-center gap-4 bg-black px-4 lg:mt-auto lg:px-0">
            <Badge
                data-aos="fade-up"
                className="mt-20 bg-[#5D59E1] font-archivo text-sm font-normal"
            >
                {/* Our Portfolio */}
                {languageData?.userPortfolio?.[changeLanguage]?.title}
            </Badge>
            <p className="w-2/3 text-center font-archivo text-[25px] font-bold leading-none text-white lg:w-full lg:text-[45px]">
                {/* Websites, Logos, Creatives & More */}
                {languageData?.userPortfolio?.[changeLanguage]?.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:w-full">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className={`${tag.bgColor} rounded-full px-2 py-1 font-inter text-sm font-semibold text-[#020202]`}
                    >
                        {tag.tagName}
                    </div>
                ))}
            </div>
            <div className="mt-8 2xl:mt-12 grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 2xl:w-[1450px] 2xl:gap-y-9">
                {galleryImages.map((image, index) => (
                    <motion.div
                        key={index}
                        data-index={index} // Set a data attribute for indexing
                        className="gallery-image"
                        initial={{ opacity: 0, scale: 0.5 }} // Initial state
                        animate={
                            visibleImages[index]
                                ? {
                                      opacity: 1,
                                      scale: 1,
                                      transition: { delay: index * 0.2 },
                                  }
                                : { opacity: 0, scale: 0.5 }
                        } // Animate based on visibility with stagger
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Image
                            src={image}
                            alt="Our Portfolio"
                            width={500}
                            height={300}
                            // fill
                            priority={false}
                            className="rounded-3xl"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-col items-center gap-2 px-1 lg:px-8 lg:max-w-6xl lg:items-start xl:max-w-6xl 2xl:max-w-[1500px] lg:mt-6 2xl:mt-9">
                <p className="text-center font-archivo text-lg font-bold text-white lg:text-start lg:text-[26px]">
                    {/* Built for Entrepreneurs Like You */}
                    {languageData?.userPortfolio?.[changeLanguage]?.description}
                </p>
                <div className="mx-auto lg:flex lg:justify-between">
                    <p className="w-full text-center font-archivo text-sm font-normal text-white/50 lg:w-3/4 lg:text-start lg:text-base">
                        {languageData?.userPortfolio?.[changeLanguage]?.detail}
                    </p>
                    <div className="mt-5 lg:mt-0 flex items-start justify-center">
                        <button className="flex w-fit flex-row items-center justify-between gap-6 rounded-full border bg-[#ffffff] p-2 transition-all hover:scale-95">
                            <Link
                                href="/portfolio"
                                className="flex flex-row items-center justify-between gap-4"
                            >
                                <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
                                    {
                                        languageData?.userPortfolio?.[
                                            changeLanguage
                                        ]?.seeMore
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
            </div>
        </div>
    )
}

export default OurPortfolio
