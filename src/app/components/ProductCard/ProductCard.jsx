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
      <h3 className={styles.title}>{title}</h3>
      <ul>
        <li className={styles.textItem}>
          <p className={styles.date}>{date}</p>
        </li>
        <li className={styles.textItem}>
          <p className={styles.location}>{location}</p>
        </li>
        <li className={styles.textItem}>
          <p className={styles.time}>{time}</p>
        </li>
      </ul>
    </>
  );
};

export default ProductCard;
