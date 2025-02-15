import React from 'react'
import ProductSlider from './ProductSlider'
import VideoHeader from './VideoHeader'
import ProductCard from './ProductCard'
import News from './News'
import HeroSec from './HeroSec'
import ProductGallery from './ProductGallery'




function Header() {
  return (
    <>
    <div>
      <div id="carouselExampleIndicators" className="carousel slide1 -tw-mt-9">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://earthcart.online/cdn/shop/files/405960993e295c727458748552d83d6b.jpg?v=1731853147&width=1500" className="d-block slide-img" alt="Featured Product1" />
          </div>
          <div className="carousel-item">
            <img src="https://earthcart.online/cdn/shop/files/slide-3.jpg?v=1731855201&width=3000" className="d-block slide-img" alt="Feature Product2" />
          </div>
          <div className="carousel-item">
            <img src="https://earthcart.online/cdn/shop/files/HERO._CB489100647.jpg?v=1731855397&width=3000" className="d-block slide-img" alt="Feature Product3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


    <ProductSlider />
    <VideoHeader />
    <ProductCard />
    <ProductGallery/>
      <HeroSec/>
    <News/>

     
    </>
  )
}

export default Header