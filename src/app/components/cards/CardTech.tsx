import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardUrl {
    url: string
    image: string | StaticImageData
    title: string
    description: string
}

const CardTech = ({ url, image, title, description }: CardUrl) => {
    return (
        <Link href={url} className="w-full md:w-[20rem] h-[26rem] 2xl:w-[20rem] rounded-2xl relative overflow-hidden hover:scale-105 duration-300">
            <Image
                className="w-full h-full object-cover object-center rounded-2xl"
                src={image}
                alt="Card"
                loading='lazy'
                width={300}
                height={300}
            />
            <div className="flex gap-3 ps-3 pb-3 absolute bottom-0 z-20 h-fit text-white">
                <div className="w-0.5 rounded-full bg-white h-16"></div>
                <div className="flex flex-col">
                    <h2 className="flex flex-col text-xl font-extralight">
                        {title}
                        <span className="font-bold">{description}</span>
                    </h2>
                </div>
            </div>
            <div
                className="w-full h-20 bg-gradient-to-t from-red-400/50 absolute bottom-0"
            ></div>
        </Link>
    )
}

export default CardTech