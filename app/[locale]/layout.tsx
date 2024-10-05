import type { Metadata } from 'next'
import { Archivo, DM_Sans, Inter, Figtree } from 'next/font/google'
import './cookie-scripts.scss'
import '@/assets/styles/scss/globals.scss'
import { Locale, i18n } from '@/i18n.config'
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Toaster } from '@/components/ui/toaster'

interface Props {
    params: { locale: Locale }
    children: React.ReactNode
}

const archivo = Archivo({
    subsets: ['latin'],
    variable: '--font-archivo',
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm-sans',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const figtree = Figtree({
    subsets: ['latin'],
    variable: '--font-figtree',
})

export function generateStaticParams() {
    return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('global')

    // SEO data for English
    const seoData = {
        title: "WebWunder - Websites That Deliver More Sales & Lower Costs",
        description: "Boost sales & cut costs with managed websites. Book a call today!",
        keywords: "WebWunder, subscription website, web design, boost revenue, reduce costs, website management, SEO, design services, affordable web design, business website design",
        ogDescription: "Turn your website into a revenue driver with WebWunder’s expert, subscription-based design.",
        logo: "/webwunder-icon.png", // Logo path
    }

    return {
        title: seoData.title,
        description: seoData.description,
        openGraph: {
            title: seoData.title,
            description: seoData.ogDescription,
            images: [
                {
                    url: seoData.logo,
                    alt: seoData.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: seoData.title,
            description: seoData.description,
            images: [seoData.logo],
        },
    }
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<Props>) {
    const t = useTranslations('global')
    const messages = useMessages()
    const logo = `${process.env['HOST']}/webwunder-icon.png`
    const host = process.env['HOST']

    return (
        <html lang={locale} suppressHydrationWarning={true}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <head>
                    <link rel="icon" href="/favicon.ico" sizes="any" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />

                    {/* SEO */}
                    <link rel="canonical" href={host} />
                    <meta name="description" content={t('site-desc')} />
                    <meta name="keywords" content="WebWunder, subscription website, web design, boost revenue, reduce costs, website management, SEO, design services, affordable web design, business website design" />
                    <meta name="robots" content="max-image-preview:large" />
                    <meta property="og:locale" content="en" />
                    <meta property="og:site_name" content={t('site-title')} />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content={t('site-title')} />
                    <meta property="og:description" content={t('site-desc')} />
                    <meta property="og:url" content={host} />
                    <meta property="og:image" content={logo} />
                    <meta property="og:image:secure_url" content={logo} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={t('site-title')} />
                    <meta name="twitter:description" content={t('site-desc')} />
                    <meta name="twitter:image" content={logo} />
                    {/* SEO */}
                </head>
                <body
                    className={`${dmSans.variable} ${archivo.variable} ${inter.variable} antialiased`}
                    suppressHydrationWarning={true}
                >
                    {children}
                    <div id="menu-section" />
                    <div id="modal-section" />
                    <Toaster />
                </body>
            </NextIntlClientProvider>
        </html>
    )
}

export const runtime = 'edge'
