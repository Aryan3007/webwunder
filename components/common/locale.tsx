"use client"
import { Switch } from "@/components/ui/switch"


import EnSVG from "@/assets/icons/locale/en.svg"
import DeSVG from "@/assets/icons/locale/de.svg"
import { useLocale } from "next-intl"
import { useParams } from "next/navigation"
import { lang, type Locale } from "@/i18n.config"
import { ReactNode, useState, useTransition } from "react"
import { cn } from "@/lib/utils"
import { useRouter, Link, usePathname } from "@/services/navigation"

export default function LocaleSwitcher({ className, ...props }: Props) {

    const locale = useLocale() as Locale;

    const params = useParams()
    const router = useRouter();
    const pathname = usePathname();

    const [isPending, startTransition] = useTransition();

    function switchLocale(nextLocale: Locale) {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }


    const langs: { [key in Locale]: { title: string, icon: ReactNode } } = {
        en: {
            title: "EN",
            icon: <EnSVG className="text-2xl" />,
        },
        de: {
            title: "DE",
            icon: <DeSVG className="text-2xl" />
        }
    }

    const [isOn, setIsOn] = useState(locale === 'de' ? true : false)

    const handler = () => {
        if (isPending) return
        setIsOn(e => !e)
        switchLocale(isOn ? 'en' : 'de')
    }

    return (
        <div {...props}
            onClick={handler}
            className={cn('flex items-center cursor-pointer ', className)}>
            <div
                className="text-primary-foreground 
                        flex items-center w-full px-4 py-2">
                {langs.en.icon} &nbsp;&nbsp;
                <span className="font-bold">{langs.en.title}</span>
            </div>
            <Switch
                disabled={isPending}
                className="!bg-primary mx-1"
                checked={isOn}

            />
            <div
                className="text-primary-foreground 
                        flex items-center w-full px-4 py-2">
                {langs.de.icon} &nbsp;&nbsp;
                <span className="font-bold">{langs.de.title}</span>
            </div>
        </div>
    )

}