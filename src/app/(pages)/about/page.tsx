"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Banner from "../../assets/about/1.png"
import DOG from "../../assets/home/pdt/dog.png"

import New1 from "../../assets/blog/news/1.png"
import New2 from "../../assets/blog/news/2.png"
import New3 from "../../assets/blog/news/3.png"
import New4 from "../../assets/blog/news/4.png"
import New5 from "../../assets/blog/news/5.png"
import New6 from "../../assets/blog/news/6.png"

import LogoWhite from "../../assets/logos/2.png"

const About = () => {

    const items = [
        { title: 'Somos creativos', image: New1, description: 'Nos motiva la innovación. Cada proyecto que abordamos es una oportunidad para reinventar y superar límites creativos.' },
        { title: 'Somos responsables', image: New2, description: 'La responsabilidad es nuestro pilar. Cada acción y decisión está guiada por un compromiso firme con la calidad y la ética.' },
        { title: 'Somos eficientes', image: New3, description: 'La eficiencia es clave. Optimizamos cada proceso y recurso para ofrecer resultados rápidos sin comprometer la excelencia.' },
        { title: 'Somos íntegros', image: New4, description: 'La integridad nos define. Actuamos con transparencia y honestidad, asegurando la confianza y el respeto en todas nuestras relaciones.' },
        { title: 'Somos adaptativos', image: New5, description: 'Nos adaptamos a los cambios. En un entorno dinámico, nuestra flexibilidad nos permite innovar y responder con agilidad.' },
        { title: 'Somos evolución', image: New6, description: 'Evolucionamos constantemente. Nuestra búsqueda de mejoras continuas nos lleva a crecer y a ofrecer siempre lo mejor.' }
    ];



    const [selectedItem, setSelectedItem] = useState(items[0]);


    return (
        <>
            <Header logo={LogoWhite} textColor='text-white' textColorMenu='#fff' />
            <section className='w-full h-full min-h-screen flex flex-col items-center justify-center bg-black'>
                <div className='flex items-center justify-center'>
                    <Image src={Banner} width={3000} height={3000} loading='lazy' alt='About' />
                </div>

                <div className='w-full max-w-[1440px] h-full pb-20 px-5 md:px-10'>
                    <div className='relative duration-200 top-0  md:h-[50rem] lg:-top-0 lg:h-[35rem] xl:h-[30rem] 2xl:h-[22rem] flex flex-col-reverse md:flex-row gap-10 justify-between items-end'>
                        <div className="flex flex-col items-center gap-3 md:items-start w-full">
                            <h3 className="text-white text-xl font-bold">LO QUE HACEMOS</h3>
                            <ul className='list-disc ps-5 text-white font-extralight'>
                                <li>
                                    <p className="text-base text-center text-white/90 md:text-start">
                                        Desarrollo: Transformamos líneas de código en experiencias interactivas. Desde aplicaciones web hasta soluciones personalizadas, construimos el futuro digital.
                                    </p>
                                </li>

                                <li>
                                    <p className="text-base text-center text-white/90 md:text-start">
                                        Publicidad: Nuestra creatividad no conoce límites. Diseñamos campañas impactantes que no solo captan la atención, sino que también generan resultados tangibles.
                                    </p>
                                </li>

                                <li>
                                    <p className="text-base text-center text-white/90 md:text-start">
                                        Integraciones: Conectamos tecnologías para potenciar tu presencia en línea. Desde API hasta integraciones complejas, hacemos que todo funcione en armonía.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-10 text-white w-full'>
                            <h2 className='text-2xl text-center md:text-start text-white font-bold'> ¿QUIENES SOMOS?</h2>
                            <p className='w-full font-extralight'>En PDT, no solo creamos soluciones; damos vida a visiones. Somos más que una agencia de medios: somos arquitectos digitales, artistas de la narrativa y expertos en integración tecnológica.</p>

                            <div className="flex flex-col items-center gap-3 w-full md:items-start text-white">
                                <h3 className="text-xl font-bold">¿NUESTRO SECRETO?</h3>
                                <p className="text-base font-extralight text-center text-white/90 md:text-start">Un equipo apasionado de diseñadores y programadores que transforman ideas en experiencias cautivadoras.</p>
                            </div>

                            <div className="flex flex-col items-center gap-3 w-full md:items-start text-white">
                                <h3 className="text-xl font-bold">NUESTRA ESENCIA</h3>
                                <p className="text-base font-extralight text-center text-white/90 md:text-start">En el corazón de PDT late la fusión perfecta entre creatividad y tecnología. Somos contadores de historias digitales, construyendo narrativas que resuenan y experiencias que impactan. Cada proyecto es una oportunidad para desafiar los límites, trascender las expectativas y convertir ideas en realidad.</p>
                            </div>

                            <div className="flex flex-col items-center gap-3 w-full md:items-start text-white">
                                <h3 className="text-white text-xl font-bold">¿POR QUÉ ELEGIRNOS?</h3>
                                <ul className='list-disc ps-5 font-extralight'>
                                    <li>
                                        <p className="text-base font-extralight text-center text-white/90 md:text-start">
                                            Equipo Apasionado: Nos apasiona lo que hacemos y eso se refleja en cada línea de código y cada pixel de diseño.
                                        </p>
                                    </li>

                                    <li>
                                        <p className="text-base font-extralight text-center text-white/90 md:text-start">
                                            Innovación Constante: Abrazamos la evolución digital. Siempre estamos un paso adelante, listos para llevar tus ideas al siguiente nivel.
                                        </p>
                                    </li>

                                    <li>
                                        <p className="text-base font-extralight text-center text-white/90 md:text-start">
                                            Colaboración Total: Tu visión es nuestra guía. Trabajamos contigo en cada paso para garantizar que el resultado final refleje tus objetivos.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='bg-red-500 mt-14 p-4 text-center rounded-xl text-white font-semibold text-lg'>
                        Bienvenido a PDT, donde la creatividad encuentra su mejor aliado en la tecnología. Juntos, construimos el futuro digital.
                    </div>
                </div>

                <div className='text-white flex flex-col gap-10 pb-20 px-5 md:px-10 w-full max-w-[1440px] h-full'>
                    <h3 className='text-3xl font-bold'>Nuestro equipo</h3>
                    <div className='flex flex-col md:flex-row gap-5 w-full h-full md:max-h-[32rem]'>
                        <div className='w-full md:w-[40%] h-full flex flex-wrap flex-col gap-8'>
                            {items.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedItem(item)}
                                    className={`py-4 px-8 font-normal rounded-xl ${item.title === selectedItem.title ? 'bg-red-500' : 'bg-white text-black/90'}`}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                        <div className='w-full h-full relative'>
                            <div className='w-80 h-full left-0 bottom-0 top-0 bg-gradient-to-r from-black  absolute'></div>
                            <div className='w-full h-80  bottom-0 bg-gradient-to-t from-black  absolute'></div>
                            <Image className='w-full h-full max-h-[32rem] object-cover' src={selectedItem.image} width={3000} height={3000} loading='lazy' alt='About person' />
                            <p className='absolute duration-200 bottom-2 left-2 w-56 sm:w-[30rem] sm:bottom-5 sm:left-5 md:bottom-10 md:left-10 md:w-[23rem] lg:w-[31rem] xl:w-[37rem] text-sm sm:text-lg md:text-xl font-extralight'>{selectedItem.description}</p>
                            <Image className='absolute right-0 bottom-0 w-20 md:w-28 lg:w-32' width={100} height={100} src={DOG} loading='lazy' alt='Logo Dog' />
                        </div>
                    </div>


                </div>
            </section>
            <Footer />
        </>
    )
}

export default About