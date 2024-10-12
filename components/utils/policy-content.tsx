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
        <div className="bg-gradient-to-br from-[#100013] via-0% to-[#000000] lg:p-6">
            <div className="relative h-[75vh] lg:h-[55vh] overflow-hidden rounded-t-lg bg-black">




                <div className='lg:flex hidden'>
                    <Header />
                </div>

                <div className='relative lg:hidden pt-2 z-[50] w-full justify-between items-center px-6 flex'>
                    <Link href={`/`}>
                        <Image src="./images/logo.svg"

                            alt="WebWunder Logo"
                            width="225"
                            height="17" />
                    </Link>
                    <SidebarMenu />
                </div>



                <div className="absolute inset-0 h-full flex justify-center items-center bg-[url('/images/main-hero-small.png')] bg-cover bg-center lg:bg-[url('/images/imprintnew.png')]">


                    <div className="relative z-10 flex h-full flex-col items-center justify-center">
                        <div className=" flex flex-col items-center justify-center text-center">
                            <div className="xl:text[80px] max-w-[38.1rem] text-center font-archivo text-[25px] font-bold text-white">
                                {title}
                            </div>
                            <div className='mx-auto max-w-80'>

                                {breadcrumb}
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className="rounded-b-lg bg-gradient-to-r from-[#858585]/40 via-[#858585]/20 to-[#858585]/60 text-white">
                {content}
            </div>
            <div className="relative h-[400px] bg-black">
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
                        {/* Leave the Competition Behind! */}
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
            </div>
            <div className="mt-8">
                <Footer />
            </div>
        </div>
    )
}

export default PolicyContent
