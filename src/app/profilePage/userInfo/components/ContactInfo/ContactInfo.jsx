'use client';
import styles from './ContactInfo.module.scss';
import BtnBack from '@/components/BtnBack/BtnBack';

const ContactInfo = ({ className }) => {
  const handleSubmit = () => {
    console.log('save');
  };
  return (
    // <section className={"container"}>
    <section className={className}>
      <BtnBack route={'/profilePage'} className={styles.btnBack} />
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
              //   name={name}
              //   id={id}
              //   value={value}
              //   onChange={onChange}
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
              //   name={name}
              //   id={id}
              //   value={value}
              //   onChange={onChange}
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
            type="text"
            //   name={name}
            //   id={id}
            //   value={value}
            //   onChange={onChange}
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
            //   name={name}
            //   id={id}
            //   value={value}
            //   onChange={onChange}
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
