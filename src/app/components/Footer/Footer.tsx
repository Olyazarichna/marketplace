import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={`${'container'} ${styles.footer}`}>
      <Link href="/" className={styles.logo}>
        Навколо дозвілля
      </Link>
      <ul className={styles.list}>
        <li className={styles.list__items}><a href='#'>Про нас</a></li>
        <li className={styles.list__items}><a href='#'>Дозвілля</a></li>
        <li className={styles.list__items}><a href='#'>Контакти</a></li>
        <li className={styles.list__items}><a href='#'>Організаторам</a></li>
      </ul>
      <ul className={styles.iconList}>
        <li className={styles.iconList__item}>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none">
            {/* SVG path */}
          </svg>
        </li>
        <li className={styles.iconList__item}>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none">
            {/* SVG path */}
          </svg>
        </li>
        <li className={styles.iconList__item}>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" fill="none">
            {/* SVG path */}
          </svg>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
