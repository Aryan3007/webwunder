'use client'

import { cn } from '@/lib/utils'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState, useRef } from 'react'
import Marquee from 'react-fast-marquee'

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}: {
    items: {
        content: string
        writer: string
        rating: number
    }[]
    direction?: 'left' | 'right'
    speed?: 'fast' | 'normal' | 'slow'
    pauseOnHover?: boolean
    className?: string
}) => {
    const [scale, setScale] = useState('')
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth
            if (windowWidth >= 1536) {
                setScale('max-w-[1700px]')
            } else if (windowWidth >= 1280) {
                setScale('max-w-[1700px]')
            } else if (windowWidth >= 1024) {
                setScale('max-w-[1300px]')
            } else {
                setScale('max-w-[1300px]')
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const getSpeed = () => {
        switch (speed) {
            case 'fast':
                return 80
            case 'normal':
                return 60
            case 'slow':
                return 40
            default:
                return 60
        }
    }

    const handleScroll = (scrollOffset: number) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' })
        }
    }

    return (
        <div className={cn('relative z-20', scale, className)}>
            <div ref={containerRef} className="overflow-hidden">
                <Marquee
                    direction={direction}
                    speed={getSpeed()}
             
                    gradient={false}
                >
                    {items.concat(items).map((item, idx) => (
                        <div
                            key={`${item.writer}-${idx}`}
                            className="relative h-[300px] w-[250px] max-w-full flex-shrink-0 rounded-3xl p-5 sm:w-[300px] md:h-auto md:w-[500px] md:px-8 md:py-10 mx-2 overflow-hidden"
                            style={{
                                background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
                            }}
                        >
                            <div className='h-64 flex justify-between flex-col'>
                                <div
                                    aria-hidden="true"
                                    className="user-select-none pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+_4px)] w-[calc(100%+_4px)] rounded-3xl bg-[#191919]"
                                ></div>
                                <div className="relative h-44 z-20 font-figtree text-base font-semibold leading-normal text-white md:mb-1 md:text-[22px] md:leading-[1.6]">
                                    &quot;{item.content}&quot;
                                </div>
                                <div className="relative z-20 mt-6 flex flex-col items-start">
                                    <span className="mb-1 font-figtree text-sm font-normal leading-[1.6] text-white/50 md:mb-3">
                                        {item.writer}
                                    </span>
                                    <div className="flex flex-row items-center">
                                        {[...Array(Math.floor(item.rating))].map((_, i) => (
                                            <span key={i} className="text-[#FFDC26]">
                                                <Star size={20} fill="#FFDC26" />
                                            </span>
                                        ))}
                                        {item.rating % 1 !== 0 && (
                                            <span className="text-[#FFDC26]">
                                                <Star size={20} fill="#FFDC26" />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
            <button
                onClick={() => handleScroll(-300)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-10"
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
                onClick={() => handleScroll(300)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-10"
                aria-label="Scroll right"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>
        </div>
    )
}