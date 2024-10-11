import React from 'react';

function PetInfo({ name, age, breed, skills }) {
  return (
    <div className="pet-info">
      <h2>Имя: {name}</h2>
      <p>Возраст: {age} месяца</p>
      <p>Порода: {breed}</p>
      <p>Умеет: {skills.join(', ')}</p>
    </div>
  );
}

export default PetInfo;
