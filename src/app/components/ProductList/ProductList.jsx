"use client";

import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";
import { useState } from "react";

const ProductList = ({ title, products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(3);

  const totalProducts = products.length;
  const maxStartIndex = totalProducts - productsPerPage;

  const goToNext = () => {
    if (startIndex < maxStartIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  const goToPrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const showMore = () => {
    console.log("show more");
  };

  const addToFavorite = () => {
    console.log("add to fav");
  };
  return (
    <section className={styles.mainSection}>
      <h3 className={styles.heading}>{title}</h3>
      <div className={styles.listWrapper}>
        <button
          className={styles.btn}
          onClick={goToPrev}
          disabled={startIndex === 0}
        >
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="102"
            fill="none"
          >
            <path stroke="#003049" d="M51 101 1 51 51 1" />
          </svg>
        </button>

        <ul className={styles.productList}>
          {products
            .slice(startIndex, startIndex + productsPerPage)
            .map(({ img, id, title, location, time, date }) => (
              <li key={id} className={styles.productList__item}>
                <ProductCard
                  img={img}
                  onClick={addToFavorite}
                  title={title}
                  location={location}
                  time={time}
                  date={date}
                />
              </li>
            ))}
        </ul>

        <button
          className={styles.btn}
          onClick={goToNext}
          disabled={startIndex >= maxStartIndex}
        >
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="102" fill="none"><path stroke="#003049" d="m1 1 50 50-50 50"/></svg>
        </button>
      </div>

      <Button title="Більше подій" onClick={showMore} />
    </section>
  );
};

export default ProductList;
