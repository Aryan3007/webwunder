'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { loginSocial } from '@/services/login/actions'

// Define the provider types explicitly for TypeScript
type Provider = 'google' | 'apple' | 'azure'

// Define the shape of the SocialData objects
interface SocialDataItem {
    imageSrc: string
    altText: string
    label: string
    provider: Provider
}

export default function Socials() {
    const { toast } = useToast()
    const router = useRouter()

    // State management with explicit typing for providers
    const [loadingStates, setLoadingStates] = useState<Record<Provider, boolean>>({
        google: false,
        apple: false,
        azure: false,
    })

    const handleSocialLogin = async (provider: Provider) => {
        setLoadingStates((prevState) => ({ ...prevState, [provider]: true }))
        try {
            const result = await loginSocial(provider)
            if (result?.error) {
                throw new Error(result.error.message)
            }
            // Successful login can redirect to dashboard or other action
            // e.g., router.push('/dashboard')
        } catch (error) {
            toast({
                title: 'Login Failed',
                description: (error as Error).message,
                variant: 'destructive',
            })
        } finally {
            setLoadingStates((prevState) => ({
                ...prevState,
                [provider]: false,
            }))
        }
    }

    // Social login data
    const socialData: SocialDataItem[] = [
        {
            imageSrc: '/google.svg',
            altText: 'Google Logo',
            label: 'Sign in with Google',
            provider: 'google',
        },
        {
            imageSrc: '/window.svg',
            altText: 'Microsoft Logo',
            label: 'Sign in with Microsoft',
            provider: 'azure',
        },
        {
            imageSrc: '/apple.svg',
            altText: 'Apple Logo',
            label: 'Sign in with Apple',
            provider: 'apple',
        },
    ]

    return (
        <div className='flex text-zinc-500 flex-col gap-3'>
            {socialData.map((data, i) => (
                <div
                    key={i}
                    className='flex gap-3 hover:scale-95 transition-all duration-150 h-12 w-full rounded-lg capitalize text-left px-4 bg-[#24252a]'
                >
                    <Image src={data.imageSrc} alt={data.altText} width={25} height={25} />
                    <button
                        disabled={loadingStates[data.provider]}
                        onClick={() => handleSocialLogin(data.provider)}
                        className='capitalize text-left w-full'
                    >
                        {data.label}
                    </button>
                </div>
            ))}
        </div>
    )
}
