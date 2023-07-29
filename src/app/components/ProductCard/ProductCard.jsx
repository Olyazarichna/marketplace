"use client";

import styles from "./ProductCard.module.scss";
import Image from "next/image";

const ProductCard = ({ img, onClick, title, date, location, time }) => {
  return (
    <>
      <div className={styles.imgWrapper}>
        <Image src={img} alt={title} />
        <button className={styles.favBtn} onClick={onClick}></button>
      </div>

      <h3>{title}</h3>
      <p>{date}</p>
      <p>{location}</p>
      <p>{time}</p>
    </>
  );
};

export default ProductCard;
