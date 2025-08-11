import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardBlogProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    url: string;
}

const CardBlog: React.FC<CardBlogProps> = ({ title, description, image, url }) => {
    const isStatic = typeof image !== 'string';
    return (
        <div className="flex flex-col gap-3">
            <div className="relative text-white rounded-xl overflow-hidden group">
                <div className="relative w-full aspect-[16/9]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                        placeholder={isStatic ? 'blur' : 'empty'}
                        blurDataURL={isStatic ? (image as StaticImageData).blurDataURL : undefined}
                        priority={false}
                    />
                </div>
                <Link
                    href={url}
                    className="bg-red-500 text-center py-2 px-5 w-32 rounded-lg absolute top-3 right-3 hover:bg-red-600 duration-200 z-20"
                >
                    Ver más
                </Link>
                <h2 className="absolute bottom-5 left-5 right-5 font-bold z-10 drop-shadow">
                    {title}
                </h2>
                <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <p className="font-extralight overflow-hidden line-clamp-3">
                {description}
            </p>
        </div>
    );
};

export default CardBlog;
