'use client'

import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { SvgCloseIcon, SvgHamburguerIcon } from '../svg/svgs';
import { usePathname, useSearchParams } from 'next/navigation';
import MenuSelect from './Select';
import LogoWhite from "../assets/logos/2.png"

interface HeaderProps {
  textColorMenu: string;
  textColor: string;
  logo: string | StaticImageData;
}

const Header: React.FC<HeaderProps> = ({ textColor, textColorMenu, logo }) => {
  const [navHamburguer, setNavHamburguer] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollDown(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full flex justify-center items-center fixed top-0 z-50 transition duration-300 ${scrollDown && !navHamburguer ? 'bg-black/95' : ''}`}
    >
      <div className='relative w-full max-w-[1440px] px-5 py-6 flex justify-between items-center gap-5'>
        <Link href="/" className={`${navHamburguer && 'hidden'}`}>
          <Image src={scrollDown ? LogoWhite : logo} alt='Logo' width={80} height={80} loading='lazy' />
        </Link>

        <ul className={`${scrollDown && textColor === 'text-black' ? "text-white" : !navHamburguer ? textColor : 'text-white'} pt-6 lg:pt-0 px-6  absolute right-0 w-full top-0 bottom-0 bg-black/95 sm:w-fit h-screen ${navHamburguer ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 lg:translate-x-0 lg:bg-transparent lg:flex lg:flex-row lg:items-center lg:h-full lg:relative lg:transition-none text-xl lg:text-lg flex flex-col items-center gap-10 lg:gap-5`}>
          <div className='flex justify-between items-center w-full lg:hidden'>
            <Link href="/" className={`${navHamburguer ? 'block' : 'hidden'} sm:hidden`}>
              <Image src={LogoWhite} alt='Logo' width={80} height={80} loading='lazy' />
            </Link>
            <button onClick={() => setNavHamburguer(false)}>
              <SvgCloseIcon size={40} />
            </button>
          </div>

          <div className={`w-full flex flex-col  text-center lg:flex-row gap-10 items-start mt-10 md:mt-10 lg:mt-0 lg:gap-5`}>
            <li className='block lg:hidden'>
              <Link className={`${pathname === '/' && 'bg-red-500 text-white py-1 px-4 hover:bg-red-600'} font-medium rounded-full`} href='/'>Inicio</Link>
            </li>
            <li>
              <Link className={`${pathname === '/services' && 'bg-red-500 text-white py-1 px-4 hover:bg-red-600'} font-medium rounded-full`} href='/services'>Nuestros Servicios</Link>
            </li>
            {/* <li>
              <Link className={`${pathname === '/portfolio' && 'bg-red-500 text-white py-1 px-4 hover:bg-red-600'} font-medium rounded-full`} href="/portfolio">Portafolio</Link>
            </li> */}
            <li>
              <div className={`${pathname === '/about' ? 'bg-red-500 text-white px-4 hover:bg-red-600' : pathname === '/about-team' ? 'bg-red-500 text-white px-4 hover:bg-red-600' : ''} font-medium rounded-full`}>
                <MenuSelect color={textColor} colorIcon={textColorMenu} scroll={scrollDown} navHamburguer={navHamburguer} />
              </div>
            </li>
            <li>
              <Link className={`${pathname === '/blog' && 'bg-red-500 text-white py-1 px-4 hover:bg-red-600'} font-medium rounded-full`} href="/blog">Blog</Link>
            </li>
            <li>
              <Link
                className={`${pathname === '/contact' && 'bg-red-500 text-white py-1 px-4 hover:bg-red-600'} font-medium rounded-full`}
                href="/contact"
              >Contáctanos
              </Link>
            </li>

          </div>
        </ul>

        <button className={`lg:hidden ${navHamburguer && 'hidden'}`} onClick={() => setNavHamburguer(true)}>
          <SvgHamburguerIcon size={40} color={scrollDown && textColorMenu === '#000' ? '#fff' : textColorMenu} />
        </button>
      </div>
    </header>
  )
}

export default Header;
