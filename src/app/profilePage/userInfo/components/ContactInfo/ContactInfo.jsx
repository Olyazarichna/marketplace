'use client';
import styles from './ContactInfo.module.scss';
import BtnBack from '@/components/BtnBack/BtnBack';
import { useState } from 'react';

const ContactInfo = ({ className }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('save');
  };

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(e);
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        return;
    }
  };
  return (
    <section className={className}>
      <h3 className={styles.heading}>Контактні дані</h3>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.nameWrapper}>
          <div className={styles.form__wrapper}>
            <label
              // htmlFor={htmlFor}
              className={styles.form__label}
            >
              Прізвище
            </label>
            <input
              type="text"
              name={lastName}
              id={lastName}
              value={lastName}
              onChange={handleChange}
              className={styles.form__input}
              autoComplete="off"
              placeholder="Прізвище"
            />
          </div>
          <div className={styles.form__wrapper}>
            <label
              // htmlFor={htmlFor}
              className={styles.form__label}
            >
              Імя
            </label>
            <input
              type="text"
              name={firstName}
              id={firstName}
              value={firstName}
              onChange={handleChange}
              className={styles.form__input}
              autoComplete="off"
              placeholder="Ім'я"
            />
          </div>
        </div>

        <div className={styles.form__wrapper}>
          <label
            // htmlFor={htmlFor}
            className={styles.form__label}
          >
            Електронна пошта
          </label>
          <input
            type="email"
            name={email}
            id={email}
            value={email}
            onChange={handleChange}
            className={`${styles.form__input} ${styles.email}`}
            autoComplete="off"
            placeholder="Електронна пошта"
          />
        </div>

        <div className={styles.form__wrapper}>
          <label
            // htmlFor={htmlFor}
            className={styles.form__label}
          >
            Контактний телефон
          </label>
          <input
            type="text"
            name={phone}
            id={phone}
            value={phone}
            onChange={handleChange}
            className={`${styles.form__input} ${styles.phone}`}
            autoComplete="off"
            placeholder="Контактний телефон"
          />
        </div>
        <button type="submit" className={styles.btn}>
          Збережено
        </button>
      </form>
    </section>
  );
};

export default ContactInfo;
