'use client'

import React, { useEffect } from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-img-cards'
// import { gsap, ScrollTrigger } from 'gsap/all'

export function HeroCardsRight() {

  // useEffect(() => {
  //   // Register GSAP plugins
  //   gsap.registerPlugin(ScrollTrigger)

  //   // Get the element you want to animate
  //   const container = document.querySelector('.slide-track-right')

  //   // Check if container is not null
  //   if (container) {
  //     // Set up GSAP timeline with speed control
  //     gsap.to(container, {
  //       x: () => container.scrollWidth - window.innerWidth, // Move to the left
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: '.scroll-container', // The section to start animating
  //         start: 'top 40%', // Start when 40% of the section is visible
  //         end: '+=5000px 40%', // Increase this value to slow down the scroll speed
  //         scrub: 1, // Smooth scroll animation synchronized with scrolling
  //         pin: false, // If set to true, it will pin the element during scroll
  //         invalidateOnRefresh: true, // Recalculate on resize
  //       },
  //     })
  //   }
  // }, [])

  return (
    <div className=" relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
      <div className='scroll-container'>
        <InfiniteMovingCards
          className="slide-track-right"
          items={imageItems}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  )
}

export function HeroCardsLeft() {
  // useEffect(() => {
  //   // Register GSAP plugins
  //   gsap.registerPlugin(ScrollTrigger)

  //   // Get the element you want to animate
  //   const container = document.querySelector('.slide-track-left')

  //   // Check if container is not null
  //   if (container) {
  //     // Set up GSAP timeline for left movement with speed control
  //     gsap.to(container, {
  //       x: () => -container.scrollWidth + window.innerWidth, // Move to the right
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: '.scroll-container', // The section to start animating
  //         start: 'top 40%', // Start when 40% of the section is visible
  //         end: '+=5000px 40%', // Increase this value to slow down the scroll speed
  //         scrub: 1, // Smooth scroll animation synchronized with scrolling
  //         pin: false, // If set to true, it will pin the element during scroll
  //         invalidateOnRefresh: true, // Recalculate on resize
  //       },
  //     })
  //   }
  // }, [])

  return (
    <div className=" relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
      <div className='scroll-container'>
        <InfiniteMovingCards
          className="slide-track-left"
          items={imageItems}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  )
}

// Image items for both components
const imageItems = [
  {
    imageSrc: '/images/home/stay-on-top/portfolio-slider-1.webp',
    altText: 'Stay on top',
  },
  {
    imageSrc: '/images/home/stay-on-top/portfolio-slider-2.webp',
    altText: 'Stay on top',
  },
  {
     imageSrc: '/images/home/stay-on-top/portfolio-slider-3.webp',
    altText: 'Stay on top',
  },
  {
     imageSrc: '/images/home/stay-on-top/portfolio-slider-4.webp',
    altText: 'Stay on top',
  },
  {
    imageSrc: '/images/home/stay-on-top/portfolio-slider-5.webp',
    altText: 'Stay on top',
  },
  {
        imageSrc: '/images/home/stay-on-top/portfolio-slider-6.webp',
    altText: 'Stay on top',
  },
  {
    imageSrc: '/images/home/stay-on-top/portfolio-slider-7.webp',
    altText: 'Stay on top',
  },
  {
    imageSrc: '/images/home/stay-on-top/portfolio-slider-8.webp',
    altText: 'Stay on top',
  }, {
       imageSrc: '/images/home/stay-on-top/portfolio-slider-9.webp',
    altText: 'Stay on top',
  }, {
       imageSrc: '/images/home/stay-on-top/portfolio-slider-10.webp',
    altText: 'Stay on top',
  }, {
      imageSrc: '/images/home/stay-on-top/portfolio-slider-11.webp',
    altText: 'Stay on top',
  }, {
       imageSrc: '/images/home/stay-on-top/portfolio-slider-12.webp',
    altText: 'Stay on top',
  },
]
