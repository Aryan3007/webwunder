'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface LangLayoutProp {
    children: React.ReactNode
}

const LangLayout: React.FC<LangLayoutProp> = ({ children }) => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>(() => {
        // Initialize state based on localStorage
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang')
            return storedLang === 'de' || storedLang === 'en' ? storedLang : 'en'
        }
        return 'en'
    })

    const detectUserLanguage = async () => {
        try {
            const response = await axios.get('https://ipapi.co/json/')
            const countryCode = response.data.country_code
            console.log('User country code:', countryCode)

            const germanSpeakingCountries = ['BE', 'DE', 'AT', 'CH'] // Belgium, Germany, Austria, Switzerland

            const detectedLanguage = germanSpeakingCountries.includes(countryCode) ? 'de' : 'en'
            
            // Update localStorage and state after detection only if different from current language
            // if (typeof window !== 'undefined') {
                const storedLang = localStorage.getItem('lang')
                if (storedLang !== detectedLanguage) {
                    localStorage.setItem('lang', detectedLanguage)
                    setChangeLanguage(detectedLanguage)
                }
            // }
        } catch (error) {
            console.error('Error fetching user location:', error)
            // Fallback to 'en' if location detection fails
            if (typeof window !== 'undefined') {
                localStorage.setItem('lang', 'en')
                setChangeLanguage('en')
            }
        }
    }

    useEffect(() => {
        // Perform language detection if no language is set in localStorage
        detectUserLanguage()

        // if (typeof window !== 'undefined') {
        //     const storedLang = localStorage.getItem('lang')
        //     if (!storedLang) {
        //         detectUserLanguage()
        //     }
        // }
    }, [])

    useEffect(() => {
        // Log the current language stored in localStorage
        if (typeof window !== 'undefined') {
            console.log('Current language:', localStorage.getItem('lang'))
        }
    }, [changeLanguage])

    return <div>{children}</div>
}

export default LangLayout
