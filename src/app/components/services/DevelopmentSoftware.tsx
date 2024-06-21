import React from 'react'
import CardService from '../cards/CardService'
import CardImage from '../cards/CardImage'
import Service from "..//.//..//assets/services/images/1.png"

const DevelopmentSoftware = () => {
    return (
        <div className="w-full max-w-[1440px] flex flex-col gap-20 px-5 2xl:px-0">
            <CardImage image={Service} title='Desarrollo de software' />
            <div
                className="flex flex-wrap gap-8 items-center justify-center md:items-start md:justify-between text-white mt-10"
            >
                <CardService title='Desarrollo a tu medida' description='Transformamos
            ideas en soluciones digitales. Desde aplicaciones móviles hasta
            plataformas web, nuestro equipo de desarrolladores personaliza
            cada línea de código para cumplir con tus requerimientos
            específicos.' />

                <CardService title='Innovación Tecnológica:' description='En PDT, no solo
            seguimos las tendencias, las creamos. Nuestros desarrolladores
            están a la vanguardia de las últimas tecnologías para asegurar
            que tu proyecto no solo sea funcional, sino también
            revolucionario.' />

                <CardService title='Experiencia Fluida de Usuario:' description='Construimos software que no solo resuelve problemas, sino que
            también cautiva. Nuestros desarrolladores se enfocan en crear
            experiencias de usuario intuitivas y atractivas para dejar una
            impresión duradera.' />

            </div>

            <div
                className="flex flex-wrap gap-8 items-center justify-center md:items-start md:justify-between text-white mt-10"
            >
                <CardService title='Eficiencia en el Desarrollo:' description='El tiempo
            es valioso. Nuestro equipo de desarrolladores está comprometido
            con la entrega oportuna de proyectos sin sacrificar la calidad.
            Eficiencia y excelencia van de la mano en cada línea de código
            que escribimos.' />


                <CardService title='Seguridad
            en cada Aspecto:' description='La seguridad no es una
            opción, es una prioridad. Nuestros desarrolladores implementan
            protocolos de seguridad avanzados en cada fase del desarrollo
            para garantizar la protección de tus datos y la confidencialidad
            de tu proyecto.' />

                <CardService title='Soporte
            Continuo:' description='No terminamos cuando el
            desarrollo lo hace. Nuestro equipo de soporte técnico está
            disponible para garantizar que tu software funcione sin
            problemas. Actualizaciones, mejoras y asistencia constante para
            asegurar el éxito a largo plazo.' />

            </div>
        </div>
    )
}

export default DevelopmentSoftware