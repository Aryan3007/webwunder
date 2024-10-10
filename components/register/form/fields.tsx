'use client'
import { Checkbox } from '@/components/ui/checkbox'
import { RegisterFieldsSchema, RegisterFieldsType } from '@/schema/fields'
import { registerUser } from '@/services/registration/actions'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { paths } from '@/paths'
import { useToast } from '@/components/ui/use-toast'
import SpinnerSVG from '@/assets/icons/spinner.svg'

import { languageData } from '@/langauge'
import axios from 'axios'

const DefFormData: RegisterFieldsType = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

export const SignupForm = () => {
    const [terms, setTerms] = useState(false)
    const router = useRouter()

    const { toast } = useToast()
    const { reset, handleSubmit, formState, register, getValues } =
        useForm<RegisterFieldsType>({
            defaultValues: {
                ...DefFormData,
            },
            resolver: zodResolver(RegisterFieldsSchema),
        })

    const submit: SubmitHandler<RegisterFieldsType> = async (payload) => {
        if (!terms) {
            toast({
                title: 'Terms and Conditions ',
                description: `You must consent to your details being stored and processed to fulfill your request`,
                variant: 'destructive',
            })
            return
        }

        try {
            // submit here
            await registerUser(payload)
            toast({
                title: 'Registration Successfull!',
                description: `${getValues('firstName')} ${getValues('lastName')} successfully registered!`,
            })
            router.push(paths.pages.login.href)
            reset()
        } catch (error: any) {
            toast({
                title: 'Registration Failed!',
                description:
                    error?.message ??
                    'Something went wrong, please try again...',
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
        <form onSubmit={handleSubmit(submit)} className="lg:space-y-4 space-y-6">
            <div className="mb-4 flex lg:flex-row flex-col gap-3">
                <div className="lg:w-1/2 w-full">
                    <label className="mb-1 block font-inter text-sm font-bold text-white">
                        {languageData?.signupPage?.[changeLanguage]?.firstName}
                    </label>
                    <input
                        {...register('firstName')}
                        type="text"
                        className="w-full rounded-lg bg-[#FFFFFF] bg-opacity-10 shadow-md  border-2 border-zinc-600  px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                        placeholder={
                            languageData?.signupPage?.[changeLanguage]
                                ?.firstNamePlaceholder
                        }
                    />
                </div>
                <div className="lg:w-1/2 w-full">
                    <label className="mb-1 block font-inter text-sm font-bold text-white">
                        {languageData?.signupPage?.[changeLanguage]?.lastName}
                    </label>
                    <input
                        {...register('lastName')}
                        type="text"
                        className="w-full rounded-lg bg-[#FFFFFF] bg-opacity-10 shadow-md  border-2 border-zinc-600  px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                        placeholder={
                            languageData?.signupPage?.[changeLanguage]
                                ?.lastNamePlaceholder
                        }
                    />
                </div>
            </div>
            <div>
                <label className="mb-1 block font-inter text-sm font-bold text-white">
                    {languageData?.signupPage?.[changeLanguage]?.emailLabel}
                </label>
                <input
                    {...register('email')}
                    type="email"
                    className="w-full rounded-lg bg-[#FFFFFF] bg-opacity-10 shadow-md  border-2 border-zinc-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                    placeholder={
                        languageData?.signupPage?.[changeLanguage]
                            ?.emailPlaceholder
                    }
                />
            </div>
            <div>
                <label className="mb-1 block font-inter text-sm font-bold text-white">
                    {languageData?.signupPage?.[changeLanguage]?.passwordLabel}
                </label>
                <input
                    {...register('password')}
                    type="password"
                    className="w-full rounded-lg bg-[#FFFFFF] bg-opacity-10 shadow-md  border-2 border-zinc-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                    placeholder={
                        languageData?.signupPage?.[changeLanguage]
                            ?.passwordPlaceholder
                    }
                />
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox
                    checked={terms}
                    onCheckedChange={(state) => setTerms(!!state)}
                    name="terms"
                    id="terms"
                />
                <label
                    htmlFor="terms"
                    className="font-dm-sans text-sm font-normal leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {languageData?.signupPage?.[changeLanguage]?.agreeTerms}
                </label>
            </div>
            <button
                disabled={formState.isSubmitting}
                type="submit"
                className="w-full rounded-lg bg-[#5D59E1] py-3 font-archivo text-base font-normal text-white hover:bg-[#4a47d1] hover:scale-95 transition-all duration-100"
            >
                <div className="flex items-center justify-center">
                    {languageData?.signupPage?.[changeLanguage]?.signUpButton}

                    <SpinnerSVG
                        className={`ms-2 text-2xl ${formState.isSubmitting ? '' : 'hidden'}`}
                    />
                </div>
            </button>
        </form>
    )
}
