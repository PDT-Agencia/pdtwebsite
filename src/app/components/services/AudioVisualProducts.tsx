import React from 'react'
import CardImage from '../cards/CardImage'
import CardService from '../cards/CardService'
import Service from "..//.//..//assets/services/images/4.png"

const AudioVisualProducts = () => {
    return (
        <div className="w-full max-w-[1440px] flex flex-col gap-20 px-5 2xl:px-0">
            <CardImage image={Service} title='Producción audiovisual' />
            <div
                className="flex flex-wrap gap-8 items-center justify-center md:items-start md:justify-between text-white mt-10"
            >
                <CardService title='Narrativas Visuales Inolvidables:' description='En PDT, transformamos ideas en experiencias 
visuales cautivadoras. Desde videos 
promocionales hasta contenido multimedia, 
nuestro equipo de producción audiovisual da 
vida a tus historias de una manera que deja 
una impresión duradera.' />

                <CardService title='Calidad Cinematográfica:' description='Utilizamos equipos de última generación y 
técnicas cinematográficas para asegurar que 
cada producción alcance estándares visuales 
y auditivos excepcionales.' />

                <CardService title='Creatividad en Movimiento:' description='La creatividad no tiene límites. Nuestros 
productores audiovisuales trabajan en estrecha
colaboración contigo para dar vida a tus ideas, 
creando contenido que va más allá de lo
estándar y deja una marca única.' />

            </div>

            <div
                className="flex flex-wrap gap-8 items-center justify-center md:items-start md:justify-between text-white mt-10"
            >
                <CardService title='Efectividad Emocional:' description='Cada producción tiene el poder de evocar 
emociones. Nos esforzamos por crear 
contenido que no solo se ve y suena bien, 
sino que también conecta emocionalmente 
con tu audiencia, dejando una impresión 
duradera.' />


                <CardService title='Producción Eficiente:' description='El tiempo es esencial. Nuestro equipo de 
producción se compromete a entregar 
resultados de manera eficiente sin 
comprometer la excelencia, garantizando 
que tu mensaje llegue en el momento 
adecuado.' />

                <CardService title='Historias que Resonan:' description='Más allá de la imagen y el sonido, contamos 
historias. Nuestra producción audiovisual se 
centra en crear narrativas visuales que resuenan
con tu audiencia, generando un impacto 
significativo en tu marca.' />

            </div>
        </div>
    )
}

export default AudioVisualProducts