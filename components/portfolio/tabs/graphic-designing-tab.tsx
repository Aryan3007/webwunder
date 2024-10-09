import React from 'react'
import ContentCard from '../content-card'

const tabItems = [
    {
        width: 'lg:w-[35rem] xl:w-[40rem] w-full',
        img: '/images/portfolio/graphic-design/design4.png',
        links:"",
        bgColor: '#E5322C',
        bgProps: 'bg-contain md:scale-100 scale-125 bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[30rem] xl:w-[35rem] w-full',
        img: '/images/portfolio/graphic-design/design5.png',
        links:"",
        bgColor: '#03FFFA',
        bgProps: 'bg-contain bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[65rem] xl:w-[76rem] w-full',
        img: '/images/portfolio/graphic-design/design6.png',
        links:"",
        bgColor: '#17202E',
        bgProps: 'bg-contain md:scale-90 bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[30rem] xl:w-[35rem] w-full',
        img: '/images/portfolio/graphic-design/design1.png',
        bgColor: '#37CBE5',
        links:"",
        bgProps: 'bg-contain scale-90 bg-center bg-no-repeat',
    },
    {
        width: 'lg:w-[35rem] xl:w-[40rem] w-full',
        img: '/images/portfolio/graphic-design/design2.png',
        links:"",
        bgColor: '#F93042',
        bgProps: 'bg-contain md:scale-125 scale-150 bg-center bg-no-repeat',
    },
]
const GraphicDesigningTab = () => {
    return (
        <div className="flex scale-100 flex-wrap items-center justify-center lg:gap-6 lg:scale-[85%] xl:max-w-[78rem] 2xl:scale-100">
            {tabItems.map((item, index) => (
                <ContentCard
                    key={index}
                    links={item.links}
                    width={item.width}
                    img={item.img}
                    bgColor={item.bgColor}
                    bgProps={item.bgProps}
                    isBtnVisible={false}
                    isGradient={false}
                />
            ))}
        </div>
    )
}

export default GraphicDesigningTab
