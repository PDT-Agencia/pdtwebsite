import PartnerNotFound from "@/app/components/PartnerNotFound";
import IndexLayout from "@/app/layouts/IndexLayout";
import { SvgArrowIcon } from "@/app/svg/svgs";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {

  const team = [
    {
      id: 1,
      name: 'CARLOS CÁRDENAS',
      rol: 'Lider en desarrollo',
      image: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242379/partner-1_gzscio.png",
      url: '/partner/1',
      description: 'Carlos Cárdenas es un líder en desarrollo con una destacada trayectoria en tecnología e innovación. Con habilidades técnicas y de liderazgo excepcionales, guía equipos hacia el éxito en proyectos complejos. Su enfoque estratégico y compromiso con la excelencia lo convierten en un partner invaluable para impulsar iniciativas tecnológicas.'
    },
    {
      id: 2,
      name: 'KEVIN BARRAGÁN',
      rol: 'Lider en diseño',
      image: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242380/partner-2_x7jxku.png",
      url: '/partner/2',
      description: 'Kevin Barragán es un líder en diseño con una destacada trayectoria en creatividad e innovación. Con un ojo agudo para el detalle y una habilidad excepcional para transformar ideas en realidades visuales impactantes, guía equipos hacia el éxito en proyectos complejos. Su enfoque estratégico y compromiso con la excelencia lo convierten en un partner invaluable para impulsar iniciativas de diseño.'
    },
    {
      id: 3,
      name: 'JENNIFER ÁLVAREZ',
      rol: 'Diseñadora gráfica',
      image: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242380/partner-3_kzxqsl.png",
      url: '/partner/3',
      description: 'Jennifer Álvarez es una talentosa diseñadora gráfica con una destacada trayectoria en la creación de diseños visuales innovadores. Con una habilidad excepcional para combinar creatividad y funcionalidad, transforma ideas en piezas gráficas impactantes. Su atención al detalle y compromiso con la excelencia hacen de Jennifer una profesional invaluable para cualquier proyecto de diseño.'
    },
    {
      id: 4,
      name: 'ROBERTO GAMBOA',
      rol: 'Diseñador gráfico',
      image: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242382/partner-4_raoet0.png",
      url: '/partner/4',
      description: 'Roberto Gamboa es un talentoso diseñador gráfico con una destacada trayectoria en la creación de diseños visuales innovadores. Con una habilidad excepcional para combinar creatividad y funcionalidad, transforma ideas en piezas gráficas impactantes. Su atención al detalle y compromiso con la excelencia hacen de Roberto una profesional invaluable para cualquier proyecto de diseño.'
    },
    {
      id: 5,
      name: 'DANIEL ARGUELLES',
      rol: 'Desarrollador backend',
      image: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242383/partner-5_wnwnsn.png",
      url: '/partner/5',
      description: 'Daniel Arguelles es un destacado desarrollador backend con una sólida trayectoria en la creación de soluciones tecnológicas robustas y eficientes. Con una profunda comprensión de la arquitectura de software y una habilidad excepcional para resolver problemas complejos, garantiza el funcionamiento óptimo de sistemas y aplicaciones. Su dedicación y compromiso con la excelencia hacen de Daniel un profesional invaluable para cualquier proyecto de desarrollo.'
    }
  ];
  // Find the team member with the id from params
  const teamMember = team.find(member => member.id === parseInt(params.id));

  if (!teamMember) {
    return <IndexLayout>
      <div className='w-full h-screen bg-black text-white flex flex-col items-center justify-center'>
        <PartnerNotFound id={params.id} />
      </div>

    </IndexLayout>;
  }


  return (
    <IndexLayout>
      <section className="w-full h-full md:h-screen flex items-center justify-center">
        <div className='w-full max-w-[1440px] h-full text-white flex items-center justify-center '>

          <div className=" flex flex-col md:flex-row gap-20 justify-center items-center mt-20 px-5 md:px-10">
            <div className="flex items-end justify-center text-white w-full sm:max-w-80 h-full md:w-[40rem] pt-10">
              <div className='flex flex-col'>
                <Image src={teamMember.image} alt={teamMember.name} width={300} height={300} loading='lazy' className="w-full h-full" />
                <div className='flex items-center'>
                  <div className='w-[5px] h-[5px] bg-red-500 rounded-full'></div>
                  <div className='w-full h-[1px] bg-red-500 rounded-full'></div>
                  <div className='w-[5px] h-[5px] bg-red-500 rounded-full'></div>
                </div>
              </div>

            </div>

            <div className='flex flex-col gap-5 h-full w-full pb-10 md:pb-0'>

              <div className='flex flex-col gap-1'>
                <h1 className="text-4xl font-semibold">
                  {teamMember.name}
                </h1>
                <p className="text-white/80 text-2xl">{teamMember.rol}</p>
              </div>

              <p className="text-xl text-white/90 font-light">{teamMember.description}</p>

              <Link
                href='/about-team#team'
                className="w-fit bg-red-500 rotate-180 rounded-full  hover:bg-red-600 duration-200 text-white font-bold p-3 "
              >
                <SvgArrowIcon size={20} color="#fff" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </IndexLayout>
  )
}