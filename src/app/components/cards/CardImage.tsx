import Image, { StaticImageData } from 'next/image'
import React from 'react'
import card_image from "@/assets/images/services/desarrollo_de_software_card.jpg";

interface CardImage {
    image: string | StaticImageData
    title: string
}

const CardImage = ({ image, title }: CardImage) => {
    return (
        <div className="h-[30rem] relative">
            <Image className="w-full h-full object-cover rounded-xl" src={card_image} alt="Desarrollo de Software" width={500} height={500} loading='lazy' />
            <h2 className="text-white text-4xl font-bold absolute bottom-10 left-10">{title}</h2>
        </div>
    )
}

export default CardImage