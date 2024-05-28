'use client'

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { SvgArrowIcon } from '../svg/svgs';
import Link from 'next/link';

interface Color {
    color: string;
    colorIcon: string;
    scroll: boolean;
    navHamburguer: boolean;
}

export default function MenuSelect({ colorIcon, color, scroll, navHamburguer }: Color) {
    const [active, setActive] = useState(false)

    const pathname = usePathname();

    return (
        <div className="relative">
            <span onClick={() => setActive(!active)} className={`${scroll && color === 'text-black' ? "text-white" : !navHamburguer ? color : 'text-white'}  flex gap-1 items-center cursor-pointer rounded-lg text-black`}>{pathname === '/about' ? 'Nosotros' : 'Equipo'}
                <div className='rotate-90'>
                    <SvgArrowIcon size={15} color={scroll && colorIcon === '#000' ? '#fff' : !navHamburguer ? colorIcon : '#fff'} />
                </div>
            </span>
            <div className={`flex flex-col gap-8 lg:gap-3 px-3 lg:px-5 py-8 lg:py-3 w-32 rounded-md top-7 left-0 lg:-left-7 absolute duration-300 bg-black/90 md:bg-black/80 text-white  transition ${active ? 'opacity-100 translate-y-3' : 'opacity-0 -translate-y-0 pointer-events-none'}`}>
                <Link href="/about"
                    className={`w-full cursor-pointer rounded-md select-none text-start lg:text-center`}>
                    Nosotros
                </Link>
                <Link href="/about-team"
                    className={`w-full cursor-pointer rounded-md select-none text-start lg:text-center`}
                >
                    Equipo
                </Link>
            </div>
        </div>
    );
}
