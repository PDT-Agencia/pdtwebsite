import React from 'react'
import CardService from '../cards/CardService'
import CardImage from '../cards/CardImage'
import Service from "..//.//..//assets/services/images/2.png"

const DesignAplications = () => {
    return (
        <div className="w-full max-w-[1440px] flex flex-col gap-20 px-5 2xl:px-0">
            <CardImage image={Service} title='Desarrollo de aplicaciones' />
            <div
                className="flex flex-wrap gap-8 items-center justify-center md:items-start md:justify-between text-white mt-10"
            >
                <CardService title='Aplicaciones a Medida:' description='En PDT, no solo creamos aplicaciones, 
construimos soluciones personalizadas para 
tus necesidades específicas. Desde concepto 
hasta desarrollo, cada línea de código está 
diseñada para potenciar tu visión.' />

                <CardService title='Experiencias Interactivas:' description='Más allá de la funcionalidad, nos enfocamos 
en la interactividad. Desarrollamos aplicaciones 
que no solo resuelven problemas, sino que 
también crean experiencias inmersivas y 
memorables para tus usuarios.' />

                <CardService title='Chatbots Inteligentes:' description='La comunicación 24/7 está a solo un clic de 
distancia. Nuestros chatbots inteligentes 
están diseñados para brindar respuestas 
rápidas y precisas, mejorando la experiencia 
del usuario y optimizando la eficiencia.' />

            </div>

            <div
                className="flex flex-wrap gap-8 items-center justify-center md:items-start md:justify-between text-white mt-10"
            >
                <CardService title='Automatización Empresarial:' description='Optimizamos tus procesos con soluciones 
CRM y aplicaciones empresariales. Desde 
la gestión de clientes hasta la automatización 
de tareas, nuestro enfoque es mejorar la 
eficiencia y hacer crecer tu negocio.' />


                <CardService title='Integración Perfecta:' description='Tu ecosistema digital merece coherencia. 
Desarrollamos aplicaciones y chatbots que se 
integran sin esfuerzo con tus sistemas 
existentes, asegurando una experiencia de
usuario fluida y eficiente.' />

                <CardService title='Análisis y Mejora Continua:' description='El desarrollo no se detiene en el lanzamiento. 
Implementamos análisis detallados para 
comprender el rendimiento de tus aplicaciones 
y chatbots, asegurando mejoras continuas 
para mantener tu negocio en la cima.' />

            </div>
        </div>
    )
}

export default DesignAplications