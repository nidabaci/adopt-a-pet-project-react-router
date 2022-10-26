import React from 'react';

const Hero = ({ image, displayText }) => {
  const type = ''

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(rgb(210 124 124 / 18%), rgb(0 205 54 / 59%)), url("${image || 'corgi.jpg'}")`,
        backgroundBlendMode: 'saturation',
        backgroundSize: 'cover',
        backgroundColor: 'rgb(0 0 0 / 40%)'
        
      }}
    >
      <h2>{displayText || getHeroTitle(type)}</h2>
    </div>
  );
};

export default Hero;

const getHeroTitle = (type) => {
  switch (type) {
    case 'dog':
      return 'Dogs';
    case 'cat':
      return 'Cats';
    case 'rabbit':
      return 'Rabbits';
    case 'bird':
      return 'Birds';
    default:
      return 'Find your perfect pet';
  }
};
