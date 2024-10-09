'use client'
import React, { useEffect, useState } from 'react'
import ContentCard from '../content-card'
import { languageData } from '@/langauge'
import axios from 'axios'

const WebDesignTab = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const tabItems = [
        {
            width: 'lg:w-[35rem] xl:w-[40rem] w-full',
            img: '/images/portfolio/leapx.png',
            bgColor: '#6366f1',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[0] || 'Web Design',
                    tagColor: 'bg-[#5D59E1]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[1] || 'Branding',
                    tagColor: 'bg-[#FF1EF6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[2] || 'Graphic Design',
                    tagColor: 'bg-[#FFDC26]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[3] || 'Web Development',
                    tagColor: 'bg-[#27DAB7]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[4] || 'SEO',
                    tagColor: 'bg-[#FF9E0C]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[5] || 'Social Media',
                    tagColor: 'bg-[#FB421F]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[0]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[30rem] xl:w-[35rem] w-full',
            img: '/images/portfolio/i2.svg',
            bgColor: '#00E4FF',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[0] || 'Web Design',
                    tagColor: 'bg-[#5D59E1]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[1] || 'Branding',
                    tagColor: 'bg-[#FF1EF6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[2] || 'Graphic Design',
                    tagColor: 'bg-[#FFDC26]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[3] || 'Web Development',
                    tagColor: 'bg-[#27DAB7]',
                },
            ],

            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[1]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[35rem] xl:w-[40rem] w-full',
            img: '/images/portfolio/i3.svg',
            bgColor: '#ff6606',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[0] || 'Web Design',
                    tagColor: 'bg-[#5D59E1]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[1] || 'Branding',
                    tagColor: 'bg-[#FF1EF6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[2] || 'Graphic Design',
                    tagColor: 'bg-[#FFDC26]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[3] || 'Web Development',
                    tagColor: 'bg-[#27DAB7]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[4] || 'SEO',
                    tagColor: 'bg-[#FF9E0C]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[5] || 'Social Media',
                    tagColor: 'bg-[#FB421F]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[2]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[30rem] xl:w-[35rem] w-full',
            img: '/images/portfolio/praxiskattan.png',
            bgColor: '#04CA76',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[0] || 'Web Design',
                    tagColor: 'bg-[#5D59E1]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[1] || 'Branding',
                    tagColor: 'bg-[#FF1EF6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[2] || 'Graphic Design',
                    tagColor: 'bg-[#FFDC26]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[3] || 'Web Development',
                    tagColor: 'bg-[#27DAB7]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[3]?.title,
            project: '/projects/praxiskattan',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[35rem] xl:w-[40rem] w-full',
            img: '/images/portfolio/fitsync.png',
            bgColor: '#D0F651',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[0] || 'Web Design',
                    tagColor: 'bg-[#5D59E1]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[1] || 'Branding',
                    tagColor: 'bg-[#FF1EF6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[2] || 'Graphic Design',
                    tagColor: 'bg-[#FFDC26]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[3] || 'Web Development',
                    tagColor: 'bg-[#27DAB7]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[4]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
        {
            width: 'lg:w-[30rem] xl:w-[35rem] w-full',
            img: '/images/portfolio/fitflex.png',
            bgColor: '#1D59F4',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[0] || 'Web Design',
                    tagColor: 'bg-[#5D59E1]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[1] || 'Branding',
                    tagColor: 'bg-[#FF1EF6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[2] || 'Graphic Design',
                    tagColor: 'bg-[#FFDC26]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[2]
                            ?.projects[0]?.tags[3] || 'Web Development',
                    tagColor: 'bg-[#27DAB7]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[0]
                ?.projects[5]?.title,
            project: '/projects/praxiskattan',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center bg-no-repeat',
        },
    ]
    return (
        <div className="flex scale-100 flex-wrap items-center justify-center lg:gap-6 lg:scale-[85%] xl:max-w-[78rem] 2xl:scale-100">
            {tabItems.map((item, index) => (
                <ContentCard
                    key={index}
                    width={item.width}
                    img={item.img}
                    bgColor={item.bgColor}
                    tags={item.tags}
                    title={item.title}
                    project={item.project}
                    bgGradient={item.bgGradient}
                    bgProps={item.bgProps}
                    isBtnVisible={true}
                    isGradient={true}
                />
            ))}
        </div>
    )
}

export default WebDesignTab
