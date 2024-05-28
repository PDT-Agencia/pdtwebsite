import Construction from '@/app/components/Construction'
import IndexLayout from '@/app/layouts/IndexLayout'
import Image from 'next/image'
import React from 'react'

const page = () => {
    
  return (
    <IndexLayout>
        <section className="w-full flex justify-center items-center">
            <Construction />
        </section>
    </IndexLayout>
  )
}

export default page