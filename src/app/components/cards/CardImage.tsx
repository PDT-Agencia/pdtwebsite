import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardImage {
    image: string | StaticImageData
    title: string
}

const CardImage = ({ image, title }: CardImage) => {
    return (
        <div className="h-[30rem] relative">
            <Image className="w-full h-full object-cover rounded-xl" src={image} alt="Service 1" width={500} height={500} loading='lazy' />
            <h2 className="text-white text-4xl font-bold absolute bottom-10 left-10">{title}</h2>
        </div>
    )
}

export default CardImage