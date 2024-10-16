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
  { src: '/images/brands/l1.svg', width: 43, height: 42 },
  { src: '/images/brands/l2.svg', width: 91, height: 41 },
  { src: '/images/brands/l3.svg', width: 113, height: 19 },
  { src: '/images/brands/l4.svg', width: 62, height: 37 },
  { src: '/images/brands/l5.svg', width: 76, height: 24 },
  { src: '/images/brands/l6.svg', width: 64, height: 26 },
  { src: '/images/brands/l7.svg', width: 140, height: 31 },
  { src: '/images/brands/l8.svg', width: 35, height: 48 },
  { src: '/images/brands/l9.svg', width: 88, height: 29 },
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
      <Marquee  style={{ transform: 'rotate(-1.55deg)' }} className="w-full -translate-y-8  mb-4  bottom-8 z-50 lg:h-16 h-16 bg-[#5D59E1]" speed={50} gradient={false}>
    <div   className="relative flex items-center">
      <div 
        className="absolute inset-0 h-full"
      
      ></div>
      <div className="relative flex h-full items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-x-12">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} item={item} index={index} />
            ))}
            {/* Duplicating the content to avoid gaps */}
            {carouselItems.map((item, index) => (
              <CarouselItem key={`duplicate-${index}`} item={item} index={`duplicate-${index}`} />
            ))}
          </div>
      </div>
    </div>
        </Marquee>
  )
}

export default BrandsCarousel