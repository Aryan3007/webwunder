import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface TagProps {
    tagName: string
    tagColor: string
}

interface PortfolioProps {
    width: string
    img: string
    links: string
    bgColor?: string
    tags?: TagProps[]
    title?: string
    project?: string
    bgGradient?: string
    bgProps?: string
    isBtnVisible: boolean
    isGradient?: boolean
}

const ContentCard: React.FC<PortfolioProps> = ({
    width,
    img,
    bgColor,
    links,
    tags,
    title,
    project,
    bgGradient,
    bgProps,
    isBtnVisible,
    isGradient,
}) => {
    return (
        <Card
            className={`${width} relative my-4 h-[400px] overflow-hidden rounded-3xl border-none outline-none transition-all hover:shadow-lg lg:my-0 lg:h-[600px]`}
            style={{
                background: isGradient
                    ? `linear-gradient(to bottom, ${bgColor}, black)`
                    : `${bgColor}`,
            }}
        >
            {isGradient && (
                <div className={`absolute  inset-0 z-10 ${bgGradient}`} />
            )}
            <div
                className={`absolute inset-0 flex w-full items-end ${bgProps}`}
                style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute bottom-0 flex flex-col items-start gap-3 p-10">
                <div className="z-10 flex flex-wrap gap-2">
                    {tags &&
                        tags.map((tag, index) => (
                            <Badge
                                key={index}
                                className={`${tag.tagColor} px-2 py-1 font-inter text-[10px] font-bold text-black lg:p-2`}
                            >
                                {tag.tagName}
                            </Badge>
                        ))}
                </div>
                <p className="z-10 font-archivo text-[30px] font-bold leading-none text-white lg:text-[40px]">
                    {title}
                </p>
                {isBtnVisible && (
                    <Link href={links} className="z-20">

                        <button className="z-20 flex w-fit flex-row items-center justify-between gap-6 rounded-full bg-[#24252A] p-2">
                            <p className="ml-4 font-archivo text-sm font-medium text-white lg:text-[15px]">
                                View Project
                            </p>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white lg:h-8 lg:w-8">
                                <ArrowRight
                                    size={18}
                                    fontWeight={100}
                                    className="text-[#24252A]"
                                />
                            </div>
                        </button>
                    </Link>
                )}
            </div>
            {/* </div> */}
        </Card>
    )
}

export default ContentCard
