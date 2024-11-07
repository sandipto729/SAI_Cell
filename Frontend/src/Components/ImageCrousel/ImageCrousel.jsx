import React from 'react';
import Slider from "react-slick";
import styles from './ImageCrousel.module.scss'; // Ensure this path is correct

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const images = [
    "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730974505/ydewqic70ndnfkkso351.jpg"
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
      <img src={images} className={styles.heroImage} />

    </section>
  );
};

export default HeroCarousel;
