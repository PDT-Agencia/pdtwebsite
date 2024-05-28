import React from 'react';
import TeamMember from './TeamMember';

const team = [
    {
        id: 1,
        name: 'CARLOS CÁRDENAS',
        rol: 'Lider en desarrollo',
        image: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242379/partner-1_gzscio.png",
        url: '/partner/1'
    },
    {
        id: 2,
        name: 'KEVIN BARRAGÁN',
        rol: 'Lider en diseño',
        image: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242380/partner-2_x7jxku.png",
        url: '/partner/2'
    },
    {
        id: 3,
        name: 'JENNIFER ÁLVAREZ',
        rol: 'Diseñadora gráfica',
        image: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242380/partner-3_kzxqsl.png",
        url: '/partner/3'
    },
    {
        id: 4,
        name: 'ROBERTO GAMBOA',
        rol: 'Diseñador gráfico',
        image: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242382/partner-4_raoet0.png",
        url: '/partner/4'
    },
    {
        id: 5,
        name: 'DANIEL ARGUELLES',
        rol: 'Desarrollador backend',
        image: "https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242383/partner-5_wnwnsn.png",
        url: '/partner/5'
    }
];

const Team = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-20 pt-10 px-5 md:px-10">
            {team.map(member => (
                <TeamMember key={member.id} name={member.name} rol={member.rol} image={member.image} url={member.url} />
            ))}
        </div>
    );
};

export default Team;
