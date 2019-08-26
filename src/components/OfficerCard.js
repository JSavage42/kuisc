import React, { useState } from 'react';
import styled from 'styled-components'

const OfficerCard = ({ pic, name, title, email, bio }) => {
  const [isOpen, setIsOpen] = useState(false);
  const OfficerImage = styled.div`
    cursor: pointer;
    max-height: 100%;
    background-image: url(${pic});
    background-color: #00000055;
    background-size: cover;
    background-blend-mode: overlay;
    background-position: center;
    margin: 1rem 0;
    padding: 10rem 2rem;
  `

  const OfficerTitle = styled.h4`
    text-align: center;
    font-size: 2rem;
    color: #fff;

  `

  const Name = styled.p`
    color: #fff;
    font-size: 1.5rem;
    text-shadow: 1px 1px #00000022;
    text-align: center;
  `

  const Bio = styled.div`
    color: #fff;
    text-align: center;
    font-size: 1rem;
    text-shadow: 1px 1px #00000022;
    background-color: #00000055;
    border-radius: 5px;
    padding: .25rem;

    a {
      color: #fff;
      text-align: center;

      &:visited {
        color: #fff;
      }
    }
  `

  return (
    <OfficerImage onClick={() => setIsOpen(!isOpen)}>
      <OfficerTitle>{title}</OfficerTitle>
      {isOpen && (
        <React.Fragment>
          <Bio>
            {bio}
            <br />
            Email: <a href={`mailto:${email}`}>{email}</a>
          </Bio>
        </React.Fragment>
      )}
      <Name>{name}</Name>
    </OfficerImage>
  )
}
export default OfficerCard;
