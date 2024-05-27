"use client"

import IndexLayout from '@/app/layouts/IndexLayout';
import Image from 'next/image';
import React, { useState } from 'react';

const FAQS: React.FC = () => {
  const faqs = [
    {
      question: "¿Qué servicios ofrece su agencia de software?",
      answer: "Ofrecemos una amplia gama de servicios que incluyen desarrollo de software a medida, diseño y desarrollo de aplicaciones móviles, desarrollo web, consultoría tecnológica, integración de sistemas y mantenimiento y soporte de software."
    },
    {
      question: "¿Cuál es su proceso de desarrollo de software?",
      answer: "Nuestro proceso de desarrollo de software incluye varias etapas: análisis de requisitos, diseño, desarrollo, pruebas, implementación y mantenimiento. Trabajamos en estrecha colaboración con nuestros clientes durante cada etapa para asegurar que el producto final cumpla con sus expectativas y necesidades."
    },
    {
      question: "¿Cuánto tiempo tarda un proyecto típico en completarse?",
      answer: "El tiempo de finalización de un proyecto varía según su complejidad y alcance. Los proyectos pequeños pueden completarse en unas pocas semanas, mientras que los proyectos más grandes y complejos pueden tardar varios meses. Proporcionamos una estimación de tiempo detallada después de evaluar los requisitos específicos del proyecto."
    },
    {
      question: "¿Ofrecen soporte y mantenimiento después del lanzamiento?",
      answer: "Sí, ofrecemos servicios de soporte y mantenimiento después del lanzamiento para asegurar que su software funcione sin problemas. Esto incluye la corrección de errores, actualizaciones, mejoras y asistencia técnica continua."
    },
    {
      question: "¿Qué metodologías de desarrollo utilizan?",
      answer: "Utilizamos metodologías ágiles como Scrum y Kanban para gestionar nuestros proyectos de desarrollo de software. Estas metodologías nos permiten ser flexibles, adaptarnos a los cambios y entregar productos de alta calidad de manera eficiente."
    },
    {
      question: "¿Cómo manejan la seguridad de la información?",
      answer: "La seguridad de la información es una prioridad para nosotros. Implementamos prácticas de seguridad robustas en todas las etapas del desarrollo, incluyendo encriptación de datos, pruebas de seguridad, autenticación y autorización seguras, y cumplimiento con las normativas y estándares de seguridad pertinentes."
    },
    {
      question: "¿Pueden trabajar con tecnologías específicas o plataformas?",
      answer: "Sí, tenemos experiencia trabajando con una amplia variedad de tecnologías y plataformas, incluyendo pero no limitado a JavaScript, Python, Java, .NET, React, Angular, Node.js, iOS, Android y muchas más. Nos adaptamos a las necesidades tecnológicas específicas de cada proyecto."
    },
    {
      question: "¿Cómo se asegura la calidad del software?",
      answer: "Aseguramos la calidad del software a través de un riguroso proceso de pruebas que incluye pruebas unitarias, pruebas de integración, pruebas de aceptación del usuario y pruebas automatizadas. Además, realizamos revisiones de código y mantenemos altos estándares de codificación."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <IndexLayout>
      <section className="w-full flex justify-center items-center relative">
        <div className='hidden absolute top-0 lg:flex items-center justify-center backdrop-blur-xl opacity-50 blur-sm'>
          <Image src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242214/about_u3jdis.png" alt='About' width={2000} height={2000} loading='lazy' />
        </div>
        <div className='w-full max-w-[1440px] py-20'>
          <div className="relative w-full bg-black lg:border border-white/20 shadow-xl shadow-white/10 my-10 px-6 pt-10 pb-8 mt-8 ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            <div className="mx-auto px-5">
              <div className="flex flex-col items-center">
                <h2 className="mt-5 text-white text-center text-3xl font-bold tracking-tight md:text-5xl">FAQS</h2>
                <p className="mt-3 text-lg text-neutral-500 md:text-xl">Preguntas frecuentes</p>
              </div>

              <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-400">
                {faqs.map((faq, index) => (
                  <div key={index} className="py-5">
                    <div className="select-none" onClick={() => handleToggle(index)}>
                      <div className="text-white flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>{faq.question}</span>
                        <span className={`duration-200 ease-out ${openIndex === index ? 'rotate-180' : ''}`}>
                          <svg fill="none" height="24" shapeRendering="geometricPrecision"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <p className={`transition-opacity ease-out select-text ${openIndex === index ? 'opacity-100 block' : 'opacity-0 hidden'} duration-200 mt-3 text-neutral-400`}>
                        {faq.answer}
                      </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </IndexLayout>
  );
};

export default FAQS;
