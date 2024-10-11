import React from 'react';

function Photo({ src, alt }) {
  return <img src={src} alt={alt} className="pet-photo" />;
}

export default Photo;
