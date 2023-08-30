import React from 'react';
import styles from './styles.module.scss';

interface City {
  id: number;
  city: string;
}

interface ChooseCityModalProps {
  closeCitiesModal: () => void;
  chooseCity: () => void;
}

const ChooseCityModal: React.FC<ChooseCityModalProps> = ({ closeCitiesModal, chooseCity }) => {
  const cities: City[] = [
    {
      id: 111,
      city: "Київ",
    },
    {
      id: 121,
      city: "Львів",
    },
    {
      id: 113,
      city: "Тернопіль",
    },
    {
      id: 211,
      city: "Одеса",
    },
    {
      id: 11551,
      city: "Дніпро",
    },
    {
      id: 1144,
      city: "Харків",
    },
  ];

  return (
    <div className={styles.modal}>
      <button className={styles.modal__btn} type='submit' onClick={closeCitiesModal} title="Close Modal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
          />
        </svg>
      </button>
      <h3 className={styles.modal__text}>Виберіть своє місто</h3>
      <ul className={styles.listBtn}>
        {cities.map(({ id, city }) => (
          <li key={id}>
            <button className={styles.cityBtn} onClick={chooseCity}>
              {city}
            </button>
          </li>
        ))}
      </ul>
      <label className={styles.label} htmlFor="">
        Або знайдіть своє місто тут
      </label>
      <input
        className={styles.input}
        type="text"
        placeholder="Черкаси, Черкаська область"
      />
      <button className={styles.button} onClick={closeCitiesModal}>
        Готово
      </button>
    </div>
  );
};

export default ChooseCityModal;

