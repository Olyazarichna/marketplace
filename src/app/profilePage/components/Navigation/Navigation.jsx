'use client';
import styles from './Navigation.module.scss';
import BtnBack from '@/components/BtnBack/BtnBack';
import Backdrop from '@/components/Backdrop/Backdrop';
import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal';
import { useState } from 'react';
import { unsetToken } from '@/redux/auth-slice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const [showLogoutConfirmationModal, setShowLogoutConfirmationModal] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem('accessToken');
    dispatch(unsetToken());
    setShowLogoutConfirmationModal(false);
    router.push('/');
  };

  return (
    <section className={`${'container'} ${styles.profileContainer}`}>
      <button className={styles.closeBtn} onClick={()=>router.push('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
          />
        </svg>
      </button>
      <div>
        <h2 className={styles.heading}>Особистий кабінет</h2>
        <nav>
          <ul className={styles.navigationList}>
            <li className={styles.navigationList__item}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
                <g fill="#003049" clipPath="url(#a)">
                  <path
                    fillRule="evenodd"
                    d="M10.3 1.9H3.7V0h-.9v1.9H1.4A1.4 1.4 0 0 0 0 3.3v7.4a1.4 1.4 0 0 0 1.4 1.4h11.2a1.4 1.4 0 0 0 1.4-1.4V3.3a1.4 1.4 0 0 0-1.4-1.4h-1.4V0h-1v1.9ZM2.8 5.6a1.9 1.9 0 1 1 3.7 0 1.9 1.9 0 0 1-3.7 0Zm-.6 4.3a2.7 2.7 0 0 1 5 0l.2.6a.5.5 0 0 1-.4.7H2.3a.5.5 0 0 1-.4-.7l.3-.6Zm6.2-4.3h2.8v-1H8.4v1Zm0 2.8h2.8v-1H8.4v1Z"
                    clipRule="evenodd"
                  />
                  <path d="M14 13v1H0v-1h14Z" />
                </g>
              </svg>
              <span className={styles.btn__text}>Контактні дані</span>
         
            </li>
            <li className={styles.navigationList__item}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" fill="none">
                <mask
                  id="a"
                  width="12"
                  height="11"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                  style={{ maskType: 'luminance' }}
                >
                  <path
                    fill="#fff"
                    d="M3.4.3A3.2 3.2 0 0 0 .2 3.5C.2 6.8 4 9.7 6 10.3c2-.6 5.8-3.5 5.8-6.8A3.2 3.2 0 0 0 6 1.7 3.2 3.2 0 0 0 3.4.3Z"
                  />
                </mask>
                <g mask="url(#a)">
                  <path fill="#003049" d="M-1-2h14v14H-1V-2Z" />
                </g>
              </svg>
              <span className={styles.btn__text}> Вподобане</span>
             
            </li>
            <li className={styles.navigationList__item}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="none">
                <path
                  fill="#003049"
                  d="M10 9.5a1.2 1.2 0 1 1 0 2.3 1.2 1.2 0 0 1 0-2.3ZM.5.2h1.9L3 1.3h8.7a.6.6 0 0 1 .5.6v.3L10 6c-.2.3-.6.6-1 .6H4.7l-.5 1a.1.1 0 0 0 .1.1h6.8V9H4a1.2 1.2 0 0 1-1-1.7l.7-1.4-2-4.5H.5V.2ZM4 9.5a1.2 1.2 0 1 1 0 2.3 1.2 1.2 0 0 1 0-2.3Zm5.2-4 1.7-3H3.6l1.4 3h4.3Z"
                />
              </svg>
              <span className={styles.btn__text}> Мої замовлення</span>
             
            </li>
            <li className={styles.navigationList__item}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
                <path
                  fill="#003049"
                  d="M2.3 12.2c-.3 0-.6 0-.8-.3-.2-.2-.3-.5-.3-.8V4.7c0-.4 0-.6.3-.9.2-.2.5-.3.8-.3h2.4V2.3c0-.3 0-.6.3-.8.2-.2.5-.3.8-.3h2.4c.3 0 .6 0 .8.3.2.2.3.5.3.8v1.2h2.4c.3 0 .6.1.8.3.2.3.3.5.3.9V11c0 .3 0 .6-.3.8-.2.2-.5.4-.8.3H2.3Zm3.5-8.7h2.4V2.3H5.8v1.2Zm5.9 5.2h-3V10H5.4V8.7h-3v2.4h9.4V8.7Zm-5.3 0h1.2V7.6H6.4v1.1Zm-4-1.1h2.9V6.4h3.5v1.2h2.9v-3H2.3v3Z"
                />
              </svg>
              <span className={styles.btn__text}> Мої Послуги</span>
             
            </li>
            <li className={styles.navigationList__item}>
              <button
                className={styles.logoutBtn}
                onClick={() => setShowLogoutConfirmationModal(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path d="m14 5-1.4 1.4L14.2 8H6v2h8.2l-1.6 1.6L14 13l4-4-4-4ZM2 2h7V0H2a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7v-2H2V2Z" />
                </svg>
                <span className={styles.btn__text}>Вийти</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {showLogoutConfirmationModal && (
        <Backdrop>
          <ConfirmationModal
            closeModal={() => setShowLogoutConfirmationModal(false)}
            handleBtnYes={logout}
            handleBtnNo={() => setShowLogoutConfirmationModal(false)}
            title="Бажаєте вийти з акаунта?"
          />
        </Backdrop>
      )}
    </section>
  );
};

export default Navigation;
