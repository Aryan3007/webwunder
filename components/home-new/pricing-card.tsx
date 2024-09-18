import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '../ui/badge'

interface PricingCardProps {
    icon: string
    iconBg: string
    title: string
    description: string
    price: number
    setupFee: number
    features: string[]
    ctaText?: string
    onSignUp?: () => void
    isCenter?: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({
    icon,
    iconBg,
    title,
    description,
    price,
    setupFee,
    features,
    ctaText,
    onSignUp,
    isCenter = false,
}) => {
    return (
        <Card className={`flex flex-col rounded-3xl justify-between border-[#D9D9D9] bg-[#191919] text-white ${isCenter ? 'h-[1060px]' : 'h-full'}`}>
            <div className="flex flex-col">
                <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col items-start space-y-2">
                            <div
                                className={`flex h-fit w-fit rounded-full p-2 ${iconBg}`}
                            >
                                <Image
                                    src={icon}
                                    alt={title}
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <p className="font-inter text-2xl font-semibold text-white">
                                {title}
                            </p>
                        </div>
                        {ctaText && (
                            <Badge className="rounded-full bg-[#5D59E1] px-2 font-archivo text-sm font-normal text-white">
                                {ctaText}
                            </Badge>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                    <div className="leading-none">
                        <div className="font-inter text-[70px] font-semibold text-white">
                            €{price}
                            <span className="font-inter text-base font-normal text-white">
                                /month
                            </span>
                        </div>
                        <div className="font-inter text-xl font-semibold text-white">
                            €{setupFee} Setup Fee
                        </div>
                    </div>
                    <p className="font-inter text-base font-normal text-white/50">
                        {description}
                    </p>
                    <div className="space-y-2">
                        <p className="font-inter text-base font-bold text-white">
                            What You Get:
                        </p>
                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2"
                                >
                                    <div className="flex h-fit w-fit items-center justify-center rounded-full bg-[#46B277] p-1">
                                        <Check
                                            size={12}
                                            className="font-extrabold text-black"
                                        />
                                    </div>
                                    <span className="font-inter text-base font-normal leading-none text-white/50">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </div>
            <CardFooter className="flex flex-col space-y-2">
                <Button
                    size={'md'}
                    className="w-full rounded-full bg-[#5D59E1] font-inter text-base font-semibold text-white"
                    onClick={onSignUp}
                >
                    Sign Me Up!
                </Button>
                <Button
                    size={'md'}
                    className="w-full rounded-full bg-transparent font-inter text-base font-normal text-white/50"
                >
                    Cancel Anytime
                </Button>
            </CardFooter>
        </Card>
    )
}

export default PricingCard