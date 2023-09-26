'use client';
import styles from './AddActivityForm.module.scss';
import BtnBack from '../../../../app/components/BtnBack/BtnBack';
import { useState } from 'react';

const AddActivityForm = () => {
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [aboutActivity, setAboutActivity] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const handleChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'aboutActivity':
        setAboutActivity(value);
        break;
      case 'price':
        setPrice(value);
        break;

      default:
        return;
    }
  };
  return (
    <>
      <h2 className={styles.title}>Додавання події</h2>
      <BtnBack />

      <form className={styles.form} autoComplete="off">
        <div className={styles.inputWrapper}>
          <h3 className={styles.heading}>Додайте інформацію про подію</h3>
          <input
            className={styles.input}
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            placeholder="Вкажіть детальну назву"
          />
          <div className={styles.locationWrapper}>
            <input
              className={styles.input}
              placeholder="Локація"
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={handleChange}
            />
            <input className={styles.input} placeholder="Дата" type="date" />
            <input className={styles.input} placeholder="Час" type="time" />
          </div>

          <input
            className={styles.input}
            placeholder="Контактний телефон"
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleChange}
          />
          <input
            className={styles.input}
            placeholder="Категорія /Творче дозвілля/Спорт/Хобі/Навчання/Сімейні розваги/Події"
          />
          <textarea
            className={styles.textarea}
            placeholder="Про подію"
            rows="5"
            cols="30"
            minLength="40"
            maxLength="9000"
            onChange={handleChange}
            value={aboutActivity}
          ></textarea>
          <div className={styles.textWrapper}>
            <p>Напишіть ще 40 символів</p>
            <p>0/9000</p>
          </div>
          <div className={styles.price}>
            <label htmlFor="price">
              Вартість
              <input
                type="text"
                name="price"
                id="price"
                value={price}
                className={styles.price__input}
                onChange={handleChange}
              />
              грн.
            </label>
          </div>

          <div className={styles.checkboxWrapper}>
            <input type="checkbox" className={styles.checkbox} />
            <label htmlFor="">Я ознайомлений з правилами і умовами угоди.</label>
            {/* <p>.</p> */}
          </div>
        </div>

        <div className={styles.photoContainer}>
          <h3 className={styles.heading}>Фото</h3>
          <fieldset className={styles.photoWrapper}>
            <label htmlFor="image" className={styles.photoAddLabel}>
              Додати фото
              <input
                className={styles.photoInput}
                id="image"
                name="image"
                type="file"
                accept="image/png, image/jpeg"
                // onChange={e => {
                //   onImageChange(e);
                // }}
              />
            </label>
            <label htmlFor="image" className={styles.photoAddLabel}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" fill="none">
                <path
                  fill="#003049"
                  d="M21.4 2.8H18L16.4.3a.7.7 0 0 0-.6-.3H8.2a.7.7 0 0 0-.6.3L6 2.8H2.6A2.6 2.6 0 0 0 0 5.4v13c0 .7.3 1.4.8 1.8.4.5 1.1.8 1.8.8h18.8a2.6 2.6 0 0 0 2.6-2.6v-13c0-.7-.3-1.4-.8-1.8-.4-.5-1.1-.8-1.8-.8Zm1.2 15.6a1.2 1.2 0 0 1-1.2 1.2H2.6a1.2 1.2 0 0 1-1.2-1.2v-13c0-.3.1-.6.4-.9.2-.2.5-.3.8-.3h3.8a.7.7 0 0 0 .5-.3l1.7-2.5h6.8L17 3.9a.7.7 0 0 0 .5.3h3.8c.3 0 .6.1.8.3.3.3.4.6.4.9v13ZM12 6.5a5 5 0 0 0-4.6 3A4.9 4.9 0 0 0 8.5 15a5 5 0 0 0 8.4-3.5c0-1.3-.5-2.5-1.4-3.4A5 5 0 0 0 12 6.5Zm0 8.4a3.6 3.6 0 0 1-3.3-2.1A3.5 3.5 0 0 1 9.5 9a3.5 3.5 0 0 1 6 2.4A3.5 3.5 0 0 1 12 15Z"
                />
              </svg>

              <input
                className={styles.photoInput}
                id="image"
                name="image"
                type="file"
                accept="image/png, image/jpeg"
                // onChange={e => {
                //   onImageChange(e);
                // }}
              />
            </label>
            <label htmlFor="image" className={styles.photoAddLabel}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" fill="none">
                <path
                  fill="#003049"
                  d="M21.4 2.8H18L16.4.3a.7.7 0 0 0-.6-.3H8.2a.7.7 0 0 0-.6.3L6 2.8H2.6A2.6 2.6 0 0 0 0 5.4v13c0 .7.3 1.4.8 1.8.4.5 1.1.8 1.8.8h18.8a2.6 2.6 0 0 0 2.6-2.6v-13c0-.7-.3-1.4-.8-1.8-.4-.5-1.1-.8-1.8-.8Zm1.2 15.6a1.2 1.2 0 0 1-1.2 1.2H2.6a1.2 1.2 0 0 1-1.2-1.2v-13c0-.3.1-.6.4-.9.2-.2.5-.3.8-.3h3.8a.7.7 0 0 0 .5-.3l1.7-2.5h6.8L17 3.9a.7.7 0 0 0 .5.3h3.8c.3 0 .6.1.8.3.3.3.4.6.4.9v13ZM12 6.5a5 5 0 0 0-4.6 3A4.9 4.9 0 0 0 8.5 15a5 5 0 0 0 8.4-3.5c0-1.3-.5-2.5-1.4-3.4A5 5 0 0 0 12 6.5Zm0 8.4a3.6 3.6 0 0 1-3.3-2.1A3.5 3.5 0 0 1 9.5 9a3.5 3.5 0 0 1 6 2.4A3.5 3.5 0 0 1 12 15Z"
                />
              </svg>

              <input
                className={styles.photoInput}
                id="image"
                name="image"
                type="file"
                accept="image/png, image/jpeg"
                // onChange={e => {
                //   onImageChange(e);
                // }}
              />
            </label>
            <label htmlFor="image" className={styles.photoAddLabel}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" fill="none">
                <path
                  fill="#003049"
                  d="M21.4 2.8H18L16.4.3a.7.7 0 0 0-.6-.3H8.2a.7.7 0 0 0-.6.3L6 2.8H2.6A2.6 2.6 0 0 0 0 5.4v13c0 .7.3 1.4.8 1.8.4.5 1.1.8 1.8.8h18.8a2.6 2.6 0 0 0 2.6-2.6v-13c0-.7-.3-1.4-.8-1.8-.4-.5-1.1-.8-1.8-.8Zm1.2 15.6a1.2 1.2 0 0 1-1.2 1.2H2.6a1.2 1.2 0 0 1-1.2-1.2v-13c0-.3.1-.6.4-.9.2-.2.5-.3.8-.3h3.8a.7.7 0 0 0 .5-.3l1.7-2.5h6.8L17 3.9a.7.7 0 0 0 .5.3h3.8c.3 0 .6.1.8.3.3.3.4.6.4.9v13ZM12 6.5a5 5 0 0 0-4.6 3A4.9 4.9 0 0 0 8.5 15a5 5 0 0 0 8.4-3.5c0-1.3-.5-2.5-1.4-3.4A5 5 0 0 0 12 6.5Zm0 8.4a3.6 3.6 0 0 1-3.3-2.1A3.5 3.5 0 0 1 9.5 9a3.5 3.5 0 0 1 6 2.4A3.5 3.5 0 0 1 12 15Z"
                />
              </svg>

              <input
                className={styles.photoInput}
                id="image"
                name="image"
                type="file"
                accept="image/png, image/jpeg"
                // onChange={e => {
                //   onImageChange(e);
                // }}
              />
            </label>
          </fieldset>
          {/* ) : ( */}
          {/* <div className={styles.addedImg}>
                  {/* <img alt="pet" src={image} /> */}
          {/* </div> */}
          {/* )} */}

          <p className={styles.formText}>
            Перше фото буде на обкладинці оголошення. Перетягніть, щоб змінити порядок фото
          </p>

          <div className={styles.chooseActivity}>
            <label htmlFor="activityChoice1" className={styles.chooseActivity__label}>
              <input
                className={styles.chooseActivity__input}
                type="radio"
                id="activityChoice1"
                name="activity"
                value="forAll"
                checked
              />
              Для всіх
            </label>

            <label htmlFor="activityChoice2" className={styles.chooseActivity__label}>
              <input
                className={styles.chooseActivity__input}
                type="radio"
                id="activityChoice2"
                name="activity"
                value="forAdult"
              />
              Для дорослих
            </label>

            <label htmlFor="activityChoice3" className={styles.chooseActivity__label}>
              <input
                className={styles.chooseActivity__input}
                type="radio"
                id="activityChoice3"
                name="activity"
                value="forChild"
              />
              Для дітей
            </label>
          </div>
          <div className={styles.btnWrapper}>
            <button className={styles.formBtn}>Готово</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddActivityForm;
