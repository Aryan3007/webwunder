'use client'
import { useState } from 'react'
import { BsApple, BsGoogle, BsMicrosoft } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { loginSocial } from '@/services/login/actions'

// Define the provider types explicitly for TypeScript
type Provider = 'google' | 'apple' | 'azure'

// Define the shape of the SocialData objects
interface SocialDataItem {
    icon: JSX.Element
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
                description: (error as Error).message, // Ensure the error is typed as Error
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
            icon: <BsGoogle className="rounded-md bg-[#29292F] md:p-3 md:text-5xl lg:p-2 lg:text-4xl p-2 text-3xl" />,
            label: 'Sign in with Google',
            provider: 'google',
        },
        {
            icon: <BsApple className="rounded-md bg-[#29292F] md:p-3 md:text-5xl lg:p-2 lg:text-4xl p-2 text-3xl" />,
            label: 'Sign in with Apple',
            provider: 'apple',
        },
        {
            icon: <BsMicrosoft className="rounded-md bg-[#29292F] md:p-3 md:text-5xl lg:p-2 lg:text-4xl p-2 text-3xl" />,
            label: 'Sign in with Microsoft',
            provider: 'azure',
        },
    ]

    return (
        <div className="flex items-center justify-center gap-2 text-white">
            {socialData.map((data, i) => (
                <button
                    key={i}
                    disabled={loadingStates[data.provider]}
                    onClick={() => handleSocialLogin(data.provider)}
                    className="mb-4 w-full border-black"
                >
                    <div className="me-2 flex justify-center">
                        {data.icon}
                    </div>
                </button>
            ))}
        </div>
    )
}
