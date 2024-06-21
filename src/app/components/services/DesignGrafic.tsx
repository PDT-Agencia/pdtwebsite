import React from 'react'
import CardService from '../cards/CardService'
import CardImage from '../cards/CardImage'
import Service from "..//.//..//assets/services/images/3.png"

const DesignGrafic = () => {
    return (
        <div className="w-full max-w-[1440px] flex flex-col gap-20 px-5 2xl:px-0">
            <CardImage image={Service} title='Diseño gráfico' />
            <div
                className="flex flex-wrap gap-8 items-center justify-center md:items-start md:justify-between text-white mt-10"
            >
                <CardService title='Identidad Visual Impactante:' description='En PDT, creamos más que simples diseños;
construimos identidades visuales 
impactantes. Desde logotipos hasta 
materiales de marketing, nuestro equipo 
de diseñadores gráficos da vida a tu marca 
de una manera que resuena y perdura.' />

                <CardService title='Creatividad sin Límites:' description='Imágenes que cuentan historias y capturan 
la esencia de tu mensaje. Nuestros diseñadores 
exploran límites creativos para darle a tu 
proyecto una apariencia única y memorable.' />

                <CardService title='Diseño Responsivo:' description='La estética no se trata solo de lo visual, sino 
también de la adaptabilidad. Creamos 
diseños que se adaptan a diferentes 
plataformas y dispositivos, asegurando 
una experiencia coherente y atractiva en 
cualquier pantalla.' />

            </div>

            <div
                className="flex flex-wrap gap-8 items-center justify-center md:items-start md:justify-between text-white mt-10"
            >
                <CardService title='Comunicación Visual Efectiva:' description='Cada diseño tiene un propósito. Nuestro 
enfoque se centra en comunicar tu mensaje 
de manera efectiva, utilizando elementos 
visuales que conectan y resuenan 
con tu audiencia.' />


                <CardService title='Colaboración Creativa:' description='Tu visión se une a nuestra creatividad. 
Colaboramos estrechamente contigo 
para entender tus metas y valores, 
creando diseños que no solo se ven bien, 
sino que también comunican la esencia 
de tu proyecto.' />

                <CardService title='Evolución Estética Continua:' description='El diseño no es estático, y tampoco lo es 
nuestro enfoque. Estamos comprometidos 
con la evolución constante de tus elementos 
visuales para mantener tu presencia fresca 
y relevante en un mundo en constante cambio.' />

            </div>
        </div>
    )
}

export default DesignGrafic