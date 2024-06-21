"use client"
import Image from 'next/image'
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import IndexLayout from '@/app/layouts/IndexLayout'
import Form from '@/app/components/Form';
import Banner from "../../assets/about/1.png"

const Contact = () => {
    return (
        <IndexLayout>
            <section className='w-full h-full flex flex-col items-center justify-center bg-black relative py-36 px-6 md:px-0'>
                <div className='absolute top-0 flex items-center justify-center backdrop-blur-xl opacity-50 blur-sm'>
                    <Image src={Banner} alt='About' width={2000} height={2000} loading='lazy' />
                </div>

                <div className=' w-full h-full flex items-center justify-center z-20 text-white'>
                    <div className='w-full max-w-[40rem] bg-black/95 border border-white/10 shadow-2xl shadow-white/10 rounded-xl p-8 md:p-10 flex flex-col gap-8'>
                        <h2 className='font-semibold text-3xl pb-3 border-b'>Contáctanos</h2>
                        <Form />
                    </div>
                </div>
            </section>
        </IndexLayout>
    )
}

export default Contact