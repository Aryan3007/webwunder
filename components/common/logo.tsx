import { Locale } from "@/i18n.config"
import { cn } from "@/lib/utils"
import { useLocale } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { ComponentProps } from "react"

interface Props extends ComponentProps<'img'> { }

export default function Logo({ className }: Props) {

    const locale = useLocale() as Locale

    const logo ={
        src: '/assets/webwunder-logo.png',
    }


    const classn = cn(['', className])
    return (
        <Link href={`/`}>
            <Image src="./images/logo.svg"
                className={classn}
                alt="WebWunder Logo"
                width="225"
                height="17" />
        </Link>
    )
}