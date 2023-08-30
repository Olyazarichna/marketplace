import React, { useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

interface HeaderProps {
  city: string; // You might need to adjust the type of the 'city' prop
}

const Header: React.FC<HeaderProps> = ({ city }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState<string>(
    typeof localStorage !== 'undefined' ? localStorage.getItem('authToken') || '' : ''
  );

  const viewActivities = async () => {
    setIsOpen(!isOpen);
    // const data = await getAllActivities();
    // console.log('data', data);
  };

  const openModal = () => {
    console.log('open modal');
  };

  const logout = () => {
    setToken('');
  };

  return (
    <header className={`${'container'} ${styles.header}`}>
      <button className={styles.btn} aria-label="Toggle Menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" fill="none">
          <path stroke="#000" strokeWidth="2" d="M0 1h20M0 8.3h20M0 15.5h20" />
        </svg>
      </button>
      <Link href="/" className={styles.logo}>
        <h2> Навколо дозвілля</h2>
      </Link>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <button className={styles.location} onClick={openModal}>
            {city ? city : 'Київ'}
          </button>
        </li>
        <li className={styles.list__item}>
          <button
            className={isOpen ? styles.list__btnOpen : styles.list__btn}
            onClick={viewActivities}
          >
            Види дозвілля
          </button>
          {isOpen && (
            <ul className={styles.activityList}>
              <li className={styles.activityList__item}>
                <button className={styles.activityList__btn}>Для дорослих</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none">
                  {/* SVG path here */}
                </svg>
              </li>
              <li className={styles.activityList__item}>
                <button className={styles.activityList__btn}>Для дітей</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none">
                  {/* SVG path here */}
                </svg>
              </li>
            </ul>
          )}
        </li>
      </ul>
      {/* ... (other code) */}
    </header>
  );
};

export default Header;

