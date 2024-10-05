// import { useLocale } from 'next-intl'
import Header from './home2-template/header'
import Footer from './home2-template/footer'
import Script from 'next/script'
import React from 'react'
interface Props {
    children: React.ReactNode
}

export default function HomeLayoutTemplate({
    children,
    disableCookiePermission,
}: Readonly<Props> & { disableCookiePermission?: boolean }) {
    return (
        <>
            {/* <Header /> */}
            <main>{children}</main>

            {/* cookie permission */}
            {!disableCookiePermission ? (
                <Script
                    src="https://cdn.cookie-script.com/s/d96cb94f07da188f4bf1536be7602d9f.js"
                    strategy="lazyOnload"
                />
            ) : null}
            {/* <Footer /> */}
        </>
    )
}
