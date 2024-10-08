'use client'
import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { languageData } from '@/langauge'
import axios from 'axios'
import Link from 'next/link'

const FAQs = () => {
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    const faqData = languageData?.faqPage?.[changeLanguage]?.questions
    //    [
    //     {
    //         question:
    //             'What makes WebWunder’s websites different, and why should I choose WebWunder?',
    //         answer: 'At WebWunder, we’re entrepreneurs like you, so we understand the challenges you face. Our custom, template-free websites are designed to drive sales, reduce costs, and save you time. With continuous AI optimizations and hassle-free updates, you’ll never need another agency. We handle the heavy lifting so you can focus on scaling your business with confidence.',
    //     },
    //     {
    //         question:
    //             'Why is your website model subscription-based? Why not a one-time payment?',
    //         answer: 'A one-time project doesn’t cut it for long-term success. As entrepreneurs, we know your business needs ongoing support. That’s why we offer a subscription model, ensuring your website continues to perform exceptionally well over time, with regular updates and optimizations that keep you ahead.',
    //     },
    //     {
    //         question:
    //             'What is the Unlimited Design Plan, and why did you introduce it?',
    //         answer: 'Our Unlimited Design Plan was created for entrepreneurs who need constant, high-quality design work without the hassle of ongoing negotiations. This plan offers unlimited design requests, fast delivery, and full design ownership—all for a flat monthly fee. It’s designed to meet your needs, when you need them, eliminating the back-and-forth with agencies.',
    //     },
    //     {
    //         question: 'What does a free design refresh after 36 months mean?',
    //         answer: 'Every 36 months, we refresh your website’s design at no extra cost, keeping it modern and aligned with your evolving business.',
    //     },
    //     {
    //         question: 'How fast will I receive my website?',
    //         answer: 'Your website will typically be live within 4 to 6 weeks, depending on its complexity. Your total time commitment? Less than an hour.',
    //     },
    //     {
    //         question: 'What happens if I want to stop my subscription?',
    //         answer: 'If you cancel, your website will go offline since it’s leased through us. However, you can take full ownership by paying an exit fee of €3,000, €6,000, or €9,000 depending on your plan. This gives you full control, but ongoing updates and support won’t be available.',
    //     },
    //     {
    //         question: 'Is my website optimized for search engines?',
    //         answer: 'We’re not an SEO company, but we ensure your site is fully optimized using advanced AI tools. Built by entrepreneurs for entrepreneurs, your WebWunder site is designed to perform better in every way—including search rankings. As your business grows, so will your online visibility. For specialized off-page SEO or a targeted ad campaign, we have partners who can help you take it further.',
    //     },
    //     {
    //         question:
    //             'I don’t have any content, branding, or even a clear vision for my website. Can WebWunder help with that?',
    //         answer: 'Absolutely! WebWunder takes care of everything—from website copy and branding to complete corporate identity creation. We’ll craft your content and design a unique, cohesive brand that aligns with your business goals. For legal texts, we recommend consulting a lawyer to ensure everything is fully compliant with your specific needs.',
    //     },
    // ]
    return (
        <div id='faqs' className="flex items-center justify-center bg-black">
            <div className="flex flex-col items-center justify-between bg-black lg:w-4/5 lg:flex-row lg:items-start 2xl:w-[1450px]">
                <div className="mt-10 flex flex-col items-center justify-start gap-4 lg:mt-20 lg:items-start">
                    <Badge className="bg-[#5D59E1] font-archivo text-sm font-normal">
                        {/* Frequently Asked Questions */}
                        {languageData?.faqPage?.[changeLanguage]?.title}
                    </Badge>
                    <p className="font-archivo text-[25px] font-bold leading-none text-white lg:text-[45px] lg:leading-normal">
                        {/* Got Questions? */}
                        {languageData?.faqPage?.[changeLanguage]?.subtitle}
                    </p>
                    <p className="font-archivo text-lg font-bold leading-none text-white lg:text-[26px] lg:leading-normal">
                        {languageData?.faqPage?.[changeLanguage]?.description}
                    </p>
                    <p className="font-archivo text-sm font-normal leading-none text-gray-300 lg:text-base lg:leading-normal">
                        {languageData?.faqPage?.[changeLanguage]?.description2}
                    </p>
                    <Link href="https://wa.me/c/4915114039455">
                        <Button
                            size={'base'}
                            className="hidden items-center justify-between gap-3 bg-white transition-all hover:scale-95 md:flex"
                        >
                            <p className="font-archivo text-[15px] font-medium text-[#24252A]">
                                {
                                    languageData?.faqPage?.[changeLanguage]
                                        ?.bookCall
                                }
                            </p>
                            <ArrowRight size={15} className="text-[#24252A]" />
                        </Button>
                    </Link>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="mt-10 z-[99] w-screen space-y-2 md:mt-20 h-full lg:w-3/5"
                >
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={`item-${index + 1}`}
                            value={`item-${index + 1}`}
                            className="mx-1 overflow-hidden rounded-lg border border-gray-200 border-transparent data-[state=open]:border-white/20"
                        >
                            <AccordionTrigger className="w-4/5 px-4 py-2 text-left font-archivo text-base font-bold text-white hover:no-underline lg:text-xl">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="mx-2 flex w-full items-center rounded-lg px-4 text-left py-2 font-archivo text-sm font-normal text-white/50">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default FAQs
