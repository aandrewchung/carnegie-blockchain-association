// src/components/PersonCard.js
import React from 'react';
import './PersonCard.css'; // Ensure you have this CSS file in the same directory

const PersonCard = ({ firstName, lastName, graduationYear, company, twitter, imageUrl }) => {
  return (
    <div className="person-card">
      <img src={imageUrl} alt={`${firstName} ${lastName}`} />
      <h2>{firstName} {lastName}</h2>
      <p>{company}</p>
      <div className="additional-info">
        <p>Graduation Year: {graduationYear}</p>
        <p>Twitter: <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">@{twitter}</a></p>
      </div>
    </div>
  );
};

export default PersonCard;
