import React, { useState } from 'react';
import './css/shopping.css';
const ShopSlider = () => {
  const images = [
    'https://via.placeholder.com/600x300?text=Image+1',
    'https://via.placeholder.com/600x300?text=Image+2',
    'https://via.placeholder.com/600x300?text=Image+3',
    'https://via.placeholder.com/600x300?text=Image+4',
  ];

  // State to hold the index of the current image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const handlePrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
      {/* Left Arrow */}
      <span className="arrow left-arrow" onClick={handlePrevImage}>
        &#10094;
      </span>

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="slider-image"
      />

      {/* Right Arrow */}
      <span className="arrow right-arrow" onClick={handleNextImage}>
        &#10095;
      </span>
    </div>
  );
};

export default ShopSlider;
