// import Anchor from '@/components/common/anchor'
// import DiscoverPerfectFitSection from '@/components/home2/discover-perfect-fit-section'
// import GetInTouchSection from '@/components/home2/get-in-touch-section'
// import HallOfFameSection from '@/components/portfolio/hall-of-fame-section'
// import HeroSection from '@/components/portfolio/hero-section'
// import { motion } from 'framer-motion'
// import { Metadata } from 'next'

import Footer from '@/components/layout/home-template-new/footer';
import Header from '@/components/layout/home-template-new/header'
import MenuComponent from '@/components/layout/home-template-new/MenuComponent';
import PortfolioCarousel from '@/components/portfolio/portfolio-carousel';
import PortfolioLanding from '@/components/portfolio/portfolio-landing';
import PortfolioMainContent from '@/components/portfolio/portfolio-tabs-main';

// export const metadata: Metadata = {
//     title: 'Portfolio - WebWunder',
//     description: 'Webwunder Portfolio',

// }

// export default function PortfolioPage() {
//     return (
//         <div className="flex flex-col items-center">
//             <HeroSection className="mt-6 xl:mt-24" />
//             <HallOfFameSection className="py-12 xl:py-24" />

//             <GetInTouchSection className="py-12 xl:py-24" />
//             <DiscoverPerfectFitSection className="py-12 xl:mb-24 xl:py-24" />

//         </div>
//     )
// }

export default function PortfolioPage() {
    return (
      <div className='bg-black overflow-hidden'>
        <PortfolioLanding />
        <PortfolioCarousel />
        <PortfolioMainContent />
        {/* <MenuComponent /> */}
        <Footer />
      </div>
    );
}
