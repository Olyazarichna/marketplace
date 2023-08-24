'use client';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useState } from 'react';
// import logout from '@/app/services/logout';

const Header = ({ city }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken]= useState(localStorage?.getItem('authToken') || '');

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
      <button className={styles.btn}>
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
                <button className={styles.activityList__btn}>Для дорослих</button>{' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none">
                  <path
                    stroke="#003049"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6-6 6"
                  />
                </svg>
              </li>
              <li className={styles.activityList__item}>
                <button className={styles.activityList__btn}>Для дітей</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none">
                  <path
                    stroke="#003049"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6-6 6"
                  />
                </svg>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <Link href="/addLaisurePage" className={styles.button}>
        Пропоную дозвілля
      </Link>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Пошук" className={styles.input} />
        <button className={styles.searchBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path d="m18.2 19.8-6.8-6.9a6.5 6.5 0 0 1-4.1 1.4c-2 0-3.6-.6-5-2s-2-3-2-5 .6-3.6 2-5 3-2 5-2 3.6.6 5 2 2 3 2 5a6.6 6.6 0 0 1-1.4 4.1l6.8 6.8-1.5 1.6Zm-11-7.6c1.4 0 2.6-.5 3.5-1.5 1-.9 1.5-2 1.5-3.4s-.5-2.5-1.5-3.5c-.9-1-2-1.4-3.4-1.4S4.8 3 3.8 3.8c-1 1-1.4 2.1-1.4 3.5 0 1.3.5 2.5 1.4 3.4 1 1 2.1 1.5 3.5 1.5Z" />
          </svg>
        </button>
      </div>

      <ul className={styles.btnList}>
        <li className={styles.btnList__item}>
          {token ? (
            <button className={styles.btnList__btnLogout} onClick={logout}>
              <svg
                className={styles.btnList__icon}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path d="m14 5-1.4 1.4L14.2 8H6v2h8.2l-1.6 1.6L14 13l4-4-4-4ZM2 2h7V0H2a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7v-2H2V2Z" />
              </svg>
            </button>
          ) : (
            <Link href="/loginPage">
              <svg
                className={styles.btnList__icon}
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
              >
                <path d="M10.5 0a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 12.5c5.5 0 10 2.2 10 5V20H.5v-2.5c0-2.8 4.5-5 10-5Z" />
              </svg>
            </Link>
          )}
        </li>
        <li className={styles.btnList__item}>
          <button className={styles.btnList__btn}>
            <svg
              className={styles.btnList__icon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
            >
              <path d="m12 20.6-.6.6a.8.8 0 0 0 1.2 0l-.6-.6Zm0-16-.6.6a.8.8 0 0 0 1.2 0l-.6-.6Zm.6 15.4L3 10.5 2 11.6l9.5 9.6 1.2-1.2Zm8.4-9.5L11.4 20l1.2 1.2 9.5-9.6-1.1-1.1ZM9.9 3.6l1.5 1.6L12.6 4 11 2.5 10 3.6Zm2.7 1.6L14 3.6 13 2.5 11.4 4l1.2 1.2Zm5-4.6c-1.8 0-3.4.7-4.6 1.9L14 3.6c1-.9 2.2-1.4 3.4-1.4V.6Zm4.8 6.5c0 1.2-.5 2.5-1.4 3.4l1.1 1.1A6.5 6.5 0 0 0 24 7.1h-1.6ZM24 7A6.5 6.5 0 0 0 17.5.6v1.6a4.9 4.9 0 0 1 4.9 4.9H24ZM6.5 2.2c1.2 0 2.5.5 3.4 1.4L11 2.5A6.5 6.5 0 0 0 6.5.6v1.6ZM1.6 7.1a4.9 4.9 0 0 1 4.9-4.9V.6A6.5 6.5 0 0 0 0 7.1h1.6ZM3 10.5A4.9 4.9 0 0 1 1.6 7H0c0 1.7.7 3.3 1.9 4.5L3 10.5Z" />
            </svg>
          </button>
        </li>
        <li className={styles.btnList__item}>
          <Link href="/cartPage" className={styles.btnList__btn}>
            <svg
              className={styles.btnList__icon}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path d="M16 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM0 0h3.3l1 2H19a1 1 0 0 1 1 1l-.1.5-3.6 6.5c-.3.6-1 1-1.8 1H7.2l-.9 1.6v.2a.3.3 0 0 0 .2.2H18v2H6a2 2 0 0 1-1.8-3l1.4-2.4L2 2H0V0Zm6 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm9-7 2.8-5H5l2.4 5H15Z" />
            </svg>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
