"use client";
import styles from "./ChooseCityModal.module.scss";

const ChooseCityModal = ({closeCitiesModal,chooseCity}) => {
  const cities = [
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
      <button className={styles.modal__btn} onClick={closeCitiesModal}>
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
