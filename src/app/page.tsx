'use client'
import IndexLayout from "./layouts/IndexLayout";
import CardTech from "./components/cards/CardTech";
import Image from "next/image";
import Link from "next/link";
import { SvgArrowIcon, SvgFacebookIcon, SvgInstagramIcon, SvgLinkedInIcon, SvgLoadIcon, SvgMutedIcon, SvgPauseIcon, SvgPlayIcon, SvgSoundIcon, SvgStarIcon, SvgTikTokIcon, SvgYouTubeIcon } from "./svg/svgs";
import { SetStateAction, useEffect, useState } from "react";
import Video from "./components/Video";
import Slider from "./components/Slider";
import FormHome from "./components/FormHome";

const videos = [
  'https://res.cloudinary.com/ddeo6txjh/video/upload/v1717165866/TsChat_-_Video_2_khjrwo.mp4'
];

const videosNews = [
  'https://res.cloudinary.com/ddeo6txjh/video/upload/v1717093630/GDS_PRESENTACION_FINAL_kzz7g4.mp4',
  'https://res.cloudinary.com/ddeo6txjh/video/upload/v1717097164/WELLEZY_-_SOMOS_EL_PUENTE_1_ud1912.mp4',
  'https://res.cloudinary.com/ddeo6txjh/video/upload/v1717097336/INSTRUCTIVO_FINANMED_-_2024_1_hbnzsj.mp4',
]

const messages = [
  "Creamos Experiencias, Consolidamos Sueños",
  "Innovamos Pasión, Transformamos Realidades",
  "Diseñamos Futuro, Construimos Confianza",
  "Tu Visión, Nuestra Misión",
  "Soluciones que Inspiran, Resultados que Perduran"
];

interface Content {
  [key: number]: {
    title: string;
    text: string;
  };
}

const content: Content = {
  0: { title: "AIOP", text: "Somos desarrolladores del primer GDS para agencias de viajes con el enfoque de turismo en salud. Dando soluciones tecnologicas para agilizar procesos y en un solo lugar poder encontrar, todos los servicios de salud y bienestar para que las agencias de viaje puedan entrar en una nueva era del turismo, con más alcance, muchos más servicios y claro, aumentando sus ganancias." },
  1: { title: "AIOP 2", text: "Somos desarrolladores del primer GDS para agencias de viajes con el enfoque de turismo en salud. Dando soluciones tecnologicas para agilizar procesos y en un solo lugar poder encontrar, todos los servicios de salud y bienestar para que las agencias de viaje puedan entrar en una nueva era del turismo, con más alcance, muchos más servicios y claro, aumentando sus ganancias." },
  2: { title: "AIOP 3", text: "Somos desarrolladores del primer GDS para agencias de viajes con el enfoque de turismo en salud. Dando soluciones tecnologicas para agilizar procesos y en un solo lugar poder encontrar, todos los servicios de salud y bienestar para que las agencias de viaje puedan entrar en una nueva era del turismo, con más alcance, muchos más servicios y claro, aumentando sus ganancias." },
};

export default function Home() {
  const [isPlaying1, setIsPlaying1] = useState(true);
  const [isMuted1, setIsMuted1] = useState(true);

  const [isPlaying2, setIsPlaying2] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);

  const [activeTab, setActiveTab] = useState(0);
  const [activeTabNew, setActiveTabNew] = useState(0);

  const currentMessage = messages[activeTab];
  const [firstPart, secondPart] = currentMessage.split(', ');

  const changeVideo = (index: number) => {
    setActiveTab(index);
    setIsPlaying1(true);
    setIsMuted1(false);
  };

  const changeVideoNew = (index: number) => {
    setActiveTabNew(index);
    setIsPlaying2(true);
    setIsMuted2(true);
  }

  const togglePlayPause1 = () => {
    setIsPlaying1(!isPlaying1);
  };

  const toggleMuteUnmute1 = () => {
    setIsMuted1(!isMuted1);
  };

  const togglePlayPause2 = () => {
    setIsPlaying2(!isPlaying2);
  };

  const toggleMuteUnmute2 = () => {
    setIsMuted2(!isMuted2);
  };

  const handleVideoEnd = () => {
    setActiveTab((prevTab) => (prevTab + 1) % videos.length);

  };

  const handleVideoEndNew = () => {
    setActiveTabNew((prevTab) => (prevTab + 1) % videosNews.length);
  }


  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const images = [
    { src: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242325/Aiop_xwd0ba.png", width: 200, height: 80, alt: 'Aiop' },
    { src: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242325/Dc_t5nyzq.png", width: 250, height: 130, alt: 'DC' },
    { src: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242326/Finan_a9l6vt.png", width: 350, height: 230, alt: 'Finan' },
    { src: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242328/Inmave_k3t68k.png", width: 280, height: 160, alt: 'Inmave' },
    { src: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242328/Union_zopomu.png", width: 280, height: 160, alt: 'Union' },
    { src: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242325/Aiop_xwd0ba.png", width: 200, height: 80, alt: 'Aiop' }
  ];

  return (
    <IndexLayout>
      <section className="w-full h-screen">
        <div className="w-full h-full">
          <Video
            key={activeTab}
            videoUrl={videos[activeTab]}
            isPlaying={isPlaying1}
            isMuted={isMuted1}
            onVideoEnd={handleVideoEnd} />
        </div>

        <div className="w-full relative">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[1440px] text-white pb-10">
              <div className="relative">
                <div
                  className="absolute w-full flex flex-col gap-20 bottom-20 px-5 2xl:px-0 z-40"
                >
                  <div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
                    <div className="flex gap-4 z-30">
                      <div
                        className="w-1 rounded-full bg-red-400 h-auto"
                      ></div>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-extralight">
                          {firstPart.split(' ')[0]}{' '}
                          <span className="font-medium"
                          >{firstPart.split(' ').slice(1).join(' ')}</span
                          >
                        </h2>
                        <h2 className="text-4xl font-extralight">
                          {secondPart.split(' ')[0]}{' '}
                          <span className="font-medium"
                          >{secondPart.split(' ').slice(1).join(' ')}</span
                          >
                        </h2>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div
                        onClick={() => togglePlayPause1()}
                        className="flex gap-5 w-fit items-center justify-center md:pe-5 z-30"
                      >
                        {
                          isPlaying1 ? (<SvgPauseIcon size={30} color="#FFFFFF" />) : (<SvgPlayIcon size={30} color="#FFFFFF" />)
                        }
                      </div>

                      <div
                        onClick={() => toggleMuteUnmute1()}
                        className="flex gap-5 w-fit items-center justify-center md:pe-5 z-30"
                      >
                        {
                          isMuted1 ? (<SvgMutedIcon size={45} color="#FFFFFF" />) : (< SvgSoundIcon size={45} color="#FFFFFF" />)
                        }
                      </div>
                    </div>


                  </div>
                  <div className="flex gap-3 px-14 py-2 z-30">
                    {videos.map((video, index) => (
                      <button
                        key={index}
                        className={`${activeTab === index ? 'bg-red-500' : 'bg-white'
                          } duration-300 w-full h-1.5 cursor-pointer rounded-full`}
                        onClick={() => changeVideo(index)}
                      >
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full h-80 bg-gradient-to-t from-black absolute bottom-10 z-30"
          ></div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center">
        <div className="max-w-[1440px] w-full flex flex-wrap gap-5 justify-center py-5 px-5 md:px-10">
          <CardTech url='/services?computer#section' image="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242214/card-1_spmtdj.png" title="Desarrollo de" description="Software" />
          <CardTech url='/services?scuares#section' image="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242215/card-3_fc20q0.png" title="Diseño de" description="Aplicaciones" />
          <CardTech url='/services?paint#section' image="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242214/card-2_ylo514.png" title="Diseño" description="Gráfico" />
          <CardTech url='/services?picture#section' image="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242213/card-4_xkex7i.png" title="Producción" description="Audiovisual" />
        </div>
      </section>

      <section className="w-full flex justify-center items-center z-0 pb-56 xl:pb-48 pt-28 md:pt-36">
        <div
          className="max-w-[1440px] flex flex-col gap-14 xl:gap-0 xl:flex-row justify-center md:justify-between items-center w-full px-10 2xl:px-0"
        >
          <div className={`flex flex-col items-start md:justify-center md:items-center w-full xl:w-fit gap-14 xl:gap-20 opacity-0 duration-300 transition ${scrollPosition.y >= 1050 && 'opacity-100 lg:-translate-y-10'}`}>

            <div
              className="flex items-center gap-3 text-white/60 text-lg xl:text-xl font-light lg:ps-8"
            >
              <div
                className="border w-6 h-6 border-white rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>Más de 300 sitios web</span>
            </div>

            <div
              className="flex items-center gap-3 text-white/60 text-lg xl:text-xl font-light"
            >
              <div
                className="border w-6 h-6 border-white rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>Más de 30 aplicaciones</span>
            </div>

            <div
              className="flex items-center gap-3 text-white/60 text-lg xl:text-xl font-light lg:ps-8"
            >
              <div
                className="border w-6 h-6 border-white rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="w-full"
              >Creación de contenido <br className="hidden lg:block" />
                y manejo de redes</span
              >
            </div>
          </div>
          <Image
            className={`hidden xl:block w-[600px] 2xl:w-[800px] ${scrollPosition.y >= 1000 && 'animate-blink'}`}
            src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242216/luz-bombilla_cb96yv.png"
            width={300}
            height={300}
            loading="lazy"
            alt="Bombilla"
          />


          <div className={`flex flex-col items-start md:justify-center md:items-center w-full xl:w-fit gap-14 xl:gap-20 opacity-0 duration-300 transition ${scrollPosition.y >= 1050 && 'opacity-100 lg:-translate-y-10'}`}>
            <div
              className="flex items-center gap-3 text-white/60 text-lg xl:text-xl font-light"
            >
              <div
                className="border w-6 h-6 max-w-6 max-h-6 border-white rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>Realización de contenido <br className="hidden lg:block" />Audiovisual</span>
            </div>

            <div
              className="flex items-center gap-3 text-white/60 text-lg xl:text-xl font-light lg:ps-8"
            >
              <div
                className="border w-6 h-6 border-white rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>Más de 300 piezas creadas</span>
            </div>

            <div
              className="flex items-center gap-3 text-white/60 text-lg xl:text-xl font-light"
            >
              <div
                className="border w-6 h-6 border-white rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span>Más de 8 años de experiencia</span>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full bg-white flex items-center justify-center pt-40 relative px-10 2xl:px-0">
        <div
          className="w-40 h-40 lg:w-60 lg:h-60 rounded-full shadow-xl flex items-center justify-center p-10 absolute bg-white -top-20 md:-top-28"
        >
          <Image
            src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242213/logo-dark_ay78eq.png"
            alt="Logo"
            width={200}
            height={200}
            loading="lazy"
            className="w-full"
          />
        </div>
      </section>

      <section className="bg-white">
        <div
          className="flex flex-col gap-5 items-center xl:border py-6 pt-0 lg:py-20 px-2 w-full"
        >
          <h2 className="text-2xl lg:text-4xl text-center uppercase font-extrabold pb-10">
            Nuestros clientes
          </h2>
          <Slider numberImage={3} images={images} />
        </div>
      </section>

      <section
        className="w-full bg-white flex items-center justify-center py-20 pt-0 relative px-5 2xl:px-0"
      >
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-10">
          <div className="w-full flex flex-col h-90 min-h-90 xl:flex-row items-center gap-10 py-10">
            <div className="flex flex-col gap-5 w-full lg:w-[70%]">
              <h2 className="text-3xl lg:text-4xl uppercase font-extrabold">
                Hacemos realidad <br />
                tus ideas
              </h2>

              <div>
                <h6 className="text-2xl uppercase font-semibold">{content[activeTabNew].title}</h6>
                <p className="font-light text-lg">
                  {content[activeTabNew].text}
                </p>
              </div>
            </div>

            <div className="w-full relative">
              <div className="h-[27rem] relative">
                <div className="bg-slate-200 w-full h-full animate-pulse rounded-lg absolute flex items-center justify-center z-0">
                  <div className='animate-spin opacity-60'>
                    <SvgLoadIcon size={40} color="#F0F0F0" />
                  </div>
                </div>
                <Video
                  key={activeTabNew}
                  videoUrl={videosNews[activeTabNew]}
                  isPlaying={isPlaying2}
                  isMuted={isMuted2}
                  onVideoEnd={handleVideoEndNew} />
              </div>


              <div className="absolute left-3 bottom-5 flex gap-2 z-20">
                <button
                  onClick={() => changeVideoNew((activeTabNew - 1 + 3) % 3)}
                  disabled={activeTabNew === 0}
                  className={`rounded-full p-2 rotate-180 ${activeTabNew === 0 ? 'bg-white/30' : 'bg-white'}`}
                >
                  <SvgArrowIcon size={20} color="bg-black" />
                </button>
                <button
                  onClick={() => changeVideoNew((activeTabNew + 1) % 3)}
                  disabled={activeTabNew === 2}
                  className={`rounded-full p-2 ${activeTabNew === 2 ? 'bg-white/30' : 'bg-white'}`}
                >
                  <SvgArrowIcon size={20} color="bg-black" />
                </button>
              </div>

              <div className="flex gap-1 absolute bottom-5 right-3">
                <div
                  onClick={() => togglePlayPause2()}
                  className="flex gap-5 w-fit items-center justify-center md:pe-5 z-30 cursor-pointer"
                >
                  {
                    isPlaying2 ? (<SvgPauseIcon size={30} color={`${activeTabNew === 2 ? '#505050' : '#FFFFFF'}`} />) : (<SvgPlayIcon size={30} color={`${activeTabNew === 2 ? '#505050' : '#FFFFFF'}`} />)
                  }
                </div>

                <div
                  onClick={() => toggleMuteUnmute2()}
                  className="flex gap-5 w-fit items-center justify-center md:pe-5 z-30 cursor-pointer"
                >
                  {
                    isMuted2 ? (<SvgMutedIcon size={40} color={`${activeTabNew === 2 ? '#505050' : '#FFFFFF'}`} />) : (< SvgSoundIcon size={40} color={`${activeTabNew === 2 ? '#505050' : '#FFFFFF'}`} />)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section
        className="w-full bg-white flex items-center justify-center pb-20 px-5 2xl:px-0"
      >
        <div
          className="max-w-[1440px] w-full flex flex-col xl:flex-row justify-between gap-10"
        >
          <div className="w-full xl:w-[70%] xl:border-e p-0  xl:pe-10 flex flex-col gap-10">
            <div className="flex flex-col items-center md:items-start md:flex-row gap-8 pt-10">
              <Image
                src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242215/perrito-script_x95jnp.png"
                width={300}
                height={300}
                loading="lazy"
                alt="Perrito"
                className="w-40"
              />
              <div className="flex flex-col gap-5 text-center md:text-start">
                <h2 className="text-4xl uppercase font-extrabold">
                  ¿TIENES UNA GRAN IDEA?
                </h2>
                <p className="text-lg">Cuentanos sobre ella</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 text-center md:text-start">
              <h3 className="font-bold text-3xl">
                Los clientes confian en nosotros
              </h3>
              <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-center">
                <Image
                  src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242216/person_aomdk2.png"
                  alt="Person"
                  loading="lazy"
                  width="80"
                  height="120"
                  className="w-28 h-28 object-cover rounded-full"
                />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <SvgStarIcon size={40} />
                    <SvgStarIcon size={40} />
                    <SvgStarIcon size={40} />
                    <SvgStarIcon size={40} />
                    <SvgStarIcon size={40} />
                  </div>
                  <p>Clasificación 5,24 en opinión</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-3xl text-center md:text-start">
                Síguenos en:
              </h3>
              <div className='flex justify-center md:justify-start gap-2'>
                <Link href='/' className='bg-red-500 w-fit p-3 rounded-full'><SvgInstagramIcon size={20} /></Link>
                <Link href='/' className='bg-red-500 w-fit p-3 rounded-full'><SvgFacebookIcon size={20} /></Link>
                <Link href='/' className='bg-red-500 w-fit p-3 rounded-full'><SvgLinkedInIcon size={20} /></Link>
                <Link href='/' className='bg-red-500 w-fit p-3 rounded-full'><SvgTikTokIcon size={20} /></Link>
                <Link href='/' className='bg-red-500 w-fit p-3 rounded-full'><SvgYouTubeIcon size={20} /></Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-center md:text-start">
              <h3 className="font-bold text-3xl">Contáctanos</h3>
              <p>pdtcomunicaciones@gmail.com</p>
            </div>
          </div>

          <div className="w-full h-full pt-10" id="cotizar">
            <FormHome />
          </div>
        </div>
      </section>
    </IndexLayout>
  );
}
