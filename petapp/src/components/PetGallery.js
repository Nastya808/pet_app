import React, { useState, useEffect, useCallback } from 'react';
import Photo from './Photo';
import Navigation from './Navigation';

function PetGallery({ photos }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = useCallback(() => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  }, [photos.length]);

  const prevPhoto = useCallback(() => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  }, [photos.length]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight') {
        nextPhoto();
      } else if (event.key === 'ArrowLeft') {
        prevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [nextPhoto, prevPhoto]);

  return (
    <div className="gallery">
      <Navigation nextPhoto={nextPhoto} prevPhoto={prevPhoto} />
      <Photo src={photos[currentPhotoIndex]} alt="Эфир" />
      <div className="photo-index">
        <p>Фото {currentPhotoIndex + 1} из {photos.length}</p>
      </div>
    </div>
  );
}

export default PetGallery;
