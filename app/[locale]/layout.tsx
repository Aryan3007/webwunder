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

export async function generateMetadata() {
    try {
        // Fetch the user's country information based on IP
        const response = await axios.get('https://ipapi.co/json/')
        const country = response.data.country_code

        // Determine locale based on the country code
        const germanSpeakingCountries = ['DE', 'BE', 'AT', 'CH']
        const locale = germanSpeakingCountries.includes(country) ? 'de' : 'en'

        // Initialize metadata based on locale
        let title = 'Not Available'
        let description = ''
        let imageUrl =
            'https://res.cloudinary.com/dacn52tbe/image/upload/v1728158034/centerimage_t4imck.png'

        if (locale === 'de') {
            // Set German metadata
            title = de.global['site-title']
            description = de.global['site-desc']
        } else {
            // Set English metadata
            title = en.global['site-title']
            description = en.global['site-desc']
        }
        console.log('localelocale', country)

        // Return metadata for the page
        return {
            title: title,
            description: description,
            openGraph: {
                title: title,
                description: description,
                images: [
                    {
                        url: imageUrl,
                        alt: 'Default Image',
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: title,
                description: description,
                images: [imageUrl],
            },
        }
    } catch (error) {
        let title = de.global['site-title']
        let description = de.global['site-desc']
        let imageUrl =
            'https://res.cloudinary.com/dacn52tbe/image/upload/v1728158034/centerimage_t4imck.png'

        return {
            title: title,
            description: description,
            openGraph: {
                title: title,
                description: description,
                images: [
                    {
                        url: imageUrl,
                        alt: 'Default Image',
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: title,
                description: description,
                images: [imageUrl],
            },
        }
    }
}

export default async function RootLayout({ children }: Readonly<Props>) {
    const locale = 'en'

    return (
        <html lang={locale} suppressHydrationWarning={true}>
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
