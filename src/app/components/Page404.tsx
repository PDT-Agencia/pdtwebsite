import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page404 = () => {
    const logo = "https://pdt-website-videos.vercel.app/_next/static/media/2.2e589d59.png"
    return (
        <div className="w-full max-w-[1440px] h-screen flex flex-col gap-8 justify-center items-center text-white pb-10">
            <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-9xl font-bold'>404</h1>
            <h2 className='text-xl'>
            ¡Oops! Parece que te has perdido.
            </h2>
            </div>
            <Link href='/' className='bg-red-500 w-60 text-center p-2 rounded-lg hover:bg-red-600 duration-300'>Volver al inicio</Link>
        </div>
    )
}

export default Page404