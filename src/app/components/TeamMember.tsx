import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface TeamMemberProps {
    name: string;
    rol: string;
    image: string | StaticImageData;
    url: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, rol, image, url }) => {
    const splitName = name.split(' ');
    return (
        <div className="flex items-end justify-center text-white relative    ">
            <div className='flex flex-col'>
            <Image src={image} alt={name} width={200} height={200} loading='lazy' className="relative z-10" />
            <div className='flex items-center'>
                <div className='w-[5px] h-[5px] bg-red-500 rounded-full'></div>
                <div className='w-full h-[1px] bg-red-500 rounded-full'></div>
                <div className='w-[5px] h-[5px] bg-red-500 rounded-full'></div>
            </div>
            </div>
            <div className='flex flex-col gap-5 pb-5'>
                <div className='flex flex-col gap-1'>
                <h4 className="text-2xl font-semibold mt-4">
                    {splitName.map((part, index) => (
                        <span key={index} className="block">
                            {part}
                        </span>
                    ))}
                </h4>
                <p className="text-white/80">{rol}</p>
                </div>
                <Link className='bg-red-500 w-40 text-center px-5 py-1 rounded-lg hover:bg-red-600 duration-300' href={url}>Ver más</Link>
            </div>
        </div>
    );
};

export default TeamMember;
