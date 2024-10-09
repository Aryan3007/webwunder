import React from 'react'
import ContentCard from '../content-card'

const tabItems = [
    {
        width: 'lg:w-[30rem] xl:w-[35rem] w-full',
        img: '/images/portfolio/social-media/social1.png',
        bgProps: 'bg-cover bg-center bg-no-repeat',
        links:"",

    },
    {
        width: 'lg:w-[35rem] xl:w-[40rem] w-full',
        img: '/images/portfolio/social-media/social2.png',
        bgProps: 'bg-cover bg-center bg-no-repeat',
        links:"",

    },
    {
        width: 'lg:w-[65rem] xl:w-[76rem] w-full',
        img: '/images/portfolio/social-media/social3.png',
        links:"",

        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[35rem] xl:w-[40rem] w-full',
        img: '/images/portfolio/social-media/social4.svg',
        bgProps: 'bg-cover bg-center bg-no-repeat',
        links:"",

    },
    {
        width: 'lg:w-[30rem] xl:w-[35rem] w-full',
        img: '/images/portfolio/social-media/social5.png',
        links:"",
        bgProps: 'bg-cover bg-center bg-no-repeat',
    },
]

const SocialMediaTab = () => {
    return (
        <div className="flex scale-100 flex-wrap items-center justify-center lg:gap-6 lg:scale-[85%] xl:max-w-[78rem] 2xl:scale-100">
            {tabItems.map((item, index) => (
                <ContentCard
                    key={index}
                    width={item.width}
                    links={item.links}
                    img={item.img}
                    bgProps={item.bgProps}
                    isBtnVisible={false}
                    isGradient={false}
                />
            ))}
        </div>
    )
}

export default SocialMediaTab
