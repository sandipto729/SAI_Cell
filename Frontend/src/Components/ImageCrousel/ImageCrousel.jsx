import React from 'react';
import Slider from "react-slick";
import styles from './ImageCrousel.module.scss'; // Ensure this path is correct

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1596180262479-467c9ef61fdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkdGh8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1596092361683-e7e6a704d762?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1592683286596-c97aaba9f411?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <section className={styles.heroSection}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.heroSlide}>
            <img src={image} alt={`Slide ${index + 1}`} className={styles.heroImage} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroCarousel;
