import React from 'react';
import TeamMember from './TeamMember';
import { team } from '../(pages)/partner/[id]/team';

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
