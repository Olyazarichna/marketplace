'use client';
import styles from './ChooseCityModal.module.scss';
import { useState, useEffect } from 'react';
import { citiesBtn } from './citiesBtn';
import getAllCity from '../../services/getAllCity';

const ChooseCityModal = ({ closeCitiesModal, chooseCity }) => {
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState([]);
  const [searchCity, setSearchCity] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const getAllCities = async () => {
      try {
        const data = await getAllCity();
        const filter = data.filter(city => city.uaCityName !== null);
        setCities(filter);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCities();
  }, []);

  useEffect(() => {
    const filtered = cities.filter(({ uaCityName }) =>
      uaCityName.toLowerCase().startsWith(searchCity.toLowerCase())
    );
   setFilter(filtered);
  }, [cities, searchCity]);

  const handleChange = event => {
    setSearchCity(event.target.value);
  };

  const selectCity = (cityName) => {
    setSelectedCity(cityName);
    setSearchCity(cityName);
  };

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
        {citiesBtn.map(({ id, city }) => (
          <li key={id}>
            <button className={styles.cityBtn} onClick={() => selectCity(city)}>
              {city}
            </button>
          </li>
        ))}
      </ul>
      <label className={styles.label} htmlFor="searchCity">
        Або знайдіть своє місто тут
      </label>
      <input
        className={styles.input}
        type="text"
        id="searchCity"
        placeholder="Черкаси"
        value={searchCity}
        onChange={handleChange}
      />
      {searchCity && (
        <div className={styles.filteredCity}>
          <ul className={styles.filteredCity__list}>
            {filter?.map(({ geonameId, uaCityName }) => {
              return (
                <li key={geonameId} className={styles.filteredCity__item}>
                  <button
                    className={styles.filteredCity__btn}
                    onClick={() => selectCity(uaCityName)}
                  >
                    {uaCityName}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button className={styles.button} onClick={() => chooseCity(selectedCity)}>
        Готово
      </button>
    </div>
  );
};

export default ChooseCityModal;
