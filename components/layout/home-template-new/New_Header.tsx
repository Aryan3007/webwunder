import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CustomLanguageDropdown2 from '@/components/CustomLanguageDropdown2';
import { languageData } from '@/langauge'
import { ArrowRight } from 'lucide-react';

const New_Header: React.FC = () => {



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
        <div className="w-[80%] rounded-full bg-[#191919] shadow-lg h-16 flex items-center justify-between px-6">
            {/* Left side: Logo */}
            <div className="flex items-center">
                <Link href="/" passHref>
                    <Image
                        src="./logo.svg" // Replace this with the correct logo path (or import your image from the file if needed)
                        alt="WebWunder Logo"
                        width={30}
                        height={30}
                    />
                </Link>
            </div>

            {/* Center: Links */}
            <nav className="flex space-x-6 text-sm text-white">
                <Link href="/#join-us">
                    {languageData?.navItems?.[changeLanguage]?.benefits}
                </Link>
                <Link href="/#easySteps">
                    {languageData?.navItems?.[changeLanguage]?.Process}
                    </Link>
                <Link href="#all-in-one"> {languageData?.navItems?.[changeLanguage]?.yourWebsite}</Link>
                <Link href="#purchase-plans"> {languageData?.navItems?.[changeLanguage]?.prices}</Link>
                <Link href='/portfolio'>   {languageData?.navItems?.[changeLanguage]?.portfolio}</Link>
                <Link href="#faqs"> {languageData?.navItems?.[changeLanguage]?.faqs}</Link>
                <Link href="#contact-us"> {languageData?.navItems?.[changeLanguage]?.contact}</Link>
            </nav>

            {/* Right side: Book a call button and Language selector */}
            <div className="flex items-center w-fit space-x-4">
                {/* Book a call button */}

                <Link className=' bg-white hover:bg-[#303030] border-2 border-white duration-100 transition-all hover:text-white text-black  flex justify-between items-center rounded-full gap-4 px-4 py-2' href="https://tidycal.com/skylumina/webwunder" passHref>
                    <button className="uppercase flex justify-center items-center gap-2  font-semibold">
                        <Image
                            src="/images/emoji.svg" // Replace this with the correct logo path (or import your image from the file if needed)
                            alt="WebWunder Logo"
                            width={25}
                            height={25}
                        />
                        <h1>
                            {languageData?.navItems?.[changeLanguage]?.bookcall}
                        </h1>
                    </button>
                    <div className='h-5 w-5 flex justify-center items-center rounded-full '>
                        <ArrowRight
                            size={18}
                            fontWeight={100}
                           
                        />
                    </div>
                </Link>

                {/* Language and Up arrow icons */}
                <div className="flex items-center space-x-2">
                    <CustomLanguageDropdown2 />

                    {/* Up arrow button */}
                    <div className="flex items-center justify-center rounded-full p-3.5 bg-[#2a2a2a] w-10 h-10">
                        <Link href="#home" passHref>
                            <Image
                                src="/arrowup.svg" // Replace this with the correct logo path (or import your image from the file if needed)
                                alt="WebWunder Logo"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                    
                    <div className="flex items-center justify-center rounded-full p-2 bg-[#2a2a2a] w-10 h-10">
                        <Link href="#home" passHref>
                            <Image
                                src="/images/cookies.svg" // Replace this with the correct logo path (or import your image from the file if needed)
                                alt="WebWunder Logo"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New_Header;
