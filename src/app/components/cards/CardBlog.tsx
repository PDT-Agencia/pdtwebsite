import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'

interface CardBlogProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    url: string;
}

const CardBlog: React.FC<CardBlogProps> = ({ title, description, image, url }) => {
    return (
        <div className='flex flex-col gap-3'>
        <div className='relative text-white'>
            <Link href={url} className='bg-red-500 text-center py-2 px-5 w-32 rounded-lg absolute top-3 right-3 hover:bg-red-600 duration-200'>Ver más</Link>
            <Image src={image} alt='Card' width={700} height={700} loading='lazy' />
            <h2 className='absolute bottom-5 left-5 right-5 font-bold z-10'>{title}</h2>
            <div className='absolute bottom-0 w-full h-20 bg-gradient-to-t from-red-400/70'></div>
        </div>
        <p className='font-extralight overflow-hidden line-clamp-3'>
            {description}
        </p>
    </div>
    )
}

export default CardBlog