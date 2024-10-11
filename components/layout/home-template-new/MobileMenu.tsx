import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import CustomLanguageDropdown2 from '@/components/CustomLanguageDropdown2';
import { languageData } from '@/langauge'
import { ArrowRight } from 'lucide-react';


// Animation variants for the menu opening
const menuVariants = {
    closed: { opacity: 0, y: 20, display: 'none' }, // Start below the menu
    open: { opacity: 1, y: 0, display: 'block' },  // Animate to align with the menu
};

const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);


    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')

  
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang)
            }
        }
    }, [])


    const handleLanguageChange = (value: string) => {
        const newLang = value === 'german' ? 'de' : 'en'
        setChangeLanguage(newLang)
        localStorage.setItem('lang', newLang)
        location.reload()
    }

    const getLanguageIcon = (lang: 'de' | 'en') => {
        return lang === 'de' ? '/images/germany.png' : '/images/united-kingdom.png'
    }


    // Toggle menu visibility
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-5 px-4 mx-2 py-2 left-0 right-0 bg-[#191919] rounded-full flex items-center justify-between shadow-lg z-50">
            {/* Left Side - Logo */}

            <div className='z-40 flex items-center gap-2 justify-between w-full'>

                {/* <Link href="/" passHref>
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />
      </Link> */}

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="rounded-full bg-[#2a2a2a] w-10 h-10 flex items-center justify-center"
                >
                    <span className="text-white p-2.5 text-2xl">
                        <Image src="/menumob.svg" alt="Logo" width={30} height={30} />
                    </span>
                </button>

                {/* Booking Button */}
                <Link href="https://tidycal.com/skylumina/webwunder" className='flex justify-center items-center gap-2 w-40 bg-white rounded-full text-[10px] md:w-56 text-black px-3 py-2 ' passHref>
                    <button className="text-left uppercase font-bold ml-2">
                    {languageData?.navItems?.[changeLanguage]?.bookcall}
                    </button>
                    <div className='h-6 w-6 flex justify-center items-center rounded-full '>
                    <ArrowRight
                                    size={18}
                                    fontWeight={100}
                                    className="text-[#24252A]"
                                />
                    </div>
                </Link>

                {/* Language Button */}
                <CustomLanguageDropdown2/>

                {/* Arrow Up Button */}
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

            </div>
            {/* Menu - Animated Dropdown Opening Above */}
            <motion.div
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={menuVariants}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 z-20 pb-16 left-0 right-0 bg-[#191919] rounded-xl shadow-lg p-4"
            >
                <nav className="flex flex-col items-center space-y-4 text-white">
                    <Link href="/#join-us" onClick={toggleMenu}>
                    {languageData?.navItems?.[changeLanguage]?.benefits}
                    </Link>
                    <Link href="#all-in-one" onClick={toggleMenu}>
                    {languageData?.navItems?.[changeLanguage]?.yourWebsite}
                    </Link>
                    <Link href="#purchase-plans" onClick={toggleMenu}>
                    {languageData?.navItems?.[changeLanguage]?.prices}
                    </Link>
                    <Link href="/portfolio" onClick={toggleMenu}>
                    {languageData?.navItems?.[changeLanguage]?.portfolio}
                    </Link>
                    <Link href="#faqs" onClick={toggleMenu}>
                    {languageData?.navItems?.[changeLanguage]?.faqs}
                    </Link>
                    <Link href="#contact-us" onClick={toggleMenu}>
                    {languageData?.navItems?.[changeLanguage]?.contact}
                    </Link>
                </nav>
            </motion.div>
        </div>
    );
};

export default MobileMenu;
