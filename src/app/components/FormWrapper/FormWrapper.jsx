'use client';
import { useState } from 'react';
import styles from './FormWrapper.module.scss';
import BtnBack from '../BtnBack/BtnBack';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import Link from 'next/link';
const FormWrapper = () => {
  const [activeButton, setActiveButton] = useState('login');

  const handleSetActive = () => {
    setActiveButton('register');
  };

  return (
    <div className={'container'}>
      <BtnBack />
      <div className={styles.formContainer}>
        <div className={styles.btnWrapper}>
          <button
            className={`${styles.headingBtn} ${activeButton === 'login' ? styles.active : ''}`}
            onClick={() => setActiveButton('login')}
          >
            Увійти
          </button>
          <button
            className={`${styles.spanBtn} ${activeButton === 'register' ? styles.active : ''}`}
            onClick={handleSetActive}
          >
            Зареєструватись
          </button>
        </div>
        {activeButton === 'login' && <LoginForm />}
        {activeButton === 'register' && <RegisterForm />}
        <span className={styles.info}>
          Під час входу, ви погоджуєтесь з
          <Link href="" className={styles.info__accent}>
            умовами користування
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FormWrapper;
