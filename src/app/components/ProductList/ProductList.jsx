'use client';

import styles from './ProductList.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';
import Link from 'next/link';

const ProductList = ({ products }) => {
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

  const addToFavorite = () => {
    console.log('add to fav');
  };
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.productList}>
        {products
          .slice(startIndex, startIndex + productsPerPage)
          .map(({ img, id, title, location, time, date }) => (
            <li key={id} className={styles.productList__item}>
              <Link href={`/${id}`}>
                <ProductCard
                  img={img}
                  onClick={addToFavorite}
                  title={title}
                  location={location}
                  time={time}
                  date={date}
                />
              </Link>
            </li>
          ))}
      </ul>
      <div className={styles.btnWrapper}>
        <button className={styles.btn} onClick={goToPrev} disabled={startIndex === 0}>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1 7l6 6"
            />
          </svg>
        </button>
        <button className={styles.btn} onClick={goToNext} disabled={startIndex >= maxStartIndex}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 18 6-6-6-6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
