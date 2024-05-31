import Link from 'next/link'
import React from 'react'
import { SvgFacebookIcon, SvgInstagramIcon, SvgLinkedInIcon, SvgQuestionIcon, SvgTikTokIcon, SvgWhatsAppIcon, SvgWorkIcon, SvgYouTubeIcon } from '../svg/svgs'

const Footer = () => {
  return (
    <footer className='bg-black text-white  flex items-center justify-center z-40 relative'>
      <div className='max-w-[1440px] py-8 px-5 flex flex-col md:flex-row md:px-10 md:py-12 gap-5'>
        <div className='flex flex-col gap-3 w-full'>
          <h3 className='font-semibold text-xl'>Somos PDT.</h3>
          <p className='opacity-75'>Innovamos productos manufacturados empoderados de manera objetiva mientras predominan plataformas paralelas. Reinventamos de manera holística procedimientos de prueba extensibles para cadenas de suministro confiables. Nos comprometemos drásticamente con servicios web de primera línea frente a entregables de vanguardia.</p>
        </div>
        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold text-xl'>Acceso</h3>
          <ul className='opacity-75 w-40'>
            <li><Link className='hover:underline' href="/services" >Nuestros Servicios</Link></li>
            <li><Link className='hover:underline' href="/portfolio" >Portafolio</Link></li>
            <li><Link className='hover:underline' href="/about">Acerca de</Link></li>
            <li><Link className='hover:underline' href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
              <h3 className='font-semibold text-xl'>Contáctanos</h3>
              <ul className='opacity-75 flex flex-col gap-5'>
                <li><Link href='/'>Av. El Poblado #5A-113, El Poblado, Medellín, El Poblado, Medellín, Antioquia</Link></li>
                <li><Link href='/'>pdtcomunicaciones@pdtagencia.com</Link></li>
              </ul>


            </div>
            <div className='flex flex-col items-center md:items-start gap-3'>
              <h3 className='font-semibold text-xl'>Síguenos en:</h3>
              <div className='flex gap-2'>
                <Link href='https://www.instagram.com/agenciademediospdt/' target="_blank" className='bg-red-500 hover:bg-red-600 duration-200 w-fit p-3 rounded-full'><SvgInstagramIcon size={20} /></Link>
                
                {/* <Link href='/' className='bg-red-500 hover:bg-red-600 duration-200 w-fit p-3 rounded-full'><SvgFacebookIcon size={20} /></Link>
              <Link href='/' className='bg-red-500 hover:bg-red-600 duration-200 w-fit p-3 rounded-full'><SvgLinkedInIcon size={20} /></Link>
              <Link href='/' className='bg-red-500 hover:bg-red-600 duration-200 w-fit p-3 rounded-full'><SvgTikTokIcon size={20} /></Link>
              <Link href='/' className='bg-red-500 hover:bg-red-600 duration-200 w-fit p-3 rounded-full'><SvgYouTubeIcon size={20} /></Link> */}
              </div>
            </div>
          </div>


          <div className='flex justify-center md:justify-start lg:justify-center lg:items-center lg:flex-col gap-3'>
            <Link href='/FAQS' className='bg-red-500 hover:bg-red-600 duration-200 w-fit p-2 rounded-full'><SvgQuestionIcon size={40} /></Link>
            <Link href='/openings' className='bg-red-500 hover:bg-red-600 duration-200 w-fit p-3 rounded-full'><SvgWorkIcon size={30} /></Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer