import PartnerNotFound from "@/app/components/PartnerNotFound";
import IndexLayout from "@/app/layouts/IndexLayout";
import { SvgArrowIcon } from "@/app/svg/svgs";
import Image from "next/image";
import Link from "next/link";
import { team } from './team';

export function generateStaticParams() {
  return team.map(member => ({ id: member.id.toString() }));
}
  
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params

  const teamMember = team.find(member => member.id === parseInt(id));

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