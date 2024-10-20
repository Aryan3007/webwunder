import React, { useEffect, useState } from 'react'
import Logo from '../common/logo'
import SidebarMenu from '../layout/home-template-new/menu-mobile'

const FixedHeaderMob = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang)
            }
        }
    }, [])

    if (!isVisible) {
        return null
    }

    return (
        <div className="fixed hidden  top-0 left-0 right-0 z-[99] bg-[#24252a] shadow-md transition-all duration-300 ease-in-out transform translate-y-0">
            <div className='w-full flex justify-between items-center px-6 py-4'>
                <Logo />
                <div className='z-[99]'>
                <SidebarMenu />
                </div>
            </div>
        </div>
    )
}

export default FixedHeaderMob