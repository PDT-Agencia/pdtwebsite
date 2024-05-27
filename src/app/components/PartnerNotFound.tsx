import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PartnerNotFound = ({id}: {id: string | undefined}) => {
    const logo = "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242215/logo_zx0gmc.png"
    return (
        <div className="w-full max-w-[1440px] h-screen flex flex-col gap-5 justify-center items-center text-white pb-10">
            <Link href='/'> <Image src={logo} width={120} height={120} loading='lazy' alt='Logo' /></Link>
            <h2 className='text-xl'>No encontramos a un miembro de nuestro equipo con el id {id}. </h2>
            <Link href='/about-team#team' className='bg-red-500 w-60 text-center p-2 rounded-lg hover:bg-red-600 duration-300'>Volver</Link>
        </div>
    )
}

export default PartnerNotFound