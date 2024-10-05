import axios from 'axios'
import type { Metadata } from 'next'
import { Archivo, DM_Sans, Inter, Figtree } from 'next/font/google'
import './cookie-scripts.scss'
import '@/assets/styles/scss/globals.scss'
import { Toaster } from '@/components/ui/toaster'
import en from '@/messages/en.json'
import de from '@/messages/de.json'

interface Props {
    children: React.ReactNode
}

// Import fonts
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

// Function to fetch locale based on IP
async function getLocaleFromIP(): Promise<'en' | 'de'> {
    try {
        const response = await axios.get('https://ipapi.co/json/')
        const country = response.data.country_code

        // Use 'de' for Germany, Belgium, Austria, and Switzerland, otherwise use 'en'
        const germanSpeakingCountries = ['DE', 'BE', 'AT', 'CH']
        return germanSpeakingCountries.includes(country) ? 'de' : 'en'
    } catch (error) {
        console.error('Failed to fetch IP location:', error)
        return 'de' // Default to 'en' in case of error
    }
}

export default async function RootLayout({ children }: Readonly<Props>) {
    const locale = await getLocaleFromIP()
    const messages: any = locale === 'de' ? de : en
    console.log('ayushayush', messages)

    const logo = `${process.env['HOST']}/webwunder-icon.png`
    const host = process.env['HOST']

    return (
        <html lang={locale} suppressHydrationWarning={true}>
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
                <meta
                    name="description"
                    content={messages.global['site-desc']}
                />
                <meta
                    name="keywords"
                    content="WebWunder, subscription website, web design, boost revenue, reduce costs, website management, SEO, design services, affordable web design, business website design"
                />
                <meta name="robots" content="max-image-preview:large" />
                <meta property="og:locale" content={locale} />
                <meta
                    property="og:site_name"
                    content={messages.global['site-title']}
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content={messages.global['site-title']}
                />
                <meta
                    property="og:description"
                    content={messages.global['site-desc']}
                />
                <meta property="og:url" content={host} />
                <meta property="og:image" content={logo} />
                <meta property="og:image:secure_url" content={logo} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={messages.global['site-title']}
                />
                <meta
                    name="twitter:description"
                    content={messages.global['site-desc']}
                />
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
        </html>
    )
}

export const runtime = 'edge'
