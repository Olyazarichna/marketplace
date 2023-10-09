'use client';
import styles from './ImageSlider.module.scss';
import img1 from '../../../../public/images/aboutUs1x.jpg';
import img2 from '../../../../public/images/girls.jpg';
import img3 from '../../../../public/images/group.jpg';

import { useState } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = index => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src={images[currentIndex]} alt="bicycle" width={1240} height={520} priority />
      </div>

      <div className={styles.btnWrapper}>
        {images.map((image, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={currentIndex === index ? styles.activeBnt : styles.btn}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
