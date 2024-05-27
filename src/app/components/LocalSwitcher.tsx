'use client'

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';
import { SvgArrowIcon } from '../svg/svgs';

interface Color {
    color: string;
    colorIcon: string;
    scroll: boolean;
    navHamburguer: boolean;
}

export default function LocaleSwitcher({ colorIcon, color, scroll, navHamburguer }: Color) {
    const router = useRouter()
    const [startTransition] = useTransition()
    const [active, setActive] = useState(false)
    const localActive = useLocale()

    const changeLocale = (language: string) => {
        const nextLocale = language;
        router.replace(`/${nextLocale}`)
    };

    return (
        <div className="relative">
            <span onClick={() => setActive(!active)} className={`${scroll && color === 'text-black' ? "text-white" : !navHamburguer ? color : 'text-white'}  flex gap-1 items-center px-3 cursor-pointer rounded-lg text-black`}>{localActive === 'es' ? 'Espanol' : 'English'}
                <div className='rotate-90'>
                    <SvgArrowIcon size={15} color={scroll && colorIcon === '#000' ? '#fff' : !navHamburguer ? colorIcon : '#fff'} />
                </div>
            </span>
            <div className={`flex flex-col gap-3 px-2 py-3 rounded-md top-7 w-full absolute duration-300 bg-black/80 text-white  transition ${active ? 'opacity-100 translate-y-3' : 'opacity-0 -translate-y-0 pointer-events-none'}`}>
                <div
                    className={`w-full cursor-pointer rounded-md ${localActive === 'en' ? 'active' : ''}`}
                    onClick={() => changeLocale('en')}
                >
                    English
                </div>
                <div
                    className={`w-full cursor-pointer rounded-md ${localActive === 'es' ? 'active' : ''}`}
                    onClick={() => changeLocale('es')}
                >
                    Español
                </div>
            </div>
        </div>
    );
}
