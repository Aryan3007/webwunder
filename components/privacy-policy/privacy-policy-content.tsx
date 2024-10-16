import { languageData } from '@/langauge'
import React, { useState, useEffect } from 'react'

interface policyProps {
    title: string
    content:
        | string
        | { text: string; company: string; address: string; email: string }
    isContact?: boolean
}

const PolicySection: React.FC<policyProps> = ({
    title,
    content,
    isContact = false,
}) => (
    <div className="mb-6">
        <h2 className="mb-2 font-archivo text-[25px] font-bold text-white">
            {title}
        </h2>
        {/* Render based on whether content is an object or string */}
        {isContact && typeof content === 'object' ? (
            <div className="font-archivo text-base text-white/50">
                <p className="text-white/50">{content.text}</p>
                <p className="mt-2 text-white/50">{content.company}</p>
                <p className="text-white/50">{content.address}</p>
                <p className='text-white/50'>
                    Email:{' '}
                    <a
                        href={`mailto:${content.email}`}
                        className="text-[#5D59E1] hover:underline"
                    >
                        {content.email}
                    </a>
                </p>
            </div>
        ) : (
            // Render if content is a string
            <p className="font-archivo text-base text-white/50">
                {content as string}
            </p>
        )}
    </div>
)

const PrivacyPolicyContent = () => {
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
        <div className="lg:px-20 px-6 py-8">
            <div className="grid grid-cols-1 mx-auto lg:max-w-5xl 2xl:max-w-7xl gap-6 md:grid-cols-2">
                {languageData?.policySections?.[changeLanguage].map(
                    (section, index) => (
                        <PolicySection
                            key={index}
                            title={section.title}
                            content={section.content}
                            isContact={section.isContact}
                        />
                    ),
                )}
            </div>
        </div>
    )
}

export default PrivacyPolicyContent
