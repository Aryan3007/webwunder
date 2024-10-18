import { Button } from '@/components/ui/button'
import Reveal from '@/components/transitions/reveal'

import PhonePNG from '@/public/images/home/hero/phone.png'
import Phone2PNG from '@/public/images/home/hero/phone2.png'
import IpadPNG from '@/public/images/home/hero/ipad.png'
import Ipad2PNG from '@/public/images/home/hero/ipad2.png'

import DonutLightGreenPNG from '@/public/images/home/hero/donut-lightgreen.png'
import ConePNG from '@/public/images/home/hero/cone-pink.png'
import CylinderGreenPNG from '@/public/images/home/hero/cylinder-green.png'
import DonutGreenPNG from '@/public/images/home/hero/donut-green.png'
import DonutRedPNG from '@/public/images/home/hero/donut-red.png'
import PolygonRedPNG from '@/public/images/home/hero/polygon-red.png'
import TriangleLightgreenPNG from '@/public/images/home/hero/triangle-lightgreen.png'

// import DiamondLightpurplePNG from '@/public/images/home/hero/diamond-lightpurple.png'
// import DonutLightgreenPNG from '@/public/images/home/hero/donut-lightgreen.png'
// import SphereTealPNG from '@/public/images/home/hero/sphere-teal.png'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { paths } from '@/paths'
import SeePlans from './home-section/see-plans'

export default function HeroSection(props: Props) {

    return (
        <section
            id="hero"
            className={cn(
                'relative flex w-full justify-center',
                props.className,
            )}
        >
            <div className="absolute flex h-full w-full max-w-[2000px] flex-col px-12">
                <Image
                    className="absolute bottom-44 left-24 hidden w-[30px] object-contain xl:left-[260px] xl:top-[100px] xl:block xl:w-auto"
                    src={DonutLightGreenPNG}
                    alt="Webwunder Image"
                    priority
                />
                <Image
                    className="absolute left-[50%] top-[30px] w-[30px] object-contain xl:top-[50px] xl:w-auto"
                    src={DonutGreenPNG}
                    alt="Webwunder Image"
                    priority
                />
                <Image
                    className="absolute right-[15px] top-[40px] w-[50px] rotate-90 object-contain xl:right-[30%] xl:top-[100px] xl:w-[61px] xl:rotate-0"
                    src={ConePNG}
                    alt="Webwunder Image"
                    priority
                />
                <Image
                    className="absolute right-[30px] top-[180px] w-[26px] object-contain md:right-[60px] md:top-[250px] xl:right-[50px] xl:top-[50%] xl:w-auto 2xl:right-[500px]"
                    src={CylinderGreenPNG}
                    alt="Webwunder Image"
                    priority
                />

                <Image
                    className="absolute bottom-auto left-[30px] top-[200px] w-[25px] object-contain md:left-[60px] md:top-[265px] md:w-16 xl:left-[500px] xl:top-[145px] xl:w-[60px] 2xl:bottom-[50%]"
                    src={TriangleLightgreenPNG}
                    alt="Webwunder Image"
                    priority
                />

                <Image
                    className="absolute bottom-[120px] right-32 hidden w-[30px] object-contain xl:right-[55%] xl:block xl:w-auto"
                    src={DonutRedPNG}
                    alt="Webwunder Image"
                    priority
                />
                <Image
                    className="absolute left-3 top-[100px] w-[30px] object-contain xl:left-auto xl:right-[130px] xl:top-[400px] xl:w-[70px]"
                    src={PolygonRedPNG}
                    alt="Webwunder Image"
                    priority
                />

                <div className="relative mt-[600px] hidden justify-between xl:mt-0 xl:flex">
                    <Image
                        className="relative w-[130px] object-contain xl:left-0 xl:w-[310px] 2xl:w-[410px]"
                        src={Phone2PNG}
                        alt="Webwunder Phone Image"
                        priority
                    />
                    <Image
                        className="w-[90px] object-contain xl:relative xl:right-0 xl:w-[270px] 2xl:-top-[90px] 2xl:right-40"
                        src={PhonePNG}
                        alt="Webwunder Phone Image"
                        priority
                    />
                </div>
                <div className="hidden justify-between xl:flex">
                    <Image
                        className="relative w-[170px] object-contain xl:bottom-0 xl:w-[425px] 2xl:-top-[90px] 2xl:left-40"
                        src={IpadPNG}
                        alt="Webwunder Ipad Image"
                        priority
                    />
                    <Image
                        className="right relative right-24 w-[270px] object-contain lg:right-0 lg:w-[500px] xl:bottom-0 2xl:-top-40 2xl:right-40"
                        src={Ipad2PNG}
                        alt="Webwunder Ipad Image"
                        priority
                    />
                </div>
            </div>
            <div className="container relative px-3 pt-20 xl:pb-[250px] xl:pt-48">
                <div className="flex flex-col items-center justify-center">
                    <div className="my-4 space-y-4 text-center">
                        <Reveal>
                            <h1 className="text-[50px] font-bold leading-[50px] tracking-tighter lg:max-w-[1000px] lg:text-[90px] lg:leading-[80px]">
                                Websites That Deliver More Sales,{' '}
                                <span className="text-primary">
                                    Lower Costs.
                                </span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="my-6 mb-0 text-[28px] font-medium lg:mt-10 lg:text-[28px]">
                                Turn Your Website Into a Revenue Powerhouse
                            </p>
                            <p className="my-6 mt-0 text-[22px] lg:mb-10 lg:text-[22px]">
                                WebWunder sites boost customers and cut costs!
                            </p>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <div className="flex justify-center gap-4">
                                <SeePlans />
                                <Button asChild variant={'greenish'}>
                                    <Link
                                        target="_blank"
                                        href={paths.pages.bookCall.href}
                                    >
                                        Book a call
                                    </Link>
                                </Button>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
