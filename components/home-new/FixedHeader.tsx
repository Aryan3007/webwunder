'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown, CircleUserRound, MoveUpRight } from 'lucide-react'
import CustomLanguageDropdown from '../CustomLanguageDropdown'
import { languageData } from '@/langauge'
import { paths } from '@/paths'
import { useEffect, useRef, useState } from 'react'
import Logo from '../common/logo'
import Menu from '../layout/home-template-new/menu'
import Header from '../layout/home-template-new/header'


export default function FixedHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [changeLanguage, setChangeLanguage] = useState<'de' | 'en'>('en')

  useEffect(() => {
      if (typeof window !== 'undefined') {
          const storedLang = localStorage.getItem('lang') as 'de' | 'en'
          if (storedLang) {
              setChangeLanguage(storedLang)
          }
      }
  }, [])


  useEffect(() => {
      const savedLang = localStorage.getItem('lang') as 'en' | 'de' | null;
      if (savedLang) {
          setChangeLanguage(savedLang);
      }
  }, []);


  if (!isVisible) {
    return null
  }

 
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#24252a] text-white z-[99999] animate-fadeIn">
      <Header/>
    </header>
  )
}