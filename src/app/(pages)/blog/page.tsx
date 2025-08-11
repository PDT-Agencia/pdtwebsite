'use client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Image from 'next/image'
import CardBlog from '../../components/cards/CardBlog'
import Banner from '@/assets/images/blog/banner.jpg';
import New1 from '@/assets/images/blog/new1.jpg';
import { news } from '../news/[id]/news'
import { SvgLogoPdt } from '@/app/svg/svgs'

const Blog = () => {

  return (
    <div>
      <Header textColor="text-black" logo={<SvgLogoPdt size={100} />} textColorMenu="#000" />

      {/* Banner full-screen inline (ajusta 96px si tu Header fijo mide distinto) */}
      <section className="relative w-full h-[calc(100vh-96px)] min-h-[560px]">
        <Image
          src={Banner}
          alt="PDT Blog banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
      </section>

      {/* Contenido del blog (conserva el título en su lugar) */}
      <section className="w-full py-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px] flex flex-col gap-10 px-5 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold">PDT BLOG</h2>
            <p className="font-extralight">
              Sumérgete en el fascinante mundo de la tecnología con nosotros. En nuestro blog, reunimos las noticias en tendencias más innovadoras de los principales portales, para que estés siempre un paso adelante en el universo tecnológico. Desde los últimos avances en inteligencia artificial hasta los dispositivos más punteros del mercado, aquí encontrarás la información que necesitas para mantenerte actualizado. Únete a nuestra comunidad y déjate inspirar por el futuro que nos espera. ¡Explora, aprende y descubre el mañana hoy en PDT!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {news.map((card, index) => (
              <CardBlog
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                url={card.url}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blog
