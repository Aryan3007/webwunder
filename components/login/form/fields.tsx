'use client'

import { paths } from '@/paths'
import { useToast } from '@/components/ui/use-toast'
import { createClient } from '@/lib/supabase/client'

import {
    EmailSchema,
    LoginFieldsSchema,
    LoginFieldsType,
} from '@/schema/fields'
import { loginUser } from '@/services/login/actions'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { languageData } from '@/langauge'
import axios from 'axios'
const DefFormData: LoginFieldsType = {
    email: '',
    password: '',
}

export const LoginForm = () => {
    const supabase = createClient()
    const { toast } = useToast()
    const router = useRouter()
    const { handleSubmit, formState, register, setError, getValues, trigger } =
        useForm<LoginFieldsType>({
            defaultValues: {
                ...DefFormData,
            },
            resolver: zodResolver(LoginFieldsSchema),
        })

    const [isRedirecting, setIsRedirecting] = useState(false)

    const submit: SubmitHandler<LoginFieldsType> = async (payload) => {
        setIsRedirecting(false)
        try {
            // submit here
            const { error } = await loginUser({
                email: payload.email,
                password: payload.password,
            })

            if (error) {
                toast({
                    title: 'Login Failed',
                    description: error,
                    variant: 'destructive',
                })
                return
            }

            toast({
                title: 'Login Successfull',
                description: `You have successfully logged in!`,
            })
            setIsRedirecting(true)
            router.push(paths.pages.loginSuccess.href)
        } catch (error) {
            setError('root', {
                message: 'Something went wrong, please try again...',
            })
            setIsRedirecting(false)
        }
    }

    // Forgot Password
    const [isResetting, setIsResetting] = useState(false)
    const [isResettingSuccess, setIsResettingSuccess] = useState(false)
    const sendResetPassword = async () => {
        if (isResetting) return

        try {
            const email = getValues('email')
            trigger('email')
            const { success } = EmailSchema.safeParse({
                email,
            })

            if (!success) {
                toast({
                    title: 'Forgot Password',
                    description: `Invalid Email Address`,
                    variant: 'destructive',
                })
                return
            }

            // send reset email here
            setIsResetting(true)
            const { error } = await supabase.auth.resetPasswordForEmail(email)
            // await waits(2000)
            if (error) {
                console.error(error)
                throw error
            }

            toast({
                title: 'Forgot Password Email Sent',
                description: `Please check your email.`,
                variant: 'success',
            })
            setIsResetting(false)
        } catch (error) {
            setIsResetting(false)
            toast({
                title: 'Password Reset Failed',
                description: `Something went wrong, please try again...`,
                variant: 'destructive',
            })
        }
    }
    const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en') // Initialize with default value

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'de' | 'en'
            if (storedLang) {
                setChangeLanguage(storedLang) // Set state from localStorage after component mounts
            }
        }
    }, [])
    return (
        <form
            onSubmit={handleSubmit(submit)}
            className={`lg:w-full px-2 ${changeLanguage === 'de' ? 'w-full' : 'w-auto'}  lg:space-y-3 space-y-6`}
        >
            <div>
                <label className="mb-1 block font-inter text-sm font-bold text-white">
                    {languageData?.loginPage?.[changeLanguage]?.emailLabel}{' '}
                </label>
                <input
                    {...register('email')}
                    type="email"
                    className="w-full rounded-lg bg-[#FFFFFF] bg-opacity-10 shadow-md  border-2 border-zinc-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none active:bg-[#908AA0]/50"
                    placeholder={
                        languageData?.loginPage?.[changeLanguage]
                            ?.emailPlaceholder
                    }
                />
                <p className="ps-4 text-destructive">
                    {formState.errors.email?.message}
                </p>
            </div>
            <div>
                <label className="mb-1 block font-inter text-sm font-bold text-white">
                    {languageData?.loginPage?.[changeLanguage]?.passwordLabel}{' '}
                </label>
                <input
                    {...register('password')}
                    type="password"
                    className="w-full rounded-lg bg-[#FFFFFF] bg-opacity-10 shadow-md  border-2 border-zinc-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                    placeholder={
                        languageData?.loginPage?.[changeLanguage]
                            ?.passwordPlaceholder
                    }
                />
                <p className="ps-4 text-destructive">
                    {formState.errors.password?.message}
                </p>
            </div>
            <div className="">
                <div
                    onClick={sendResetPassword}
                    className="cursor-pointer font-archivo text-base font-semibold text-[#5D59E1]"
                >
                    {' '}
                    {languageData?.loginPage?.[changeLanguage]?.forgotPassword}
                </div>
            </div>
            <button
                disabled={formState.isSubmitting || isRedirecting}
                type="submit"
                className="w-full rounded-lg hover:scale-95  bg-[#5D59E1] py-3 font-archivo text-base font-normal text-white transition duration-300 hover:bg-[#4a47d1]"
            >
                {languageData?.loginPage?.[changeLanguage]?.loginButton}
            </button>
        </form>
    )
}
