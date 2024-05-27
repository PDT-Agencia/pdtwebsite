'use client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Image from 'next/image'
import React, { useState } from 'react'
import Pagination from '../../components/Pagination'
import Link from 'next/link'

const Portfolio = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <>
            <Header logo="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242214/logo-white_iemria.png" textColor='text-black' textColorMenu='#000' />
            <section className='w-full h-full pt-40 pb-20 flex flex-col items-center justify-center'>
                <div className='w-full max-w-[1440px] flex flex-col gap-5 px-5 md:px-10'>

                    <div className='grid gird-cols-1 md:grid-cols-4 gap-5'>
                        <div className='col-span-3 md:col-span-2 w-full bg-black relative group'>
                            <div className='w-full h-full group-hover:bg-black/60 duration-150 transition absolute'></div>
                            <div className='flex justify-center items-center absolute w-full h-full opacity-0 group-hover:opacity-100 duration-150 transition'>
                                <Link href="/project" className='bg-red-500 text-center py-2 px-5 w-32 rounded-lg text-white hover:bg-red-600 duration-200'>Ver más</Link>
                            </div>
                            <div className='flex items-center gap-3 absolute top-5 left-5 text-white h-14'>
                                <div className='w-0.5 h-full rounded-lg bg-white'></div>
                                <div className='flex flex-col'>
                                    <h2 className='font-extrabold text-xl'>WEB Y Buscador de vuelos</h2>
                                    <p className='text-lg font-extralight'>wellezy</p>
                                </div>
                            </div>
                            <Image src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242356/portfolio-1_sebc4h.png" alt='Card Portfolio 1' className='w-full h-full object-cover' width={300} height={300} loading='lazy' />
                        </div>

                        <div className='col-span-3 md:col-span-2 w-full bg-red-400 relative group'>
                            <div className='w-full h-full group-hover:bg-black/60 duration-150 transition absolute'></div>
                            <div className='flex justify-center items-center absolute w-full h-full opacity-0 group-hover:opacity-100 duration-150 transition'>
                                <Link href="/project" className='bg-red-500 text-center py-2 px-5 w-32 rounded-lg text-white hover:bg-red-600 duration-200'>Ver más</Link>
                            </div>
                            <div className='flex items-center gap-3 absolute top-5 left-5 text-white h-14'>
                                <div className='w-0.5 h-full rounded-lg bg-white'></div>
                                <div className='flex flex-col'>
                                    <h2 className='font-extrabold text-xl'>APP Y WEB</h2>
                                    <p className='text-lg font-extralight'>Clínica CEP</p>
                                </div>
                            </div>
                            <Image src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242357/portfolio-2_og8r6h.png" alt='Card Portfolio 1' className='w-full h-full object-cover' width={300} height={300} loading='lazy' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-5 w-full h-full'>
                        <div className='w-full bg-yellow-400 relative group'>
                            <div className='w-full h-full group-hover:bg-black/60 duration-150 transition absolute'></div>
                            <div className='flex justify-center items-center absolute w-full h-full opacity-0 group-hover:opacity-100 duration-150 transition'>
                                <Link href="/project" className='bg-red-500 text-center py-2 px-5 w-32 rounded-lg text-white hover:bg-red-600 duration-200'>Ver más</Link>
                            </div>
                            <div className='flex items-center gap-3 absolute bottom-5 left-5 text-white h-14'>
                                <div className='w-0.5 h-full rounded-lg bg-white'></div>
                                <div className='flex flex-col'>
                                    <h2 className='font-extrabold text-xl'>APP MÓVIL</h2>
                                    <p className='text-lg font-extralight'>Dr. Daniel Correa</p>
                                </div>
                            </div>
                            <Image src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242357/portfolio-3_umtys2.png" alt='Card Portfolio 1' className='w-full h-full object-cover' width={300} height={300} loading='lazy' />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='bg-black/60 w-full h-full relative group'>
                                <div className='w-full h-full group-hover:bg-black/60 duration-150 transition absolute'></div>
                                <div className='flex justify-center items-center absolute w-full h-full opacity-0 group-hover:opacity-100 duration-150 transition'>
                                    <Link href="/project" className='bg-red-500 text-center py-2 px-5 w-32 rounded-lg text-white hover:bg-red-600 duration-200'>Ver más</Link>
                                </div>
                                <div className='flex items-center gap-3 absolute top-5 left-5 text-white h-14'>
                                    <div className='w-0.5 h-full rounded-lg bg-white'></div>
                                    <div className='flex flex-col'>
                                        <h2 className='font-extrabold text-xl'>WEB Y Buscador de vuelos</h2>
                                        <p className='text-lg font-extralight'>wellezy</p>
                                    </div>
                                </div>
                                <Image src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242357/portfolio-4_ulqifm.png" alt='Card Portfolio 1' className='w-full h-full object-cover' width={300} height={300} loading='lazy' />
                            </div>
                            <div className='bg-black/30 w-full h-full relative group'>
                                <div className='w-full h-full group-hover:bg-black/60 duration-150 transition absolute'></div>
                                <div className='flex justify-center items-center absolute w-full h-full opacity-0 group-hover:opacity-100 duration-150 transition'>
                                    <Link href="/project" className='bg-red-500 text-center py-2 px-5 w-32 rounded-lg text-white hover:bg-red-600 duration-200'>Ver más</Link>
                                </div>
                                <div className='flex items-center gap-3 absolute bottom-5 right-5 text-white h-14'>
                                    <div className='w-0.5 h-full rounded-lg bg-white'></div>
                                    <div className='flex flex-col'>
                                        <h2 className='font-extrabold text-xl'>WEB</h2>
                                        <p className='text-lg font-extralight'>Dr. Daniel Correa</p>
                                    </div>
                                </div>
                                <Image src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242361/portfolio-5_oqb25x.png" alt='Card Portfolio 1' className='w-full h-full object-cover' width={300} height={300} loading='lazy' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )

}

export default Portfolio