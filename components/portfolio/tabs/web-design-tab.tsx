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
            links:"https://www.figma.com/proto/5KAwngx06wyLU40cF3JZ7l/Skylumina?page-id=0%3A1&node-id=1-6&node-type=canvas&viewport=364%2C206%2C0.49&t=m4z6WE11kFiTXxlM-1&scaling=scale-down&content-scaling=fixed",
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
            links:"https://www.figma.com/proto/LNbPzvLMpPImYNUNMtiwDr/Wladimir-Magic?page-id=0%3A1&node-id=3-4523&node-type=frame&viewport=562%2C1396%2C0.41&t=017EoUhvSK9WOz2Q-1&scaling=scale-down&content-scaling=fixed",
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
            links:"https://www.figma.com/proto/JDSGzuMajty0el6qnf9Kt2/Clownwowa?page-id=0%3A1&node-id=3-4523&node-type=canvas&viewport=504%2C2003%2C0.69&t=HWla5yV6XueuSQpG-1&scaling=scale-down&content-scaling=fixed",
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
            links:"https://www.figma.com/proto/c9qeS5AnXek7i4LMr8OOnM/Praxis-Kattan?page-id=0%3A1&node-id=1-42&node-type=canvas&viewport=678%2C258%2C0.31&t=ce6guX1xNAfFhrhX-1&scaling=scale-down&content-scaling=fixed",
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
            links:"https://www.figma.com/proto/HXU4vmzYG58pBHd0owgoyh/FITSYNC---Gym-Fitness-Landing-Page?page-id=0%3A1&node-id=32-2450&node-type=canvas&viewport=-1607%2C2052%2C0.9&t=Xhk2h5LLX5CAPadU-1&scaling=scale-down&content-scaling=fixed",
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
            links:"https://www.figma.com/proto/dQxQBJvP6rb9CqilV1ksuY/Fitflex---Gym-App-Landing-Page?page-id=0%3A1&node-id=17-180&node-type=canvas&viewport=-908%2C3161%2C0.9&t=KOoRNtNCPE2V3eEJ-1&scaling=scale-down&content-scaling=fixed",
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
                    links={item.links}
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
