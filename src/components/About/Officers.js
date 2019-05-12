import React from 'react';
import OfficerCard from './OfficerCard';
import * as officers from '../../config/officers';

export const Officers = () => {
  let lawTeam = [];
  let edwTeam = [];
  officers.LAW_OBJ.map(officer => {
    Object.values(officer).forEach(officer => lawTeam.push(officer));
  });
  officers.EDW_OBJ.map(officer => {
    Object.values(officer).forEach(officer => edwTeam.push(officer));
  });
  return (
    <section className="about-officers">
      <h2>The KU Lawrence Team</h2>
      {lawTeam.map(officer => (
        <OfficerCard
          title={officer.title}
          name={officer.name}
          bio={officer.bio}
          pic={officer.pic}
          email={officer.email}
        />
      ))}
      <h2>The KU Edwards Team</h2>
      {edwTeam.map(officer => (
        <OfficerCard
          title={officer.title}
          name={officer.name}
          bio={officer.bio}
          pic={officer.pic}
          email={officer.email}
        />
      ))}
    </section>
  );
};

export default Officers;
