'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface LangLayoutProp {
    children: React.ReactNode
}

const LangLayout: React.FC<LangLayoutProp> = ({ children }) => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>(() => {
        // Check if window exists to avoid issues with SSR
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
            const germanSpeakingCountries = ['BE', 'DE', 'AT', 'CH'] // Belgium, Germany, Austria, Switzerland

            const detectedLanguage = germanSpeakingCountries.includes(countryCode) ? 'de' : 'en'
            
            // Update localStorage and state after detection
            if (typeof window !== 'undefined') {
                localStorage.setItem('lang', detectedLanguage)
                setChangeLanguage(detectedLanguage)
            }
        } catch (error) {
            console.error('Error fetching user location:', error)
            
            // If error, default to 'en'
            if (typeof window !== 'undefined') {
                localStorage.setItem('lang', 'en')
                setChangeLanguage('en')
            }
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang')
            if (!storedLang) {
                detectUserLanguage() // Detect language only if not already set
            }
        }
    }, [])

    // Only log `lang` when in a browser environment
    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log(localStorage.getItem('lang'))
        }
    }, [changeLanguage])

    return <div>{children}</div>
}

export default LangLayout
