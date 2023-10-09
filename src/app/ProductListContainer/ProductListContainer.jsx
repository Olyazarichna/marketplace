import styles from './ProductListContainer.module.scss';
import Button from '../components/Button/Button';

const ProductListContainer = ({ title, children }) => {
  const showMore = () => {
    console.log('show more');
  };

  return (
    <section className={styles.mainSection}>
      <h3 className={styles.heading}>{title}</h3>
      {children}
      <Button title="Більше подій" onClick={showMore} />
    </section>
  );
};

export default ProductListContainer;
