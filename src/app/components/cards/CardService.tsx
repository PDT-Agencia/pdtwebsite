import React from 'react'

interface Service {
    title: string
    description: string
}

const CardService = ({ title, description }: Service) => {
    return (
        <div className="flex flex-col items-center gap-1 w-[24rem] md:items-start">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-base font-light text-center text-white/70 md:text-start">{description}</p>
        </div>
    )
}

export default CardService