"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Team from '../../components/Team'
import IndexLayout from '@/app/layouts/IndexLayout'
import Banner from "../../assets/about-team/banner/1.png"

const AboutTeam = () => {
    const [invisible, setInvisible] = useState(false);

    const toggleVisibility = () => {
        setInvisible(prevInvisible => !prevInvisible);
        console.log('aaaaa');

    };
    return (
        <IndexLayout>
            <section className='w-full h-screen flex items-end justify-center relative'>
                <div className='w-full max-w-[1440px] relative z-30 text-white pb-20'>
                    <div className='w-full px-10 md:w-[600px] flex flex-col items-center gap-3 md:items-start'>

                        <p className={`${!invisible && 'hidden'}  text-lg font-extralight text-center md:text-start `}>
                            En PDT, te presentamos a un equipo donde la creatividad y la tecnología bailan en armonía. Desde nuestros visionarios directores creativos hasta nuestros hábiles programadores, cada miembro aporta una perspectiva única y habilidades excepcionales. <br /><br />

                            Somos más que un equipo; somos colaboradores apasionados unidos por la misión de forjar el futuro digital. Cada proyecto es un lienzo en blanco donde fusionamos ideas innovadoras con una ejecución impecable. <br /><br />
                        </p>
                        <p className={`${invisible ? 'hidden' : 'block overflow-hidden overflow-y-auto lg:overflow-x-hidden h-[30rem] lg:h-full'} text-lg font-extralight text-center md:text-start`}>
                            En PDT, te presentamos a un equipo donde la creatividad y la tecnología bailan en armonía. Desde nuestros visionarios directores creativos hasta nuestros hábiles programadores, cada miembro aporta una perspectiva única y habilidades excepcionales. <br /><br />

                            Somos más que un equipo; somos colaboradores apasionados unidos por la misión de forjar el futuro digital. Cada proyecto es un lienzo en blanco donde fusionamos ideas innovadoras con una ejecución impecable. <br /><br />


                            <span className={`${invisible ? 'hidden' : 'block'}`}>
                                En PDT, nos enorgullece no solo crear campañas y soluciones, sino también construir relaciones significativas contigo. Tu éxito es nuestra máxima motivación, y estamos comprometidos a ofrecerte experiencias digitales que no solo cumplen sino que superan tus expectativas. <br /><br />

                                Bienvenido a un equipo donde la dedicación y la creatividad convergen para ofrecerte soluciones digitales que marcan la diferencia. En PDT, estamos aquí para impulsar tu visión y llevarla a nuevas alturas.
                            </span>
                        </p>

                        <button className='text-lg font-extralight text-center md:text-start lg:hidden' onClick={toggleVisibility}>{invisible ? 'Ver más' : 'Ver menos'}</button>
                    </div>
                </div>
                <div className='w-full h-full absolute'>
                    <div className='absolute left-0 right-0 top-0 bottom-0'>
                        <div
                            className="w-full h-[150rem] bg-gradient-to-t from-black absolute bottom-0"
                        ></div>
                        <Image src={Banner} width={3000} height={3000} loading='lazy' alt='Image Banner' className='w-full h-full object-cover' />
                    </div>
                </div>
            </section>

            <section className='bg-black flex items-center justify-center' id='team'>
                <div className='w-full max-w-[1440px] flex items-start justify-start mt-10'>
                    <Team />
                </div>

            </section>
        </IndexLayout>
    )
}

export default AboutTeam