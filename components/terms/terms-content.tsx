'use client'
import React, { useState, useEffect } from 'react'
import { languageData } from '@/langauge'
const TermsContent = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') 

    useEffect(() => {
        const storedLang = localStorage.getItem('lang') as 'de' | 'en'
        if (storedLang) {
            setChangeLanguage(storedLang)
        }
    }, [])

    return (
        <div className="p-8 font-sans bg-center bg-cover bg-no-repeat text-gray-300">
            <div className="mx-auto lg:max-w-5xl 2xl:max-w-7xl">
                {languageData?.termsData[changeLanguage].map((term, index) => (
                    <div key={index} className="mb-12">
                        <h1 className="mb-2 font-archivo lg:text- text-[25px] font-bold text-white">
                            {term.title}
                        </h1>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-14">
                            {term.sections.map((section) => (
                                <div key={section.id}>
                                    <h2 className="mb-2 font-dm-sans text-base font-bold text-white">
                                        {section.id} {section.title}
                                    </h2>
                                    <p className="font-dm-sans text-base font-normal text-white/50">
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TermsContent
