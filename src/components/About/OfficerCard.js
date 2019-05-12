import React from 'react';
import styled from 'styled-components';
import './OfficerCard.css';

const OfficerCard = props => {
  const CardFront = styled.div`
    background-image: url(${props.pic})
  `;

  return (
    <article className="about-officers --officer">
      <div className="card">
        <div className="card__content">
          <CardFront className="card__front">
            <h3 className="card__title">{props.name}</h3>
            <p className="card__subtitle">{props.title}</p>
          </CardFront>

          <div className="card__back">
            <p className="card__body">{props.bio}</p>
            <a href={`mailto:${props.email}`} className="card__email">{props.email}</a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default OfficerCard;
