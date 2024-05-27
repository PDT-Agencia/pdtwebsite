import Link from 'next/link'
import React from 'react'

const NeedServices = () => {
    return (
        <section className="w-full bg-black text-white flex justify-center items-center px-5">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-5 py-40">
                <h1 className="font-bold text-2xl lg:text-3xl text-center">¿Necesitas de nuestros servicios?</h1>
                <Link href="/#cotizar" className="w-full text-center lg:w-96 p-4 text-2xl lg:text-3xl font-bold bg-red-600 rounded-2xl">Cotizar</Link>
            </div>
        </section>
    )
}

export default NeedServices