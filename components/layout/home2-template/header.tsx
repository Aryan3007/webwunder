'use client'

import Menu from './menu'
import Logo from '@/components/common/logo'
import NextTopLoader from 'nextjs-toploader'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Header() {
    const viewHolder = useRef(null)
    const init = useRef(false)
    useEffect(() => {
        init.current = true
    }, [])

    // const isInView = useInView(viewHolder)
    // const isScrolling = useMemo(() => {
    //     return init.current && !isInView
    // }, [isInView])

    const isScrolling = false

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

    let animDivProps: any = {
        initial: 'hide',
        animate: 'animateState',
        variants: variants,
        transition: {
            bounce: 0,
            duration: 0.3,
            delay: 0,
        },
    }

    return (
        <>
            <div
                ref={viewHolder}
                className="absolute top-[100px] -z-50 w-full bg-transparent"
            ></div>
            <header
                className={`relative z-10 flex w-full flex-col items-center justify-between`}
            >
                <NextTopLoader color="hsl(241 77% 63%)" showSpinner={false} />

                <motion.div
                    {...animDivProps}
                    className={`z-20 flex w-full flex-col bg-transparent ${isScrolling ? 'fixed top-2 lg:top-2' : ''}`}
                >
                    <div
                        className={`container flex w-full items-center justify-between px-4 py-2`}
                    >
                        <div
                            className={`flex w-full items-center justify-between rounded-xl bg-white ${isScrolling ? 'border shadow-lg' : ''}`}
                        >
                            <Logo className="my-4 ms-6" />
                            <div className="flex items-center">
                                <Menu />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </header>
        </>
    )
}
