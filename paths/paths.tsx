import { ReactNode } from 'react'
import SettingsSVG from '@/assets/icons/settings-01.svg'
import UserSVG from '@/assets/icons/user-01.svg'
import PackageSVG from '@/assets/icons/package.svg'
import ReceiptCheckSVG from '@/assets/icons/receipt-check.svg'
import BarChartSVG from '@/assets/icons/bar-chart-square-02.svg'

// Define the URI type
interface UriType {
    href: string
    name: string
    icon?: ReactNode
}

// Public routes
const others = {
    login: {
        href: '/login',
        name: 'Login',
    },
    error: {
        href: '/error',
        name: 'Error',
    },
    signUp: {
        href: '/signup',
        name: 'Signup',
    },
    bookCall: {
        href: process.env.NEXT_PUBLIC_CALENDLY_BOOKING || '/#get-in-touch',
        name: 'Book a Call',
    },
    getInTouch: {
        href: '/#get-in-touch',
        name: 'Get in Touch',
    },
    terms: {
        href: '/terms',
        name: 'Terms & Conditions',
    },
    privacy: {
        href: '/privacy-policy',
        name: 'Privacy Policy',
    },
    cookie: {
        href: '/cookie-policy',
        name: 'Cookie Policy',
    },
    imprint: {
        href: '/imprint',
        name: 'Imprint',
    },
    resetPassword: {
        href: '/reset-password',
        name: 'Reset Password',
    },
} as const

// Authenticated routes
const auth = {
    loginSuccess: {
        href: '/api/auth/login/success',
        name: 'Login Success',     
    },
    settings: {
        href: '/auth/client/settings',
        name: 'Settings',
        icon: <SettingsSVG />,
    },
    profile: {
        href: '/auth/client/profile',
        name: 'Personal Information',
        icon: <UserSVG />,
    },
    afterCheckout: {
        href: '/auth/client/package/purchase/thank-you',
        name: 'Thank you',
    },
    viewProject: {
        href: '/auth/client/projects/view',
        name: 'View Project',
    },
    clientDashboard: {
        href: '/auth/client/dashboard',
        name: 'Dashboard',
        icon: <BarChartSVG />,
    },
} as const

// Packages
const packages = {
    websiteStandard: {
        href: '/auth/client/package/purchase/website/standard',
        name: 'Website Plan: Standard',
    },
    websitePro: {
        href: '/auth/client/package/purchase/website/pro',
        name: 'Website Plan: Pro',
    },
    serviceStandard: {
        href: '/auth/client/package/purchase/service/standard',
        name: 'Service Plan: Standard',
    },
    servicePro: {
        href: '/auth/client/package/purchase/service/pro',
        name: 'Service Plan: Pro',
    },
    unlimitedPro: {
        href: '/auth/client/package/purchase/unlimited/pro',
        name: 'Unlimited Plan: Pro',
    },
} as const

// Main menu
const mainMenu = {
    contact: {
        href: '/#join-webwunder',
        name: 'Contact',
    },
    howItWorks: {
        href: '/#how-it-works',
        name: 'How it works',
    },
    benefits: {
        href: '/#benefits',
        name: 'Benefits',
    },
    service: {
        href: '/#service',
        name: 'Services',
    },
    pricing: {
        href: '/#pricing',
        name: 'Pricing',
    },
    portfolio: {
        href: '/portfolio',
        name: 'Portfolio',
    },
    faq: {
        href: '/#faq',
        name: 'FAQs',
    },
} as const

// new main menu
const newMainMenu = {
    benefits: {
        href: '/#benefits',
        name: 'Benefits',
    },
    yourWebsite: {
        href: '/#your-website',
        name: 'Your Website',
    },
    prices: {
        href: '/#prices',
        name: 'Prices',
    },
    portfolio: {
        href: '/portfolio',
        name: 'Portfolio',
    },
    faq: {
        href: '/#faq',
        name: 'FAQs',
    },
    contact: {
        href: '/#join-webwunder',
        name: 'Contact',
    },
} as const

// Backoffice menu
const backofficeMenu = {
    clientProjects: {
        href: '/auth/client/projects',
        name: 'Projects',
        icon: <BarChartSVG />,
    },
    purchasePackage: {
        href: '/auth/client/package/purchase',
        name: 'Purchase Package',
        type: 'backoffice',
        icon: <PackageSVG />,
    },
    billing: {
        href: '/auth/client/billing',
        name: 'Billing',
        icon: <ReceiptCheckSVG />,
    },
} as const

// Admin menu
const adminMenu = {
    projects: {
        href: '/auth/admin/projects',
        name: 'Admin Projects',
    },
    messages: {
        href: '/auth/admin/messages',
        name: 'User Messages',
    },
    // editProject: {
    //     href: '/auth/admin/projects/edit',
    //     name: 'Edit Project',
    // },
} as const

// Consolidating paths
const paths = {
    pages: {
        ...others,
        ...mainMenu,
        ...backofficeMenu,
        ...auth,
        ...packages,
        admin: {
            ...adminMenu,
        },
    },
    menu: {
        admin: adminMenu,
        main: mainMenu,
        newMain: newMainMenu,
        backoffice: backofficeMenu,
    },
}

export { paths }
