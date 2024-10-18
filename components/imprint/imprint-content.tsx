'use client'
import React, { useState, useEffect } from 'react';
import { languageData } from '@/langauge';
const ImprintContent = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en'); // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en';
            if (storedLang) {
                setChangeLanguage(storedLang); // Set state from localStorage after component mounts
            }
        }
    }, []);

    const imprintData = languageData?.imprintPage?.[changeLanguage];

    return (
        <div className="flex flex-col px-6 py-12t text-white lg:flex-row lg:px-40 lg:py-24">
            <div className="mb-8 lg:mb-0 lg:w-1/2 lg:pr-4">
                <h2 className="mb-4 font-archivo text-[25px] font-bold">
                    {imprintData?.title}
                </h2>
                <p className="mb-1 font-archivo text-base font-normal text-white/50">
                    {imprintData?.address}
                </p>
                {/* <p className="mb-1 font-archivo text-base font-normal text-white/50">
                    {imprintData?.companyNumber}
                </p> */}
                <p className="mb-4 font-archivo text-base font-normal text-white/50">
                    {imprintData?.managingDirector}
                </p>

                <h3 className="mb-2 font-archivo text-[25px] font-bold">
                    {imprintData?.contactInfo?.title}
                </h3>
                <p className="mb-4 font-archivo text-base font-normal text-white/50">
                    Email:{' '}
                    <span className="text-[#5D59E1]">
                        {imprintData?.contactInfo?.email}
                    </span>
                </p>

                <h3 className="mb-2 font-archivo text-[25px] font-bold">
                    {imprintData?.dataProtectionOfficer?.title}
                </h3>
                <p className="mb-1 font-archivo text-base font-normal text-white/50">
                    {imprintData?.dataProtectionOfficer?.name}
                </p>
                <p className="font-archivo text-base font-normal text-white/50">
                    Email:{' '}
                    <span className="text-[#5D59E1]">
                        {imprintData?.dataProtectionOfficer?.email}
                    </span>
                </p>

                <h3 className="mb-2 mt-4 font-archivo text-[25px] font-bold">
                    {imprintData?.servicesProvided?.title}
                </h3>
                <p className="w-full font-archivo text-base font-normal text-white/50 lg:w-4/5">
                    {imprintData?.servicesProvided?.description}
                </p>
            </div>
            <div className="lg:w-1/2 lg:pl-4">
                <h3 className="mb-2 font-archivo text-[25px] font-bold">
                    {imprintData?.disputeResolution?.title}
                </h3>
                <p className="mb-4 w-full font-archivo text-base font-normal text-white/50 lg:w-5/6">
                    {imprintData?.disputeResolution?.description}
                </p>

                <h3 className="mb-2 font-archivo text-[25px] font-bold">
                    {imprintData?.liabilityForContent?.title}
                </h3>
                <p className="mb-4 w-full font-archivo text-base font-normal text-white/50 lg:w-5/6">
                    {imprintData?.liabilityForContent?.description}
                </p>

                <h3 className="mb-2 font-archivo text-[25px] font-bold">
                    {imprintData?.liabilityForLinks?.title}
                </h3>
                <p className="w-full font-archivo text-base font-normal text-white/50 lg:w-5/6">
                    {imprintData?.liabilityForLinks?.description}
                </p>
            </div>
        </div>
    );
};

export default ImprintContent;
