'use client'

import React from 'react';
import Marquee from 'react-fast-marquee';

const carouselItems: string[] = [
    'Web Design',
    'Graphic Design',
    'Video Editing',
    'Motion Graphics',
    'Web Development',
    'Branding',
    'SEO',
    'Digital Marketing',
    'Brochure',
];

interface CarouselItemProps {
    item: string;
    index: number | string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, index }) => (
    <p 
        className="lg:text-[20px] text-base w-fit font-bold font-archivo text-white px-4" 
        key={index}
    >
        {item}
    </p>
);

const PortfolioCarousel: React.FC = () => {
    return (
        <div className="relative bottom-8 z-50 lg:h-20 h-16 bg-[#5D59E1]" style={{ transform: 'rotate(-1.55deg)' }}>
            <div className="flex h-full w-full items-center justify-center bg-[#5D59E1]">
                <Marquee className="w-full" speed={50} gradient={false}>
                    <div className="flex flex-row items-center lg:gap-20 gap-5">
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={index} item={item} index={index} />
                        ))}
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={`duplicate-${index}`} item={item} index={`duplicate-${index}`} />
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default PortfolioCarousel;