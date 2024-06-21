'use client'
import React, { useEffect, useState } from 'react';
import ServicesLayout from '../../layouts/ServicesLayout';
import Image from 'next/image';
import NeedServices from '../../components/NeedServices';
import Menu from '../../components/Menu';
import DevelopmentSoftware from '../../components/services/DevelopmentSoftware';
import DesignGrafic from '../../components/services/DesignGrafic';
import DesignAplications from '../../components/services/DesignAplications';
import AudioVisualProducts from '../../components/services/AudioVisualProducts';
import { IconType } from '../../interface/types';

import Banner from "..//..//assets/services/banner/1.png"

const Services = () => {
  const [selectedIcon, setSelectedIcon] = useState<IconType | null>(null);

  useEffect(() => {
    const query = window.location.search.substring(1); // Obtiene la parte después del signo de interrogación y elimina el primer carácter '?'
    if (query) {
      setSelectedIcon(query as IconType);
    } else {
      setSelectedIcon('computer'); // Valor por defecto si no hay query
    }
  }, []);

  const handleIconSelect = (icon: IconType) => {
    setSelectedIcon(icon);
  };
  
  return (
    <ServicesLayout>
      <section className='w-full h-screen flex items-end justify-center relative'>
        <div className='w-full max-w-[1440px] relative z-30 text-white pb-20'>
          <div className='w-full  text-center md:text-start px-5 md:w-[500px] flex flex-col items-center gap-3 md:items-start'>
            <h3 className='text-2xl lg:text-3xl font-semibold'>Nuestros Servicios</h3>
            <p className='text-base lg:text-xl'>En PDT, fusionamos la creatividad con la
              tecnología para llevar tus proyectos al siguiente nivel. Desde el desarrollo de software a medida hasta la creación de
              identidades visuales impactantes, diseño
              de aplicaciones intuitivas, y producciones
              audiovisuales de calidad cinematográfica,
              somos una agencia de medios completa
              que trabaja incansablemente para dar
              vida a tus visiones.</p>
          </div>
        </div>
        <div className='w-full h-full absolute'>
          <div className='absolute left-0 right-0 top-0 bottom-0'>
            <div
              className="w-full h-[150rem] bg-gradient-to-t from-black absolute bottom-0"
            ></div>
            <Image src={Banner} alt='Image Banner' width={300} height={300} className='w-full h-full object-cover' loading='lazy' />
          </div>
        </div>
      </section>

      <section className='w-full h-40 flex items-center justify-center py-20 bg-black' >
        <Menu selectedIcon={selectedIcon} handleIconSelect={handleIconSelect} />
      </section>

      <section className="w-full bg-black flex justify-center items-center pt-5" id='section'>
        {selectedIcon === 'computer' && <DevelopmentSoftware />}
        {selectedIcon === 'picture' && <AudioVisualProducts />}
        {selectedIcon === 'scuares' && <DesignAplications />}
        {selectedIcon === 'paint' && <DesignGrafic  />}
      </section>

      <NeedServices />
    </ServicesLayout>
  );
}

export default Services;
