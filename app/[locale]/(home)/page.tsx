import Head from 'next/head';
import WhyWebWunder from '@/components/home-new/why-webwunder';
import AllInOne from '@/components/home-new/all-in-one';
import JoinUs from '@/components/home-new/join-us';
import StayOnTop from '@/components/home-new/stay-on-top';
import PurchasePlans from '@/components/home-new/purchase-plans';
import ContactUs from '@/components/home-new/contact-us';
import OurPortfolio from '@/components/home-new/our-portfolio';
import Reviews from '@/components/home-new/reviews';
import FAQs from '@/components/home-new/faqs';
import GetInTouch from '@/components/home-new/get-in-touch';
import Footer from '@/components/layout/home-template-new/footer';
import New_Homepage from '@/components/home-new/New_Homepage';
import Why_mobCrousel from '@/components/home-new/why_mobCrousel';
import LangLayout from '../langLayout';

export default function HomePage() {
    // SEO data for English language only
    const seoData = {
        title: "WebWunder - Websites That Deliver More Sales & Lower Costs",
        description: "Boost sales & cut costs with managed websites. Book a call today!",
        keywords: "WebWunder, subscription website, web design, boost revenue, reduce costs, website management, SEO, design services, affordable web design, business website design",
        ogDescription: "Turn your website into a revenue driver with WebWunder’s expert, subscription-based design.",
    };

    const { title, description, keywords, ogDescription } = seoData;

    return (
        <LangLayout>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                
                {/* Open Graph tags */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={'/webwunder-icon.png'} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={'/webwunder-icon.png'} />
            </Head>
            <div className="overflow-hidden">
                <New_Homepage />
                <div className="hidden lg:flex">
                    <WhyWebWunder />
                </div>
                <div className="flex lg:hidden">
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
    );
}
