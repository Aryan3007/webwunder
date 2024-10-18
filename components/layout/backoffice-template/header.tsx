'use client'

import Logo from '@/components/common/logo'
import NextTopLoader from 'nextjs-toploader'
import { motion } from 'framer-motion'


import { cn } from '@/lib/utils'
import MenuMobile from './menu-mobile'

export default function Header(props: Props) {
    // const t = useTranslations('home')
    const variants = {
        hide: {
            y: 20,
            opacity: 0,
        },
        animateState: {
            x: 0,
            y: 0,
            opacity: 1,
        },
    }

    return (
        <header
            className={cn(
                'relative z-10 flex w-full flex-col items-center justify-between border-b py-2',
                props.className,
            )}
        >
            <NextTopLoader color="hsl(241 77% 63%)" showSpinner={false} />

            <motion.div
                layout
                initial={'hide'}
                animate={'animateState'}
                variants={variants}
                transition={{
                    bounce: 0,
                    duration: 0.3,
                    delay: 0,
                }}
                className={`z-20 flex w-full flex-col bg-transparent`}
            >
                <div
                    className={`ms-0 flex w-full items-center justify-between px-4 pe-8 py-2`}
                >
                    <div
                        className={`flex w-full items-center justify-between rounded-xl bg-white`}
                    >
                        <Logo className="my-4 ms-6" />
                        <div className="flex items-center">
                            {/* <Notifications  className='hidden lg:block' /> */}
                            <MenuMobile />
                        </div>
                    </div>
                </div>
            </motion.div>
        </header>
    )
}
