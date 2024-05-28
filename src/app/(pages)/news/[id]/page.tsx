import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Image from 'next/image'
import CardBlog from '../../../components/cards/CardBlog'
import Link from 'next/link'
import { title } from 'process'
import Page404 from '@/app/components/Page404'
import IndexLayout from '@/app/layouts/IndexLayout'
import {news} from './news'

export function generateStaticParams() {
  return news.map(item => ({ id: item.id.toString() }));
}
 
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params
  
  const page = news.find(p => p.id === parseInt(id));
 
  if (!page) {
    return <IndexLayout>
      <div className='w-full h-screen bg-black text-white flex flex-col items-center justify-center'>
        <Page404 />
      </div>

    </IndexLayout>;
    ;
  }

  return (
    <>
      <Header logo="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242214/logo-white_iemria.png" textColor='text-black' textColorMenu='#000' />
      <section className='w-full h-full pt-40 pb-20 flex flex-col items-center justify-center'>
        <div className='w-full max-w-[1440px] flex flex-col gap-10 px-5 md:px-10'>
          <div className='flex flex-col gap-20'>
            <div className='flex flex-col lg:flex-row gap-10'>
              <div className='flex flex-col gap-8 w-full lg:w-3/5'>
                <Image src={page.image} width={3000} height={3000} loading='lazy' alt='Banner' />
                <div className='flex items-center gap-8 justify-between'>
                  <h2 className='text-3xl font-bold'>{page.title} {params.id}</h2>
                </div>

                <p className='font-extralight'>
                  {page.description}
                </p>

                <div className='bg-black p-7 rounded-xl flex flex-col lg:flex-row items-center gap-10  text-white'>
                  <div className='bg-red-100 w-44 lg:h-36 h-44 flex items-center justify-center px-4 rounded-full'>
                    <Image src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242214/logo-white_iemria.png" width={400} height={400} loading='lazy' alt='Logo' className='w' />
                  </div>

                  <div className='w-full flex flex-col gap-2'>
                    <p className='font-extralight'>Publicado por </p>
                    <h2 className='text-2xl'>Agencia de medios PDT</h2>
                    <h3><b>TOMADO DE:</b> <Link className='font-extralight' href={page.url}>
                      {page.url}</Link></h3>
                    <p className='font-extralight'>05/09/2023</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-10 w-full lg:w-2/5'>
                <CardBlog
                  title={news[0].title}
                  description={news[0].description}
                  image={news[0].image} url={news[0].url} />

                <CardBlog
                  title={news[1].title}
                  description={news[1].description}
                  image={news[1].image} url={news[1].url} />

                <CardBlog
                  title={news[2].title}
                  description={news[2].description}
                  image={news[2].image} url={news[2].url} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}