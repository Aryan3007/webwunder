import React, { useEffect, useState } from 'react'
import Header from '../layout/home-template-new/header'
import Footer from '../layout/home-template-new/footer'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { languageData } from '@/langauge'
import SidebarMenu from '../layout/home-template-new/menu-mobile'
import Logo from '../common/logo'
import Image from 'next/image'

interface PolicyProps {
    title: string
    breadcrumb: React.ReactNode
    content: React.ReactNode
}

const PolicyContent: React.FC<PolicyProps> = ({
    title,
    breadcrumb,
    content,
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
        <div className="w-screen overflow-hidden bg-[url('/images/imprint.svg')] bg-cover bg-center lg:p-6">
            <div className="hidden lg:flex">
                <Header />
            </div>

            <div className="relative z-[50] flex w-full items-center justify-between px-6 pt-2 lg:hidden">
                <Link href={`/`}>
                    <Image
                        src="./images/logo.svg"
                        alt="WebWunder Logo"
                        width="225"
                        height="17"
                    />
                </Link>
                <SidebarMenu />
            </div>

            <div className="">
                <div className="inset-0 my-6 flex h-44 items-center justify-center">
                    <div className="z-10 flex h-full flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="xl:text[80px] max-w-[38.1rem] p-3 text-center font-archivo text-[25px] font-bold text-white">
                                {title}
                            </div>
                            <div className="mx-auto max-w-80 text-center">
                                {breadcrumb}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-b-lg bg-transparent text-white">
                    {content}
                </div>
            </div>
            {/* <div className="relative h-[400px] bg-black">
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
                    <h2 className="font-archivo text-[25px] font-bold leading-none text-white lg:text-[45px]">
                       
                        {languageData?.faqPage?.[changeLanguage]?.contactTitle}
                    </h2>
                    <p className="max-w-xl font-archivo text-sm font-normal text-gray-400 md:text-[16px] lg:text-base">
                        {
                            languageData?.faqPage?.[changeLanguage]
                                ?.contactDescription
                        }
                    </p>
                    <button className="flex w-fit flex-row items-center justify-between gap-6 rounded-full border bg-[#ffffff] px-2 py-1 transition-all hover:scale-95 md:p-2">
                        <Link
                            href="#"
                            className="flex flex-row items-center justify-between gap-4"
                        >
                            <p className="ml-2 font-inter text-sm font-medium text-[#24252A] lg:text-[15px]">
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
            </div> */}
            <div className="mt-8">
                <Footer />
            </div>
        </div>
    )
}

export default PolicyContent
