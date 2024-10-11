import React from 'react';

function Navigation({ nextPhoto, prevPhoto }) {
  return (
    <div>
      <button className="nav-button" onClick={prevPhoto}>←</button>
      <button className="nav-button" onClick={nextPhoto}>→</button>
    </div>
  );
}

export default Navigation;
