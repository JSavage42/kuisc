import React from "react"
import styled from 'styled-components';
import OfficerCard from "./OfficerCard"
import * as officers from "../config/officers"

const OfficerContainer = styled.section`
  display: flex;
  flex-direction: column;
`

const Lawrence = styled.article`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`

const Edwards = styled.article`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`

export const Officers = () => {
  let lawTeam = []
  let edwTeam = []
  officers.LAW_OBJ.map(officer => {
    Object.values(officer).forEach(officer => lawTeam.push(officer))
  })
  officers.EDW_OBJ.map(officer => {
    Object.values(officer).forEach(officer => edwTeam.push(officer))
  })
  return (
    <OfficerContainer>
      <h3>The KU Lawrence Team</h3>
      <Lawrence>
        {lawTeam.map(officer => (
          <OfficerCard
            title={officer.title}
            name={officer.name}
            bio={officer.bio}
            pic={officer.pic}
            email={officer.email}
          />
        ))}
      </Lawrence>
      <h3>The KU Edwards Team</h3>
      <Edwards>
        {edwTeam.map(officer => (
          <OfficerCard
            title={officer.title}
            name={officer.name}
            bio={officer.bio}
            pic={officer.pic}
            email={officer.email}
          />
        ))}
      </Edwards>
    </OfficerContainer>
  )
}

export default Officers
