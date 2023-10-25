import { products } from '../products';
import BtnBack from '../../components/BtnBack/BtnBack';
import Image from 'next/image';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import styles from './styles.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductList from '../../components/ProductList/ProductList';

const Product = ({ params: { id } }) => {
  return (
    <>
      <Header />
      <section className="container">
        <BtnBack />
        {/* <h1>Product {id}</h1> */}
        <div className={styles.cardWrapper}>
          <Image src={products[0].img[0]} alt={products[0].title} className={styles.img} />
          <div className={styles.infoWrapper}>
            <h2 className={styles.heading}>{products[0].title}</h2>
            <p>{products[0].description}</p>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <p className={styles.location}>{products[0].location}</p>
              </li>
              <li className={styles.list__item}>
                <p className={styles.amountOfPeople}>{products[0].amountOfPeople}</p>
              </li>
              <li className={styles.list__item}>
                <p className={styles.price}>{products[0].price} грн.</p>
              </li>
              <li className={styles.list__item}>
                <p className={styles.date}>{[products[0].date, ',', products[0].time]}</p>
              </li>
            </ul>
            <button className={styles.btn}>Замовити</button>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <h3 className={styles.title}>Більше фото</h3>
          <ImageSlider />
        </div>
        <div className={styles.activities}>
          <h3 className={styles.text}>Cхожі події</h3>
          <ProductList products={products} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
