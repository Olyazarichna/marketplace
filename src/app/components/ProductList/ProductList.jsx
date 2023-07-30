"use client";

import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import img1 from "../../../../public/images/aboutUs1x.jpg";
import img2 from "../../../../public/images/girls.jpg";
import img3 from "../../../../public/images/group.jpg";
import Button from "../Button/Button";
const products = [
  {
    img: img1,
    id: "123",
    title: "Вуличний театр для дітей",
    date: "2023-07-30",
    location: "Some Location 1",
    time: "15:00",
  },
  {
    img: img2,
    id: "1234",
    title: "Благодійний музичний вечір органної музики",
    date: "2023-08-01",
    location: "Some Location 2",
    time: "10:30",
  },
  {
    img: img3,
    id: "1235",
    title: "Онлайн майтсер-класи для дітей та дорослих",
    date: "2023-08-01",
    location: "Some Location 2",
    time: "10:30",
  },
];

const ProductList = ({ title }) => {
  const addToFavorite = () => {
    console.log("add to favorite");
  };
  return (
    <section className={styles.mainSection}>
      <h3 className={styles.heading}>{title}</h3>
      <ul className={styles.productList}>
        {products &&
          products.map(({ img, id, title, location, time, date }) => (
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
      <Button title="Більше подій" />
    </section>
  );
};

export default ProductList;
