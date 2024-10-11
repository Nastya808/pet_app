import React from 'react';
import PetInfo from './PetInfo';
import PetGallery from './PetGallery';

function PetApp() {
  const pet = {
    name: 'Эфир',
    age: 3,
    breed: 'Мальтипу',
    skills: ['ловить мух', 'выполнять команды', 'играться с игрушками'],
    photos: [
      '/images/efir1.jpg',
      '/images/efir2.jpg',
      '/images/efir3.jpg',
      '/images/efir4.jpg',
      '/images/efir5.jpg'
    ]
  };

  return (
    <div className="app">
      <h1>Мой питомец</h1>
      <PetGallery photos={pet.photos} />
      <PetInfo name={pet.name} age={pet.age} breed={pet.breed} skills={pet.skills} />
    </div>
  );
}

export default PetApp;
