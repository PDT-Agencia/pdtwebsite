import React from 'react';
import TeamMember from './TeamMember';
import New1 from "../assets/about-team/team/1.png"
import New2 from "../assets/about-team/team/2.png"
import New3 from "../assets/about-team/team/3.png"
import New4 from "../assets/about-team/team/4.png"
import New5 from "../assets/about-team/team/5.png"

const team = [
    {
        id: 1,
        name: 'CARLOS CÁRDENAS',
        rol: 'Lider en desarrollo',
        image: New1,
        url: '/partner/1'
    },
    {
        id: 2,
        name: 'KEVIN BARRAGÁN',
        rol: 'Lider en diseño',
        image: New2,
        url: '/partner/2'
    },
    {
        id: 3,
        name: 'JENNIFER ÁLVAREZ',
        rol: 'Diseñadora gráfica',
        image: New3,
        url: '/partner/3'
    },
    {
        id: 4,
        name: 'ROBERTO GAMBOA',
        rol: 'Diseñador gráfico',
        image: New4,
        url: '/partner/4'
    },
    {
        id: 5,
        name: 'DANIEL ARGUELLES',
        rol: 'Desarrollador backend',
        image: New5,
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
