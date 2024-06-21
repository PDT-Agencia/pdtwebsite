import React from 'react'
import { SvgWhatsAppIcon } from '../svg/svgs'
import Link from 'next/link'

const WhatsApp = () => {
    return (
        <Link href='https://wa.link/yb77bx' target="_blank" className='fixed z-50 bottom-8 right-8 shadow-xl border-2 border-white bg-green-500 hover:bg-green-600 duration-200 w-fit p-3 rounded-full rounded-br-none'><SvgWhatsAppIcon size={30} /></Link>
    )
}

export default WhatsApp