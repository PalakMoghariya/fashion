import React, { useState, useEffect } from 'react';
import './css/slider.css'

const ProductSlider = () => {
  const [currentSlides, setCurrentSlides] = useState({});
  const [isPaused, setIsPaused] = useState({});

  const products = [
    {
      id: 1,
      images: [
        'https://m.media-amazon.com/images/I/71YXmT1ya9L._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71ii03M64CL._SX569_.jpg',
        'https://m.media-amazon.com/images/I/71fjgXvYNgL._SX679_.jpg',
      ],
    },
    {
      id: 2,
      images: [
        'https://m.media-amazon.com/images/I/71l4M1nvIvL._SX569_.jpg',
        'https://m.media-amazon.com/images/I/51jAxBrJCtL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71XNeka-BRL._SX569_.jpg'
      ],
    },
    {
      id: 3,
      images: [
        'https://m.media-amazon.com/images/I/71hLwtW+Y7L._SY450_.jpg',
        'https://m.media-amazon.com/images/I/41I1A1cLXyL.AC_SX250.jpg',
        'https://m.media-amazon.com/images/I/41K43b9fFqL.AC_SX250.jpg',
      ],
    },
    {
      id: 4,
      images: [
        'https://m.media-amazon.com/images/I/61rKBzwwPZL._SY741_.jpg',
        'https://m.media-amazon.com/images/I/61u6E7uQ93L._SY741_.jpg',
        'https://m.media-amazon.com/images/I/617PqifhwSL._SY741_.jpg',
      ],
    }, {
      id: 5,
      images: [
        'https://m.media-amazon.com/images/I/61oP6MAjPlL._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/61tdV9cDclL._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/51CE8bIBoYL._AC_UL320_.jpg',
      ],
    }, {
      id: 6,
      images: [
        'https://m.media-amazon.com/images/I/71sfg7hztfL._AC_UY218_.jpg',
        'https://m.media-amazon.com/images/I/71kQBAnEq2L._AC_UY218_.jpg',
        'https://m.media-amazon.com/images/I/510+velDs5L._AC_UY218_.jpg',
      ],
    },


    // Add more products as needed
  ];

  useEffect(() => {
    // Initialize all slides to 0 when component mounts
    setCurrentSlides(
      products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
    );
  }, []); // Run once on mount

  useEffect(() => {
    const interval = setInterval(() => {
      products.forEach((product) => {
        if (!isPaused[product.id]) {
          setCurrentSlides(prev => ({
            ...prev,
            [product.id]: (prev[product.id] + 1) % product.images.length
          }));
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, products]);

  const nextSlide = (productId) => {
    setCurrentSlides(prev => ({
      ...prev,
      [productId]: (prev[productId] + 1) % products.find(p => p.id === productId).images.length
    }));
  };

  const prevSlide = (productId) => {
    setCurrentSlides(prev => ({
      ...prev,
      [productId]: (prev[productId] - 1 + products.find(p => p.id === productId).images.length) % products.find(p => p.id === productId).images.length
    }));
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-slider tw-mt-5"
          onMouseEnter={() => setIsPaused(prev => ({ ...prev, [product.id]: true }))}
          onMouseLeave={() => setIsPaused(prev => ({ ...prev, [product.id]: false }))}
        >
          <div className="slider-container">
            <button className="slider-button prev" onClick={() => prevSlide(product.id)}>
              &#60;
            </button>
            <div className="slides">
              <img
                src={product.images[currentSlides[product.id] || 0]}
                alt={`Product ${product.id} - Image ${(currentSlides[product.id] || 0) + 1}`}
              />
            </div>
            <button className="slider-button next" onClick={() => nextSlide(product.id)}>
              &#62;
            </button>
          </div>
        </div>
      )
      )
      }
    </div>
  );
};

export default ProductSlider;