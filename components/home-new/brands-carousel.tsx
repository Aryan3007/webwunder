'use client'

import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

interface CarouselItemType {
    src: string
    width: number
    height: number
}

const carouselItems: CarouselItemType[] = [
    { src: '/images/brands/i1.svg', width: 43, height: 42 },
    { src: '/images/brands/figma.png', width: 91, height: 41 },
    { src: '/images/brands/webflow.png', width: 113, height: 19 },
    { src: '/images/brands/nextjs.png', width: 62, height: 37 },
    { src: '/images/brands/reactjs.png', width: 76, height: 24 },
    { src: '/images/brands/stripe.png', width: 64, height: 26 },
    { src: '/images/brands/wordpress.png', width: 140, height: 31 },
    { src: '/images/brands/cloudflare-pages.png', width: 35, height: 48 },
    { src: '/images/brands/cloudflare.png', width: 88, height: 29 },
]

interface CarouselItemProps {
    item: CarouselItemType
    index: number | string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, index }) => (
    <Image
        className="lg:mx-12 md:mx-8 mx-4 scale-90 md:scale-100"
        key={index}
        src={item.src}
        alt="logo"
        width={item.width}
        height={item.height}
    />
)

const BrandsCarousel: React.FC = () => {
    return (
        <div
            className="relative bottom-8 z-[99] lg:h-20 h-16 bg-[#5D59E1]"
            style={{ transform: 'rotate(-1.55deg)' }}
        >
            <div className="flex h-full w-full items-center justify-center bg-[#5D59E1]">
                <Marquee className="w-full" speed={50} gradient={false}>
                    <div className="flex flex-row items-center justify-center gap-x-12">
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={index} item={item} index={index} />
                        ))}
                        {/* Duplicating the content to avoid gaps */}
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={`duplicate-${index}`} item={item} index={`duplicate-${index}`} />
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default BrandsCarousel