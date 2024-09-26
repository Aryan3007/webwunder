
import BrandsCarousel from '@/components/home-new/brands-carousel'
import WhyWebWunder from '@/components/home-new/why-webwunder'
import AllInOne from '../../../components/home-new/all-in-one'
import JoinUs from '@/components/home-new/join-us'
import StayOnTop from '@/components/home-new/stay-on-top'
import PurchasePlans from '@/components/home-new/purchase-plans'
import ContactUs from '@/components/home-new/contact-us'
import OurPortfolio from '@/components/home-new/our-portfolio'
import Reviews from '@/components/home-new/reviews'
import FAQs from '@/components/home-new/faqs'
import GetInTouch from '@/components/home-new/get-in-touch'
import Footer from '@/components/layout/home-template-new/footer'
import New_Homepage from '@/components/home-new/New_Homepage'
import Why_mobCrousel from '@/components/home-new/why_mobCrousel'
import LangLayout from '../langLayout'


export default function HomePage() {
    return (
        <LangLayout>
        <div className="overflow-hidden">
            {/* <HomeLanding /> */}
            <New_Homepage />
            <BrandsCarousel />
            <div className='lg:flex hidden'>
                <WhyWebWunder />
            </div>
            <div className='lg:hidden flex'>
                <Why_mobCrousel />
            </div>
            <AllInOne />
            <JoinUs />
            <StayOnTop />
            <PurchasePlans />
            <ContactUs />
            <OurPortfolio />
            <Reviews />
            <FAQs />
            <GetInTouch />
            <Footer />
        </div>
        </LangLayout>
    )
}
