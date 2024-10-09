import React, { useEffect, useState } from 'react'
import ContentCard from '../content-card'
import { languageData } from '@/langauge'
import axios from 'axios'

const BrandingTab = () => {
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
            img: '/images/portfolio/branding/monina.png',
            links:"https://www.figma.com/proto/RYJntVicd98O2KhtCVqz7c/Monina?page-id=0%3A1&node-id=1-351&node-type=canvas&viewport=718%2C527%2C0.11&t=1wx3GJinbv4mPxC8-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A351",
            bgColor: '#E92A79',
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[0],
                    tagColor: 'bg-[#FF1EF6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[1],
                    tagColor: 'bg-[#FFDC26]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[2],
                    tagColor: 'bg-[#FF0000]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[3],
                    tagColor: 'bg-[#2245FF]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                ?.projects[0]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-top bg-no-repeat',
        },
        {
            width: 'lg:w-[30rem] xl:w-[35rem] w-full',
            img: '/images/portfolio/branding/skylumina.png',
            bgColor: '#5B57DB',
            links:"https://www.figma.com/proto/Kn42TIHrdWiLrxHbtEMXl4/Skylumina-Branding?page-id=0%3A1&node-id=1-3&node-type=frame&viewport=690%2C902%2C0.31&t=tAZ42HdM5cxPr4a8-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A255",
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[0],
                    tagColor: 'bg-[#FF1EF6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[1],
                    tagColor: 'bg-[#FFDC26]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[2],
                    tagColor: 'bg-[#FF0000]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[3],
                    tagColor: 'bg-[#2245FF]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                ?.projects[1]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-top bg-no-repeat',
        },
        {
            width: 'lg:w-[30rem] xl:w-[35rem] w-full',
            img: '/images/portfolio/branding/t-vent.png',
            bgColor: '#4359F0',
            links:"https://www.figma.com/proto/j6WzkYJUmxO6ZJL7p7ojaZ/TVent?page-id=0%3A1&node-id=66-293&node-type=canvas&viewport=265%2C151%2C0.13&t=1YtQZkiyNtJMVXZt-1&scaling=contain&content-scaling=fixed&starting-point-node-id=66%3A293",
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[0],
                    tagColor: 'bg-[#FF1EF6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[1],
                    tagColor: 'bg-[#FFDC26]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[2],
                    tagColor: 'bg-[#FF0000]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[3],
                    tagColor: 'bg-[#2245FF]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                ?.projects[2]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-center lg:bottom-40 bottom-32 rotate-12 bg-no-repeat',
        },
        {
            width: 'lg:w-[35rem] xl:w-[40rem] w-full',
            img: '/images/portfolio/branding/praxis-kattan.png',
            bgColor: '#04C472',
            links:"https://www.figma.com/proto/j6WzkYJUmxO6ZJL7p7ojaZ/TVent?page-id=0%3A1&node-id=66-293&node-type=canvas&viewport=265%2C151%2C0.13&t=1YtQZkiyNtJMVXZt-1&scaling=contain&content-scaling=fixed&starting-point-node-id=66%3A293 ",
            tags: [
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[0],
                    tagColor: 'bg-[#FF1EF6]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[1],
                    tagColor: 'bg-[#FFDC26]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[2],
                    tagColor: 'bg-[#FF0000]',
                },
                {
                    tagName:
                        languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                            ?.projects[0]?.tags[3],
                    tagColor: 'bg-[#2245FF]',
                },
            ],
            title: languageData?.portfolioPage?.[changeLanguage]?.tabs[1]
                ?.projects[3]?.title,
            project: '/projects/leapx',
            bgGradient: 'bg-gradient-to-b from-black/10 to-black',
            bgProps: 'bg-contain bg-top bg-no-repeat',
        },
    ]
    return (
        <div className="flex scale-100 flex-wrap items-center justify-center lg:gap-6 lg:mt-12 lg:scale-[85%] xl:max-w-[78rem] 2xl:mt-10 2xl:scale-100">
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

export default BrandingTab
