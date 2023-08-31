import React from 'react';
import styles from './styles.module.scss';
import BtnBack from '../../../components/BtnBack/BtnBack';

const AddActivityForm: React.FC = () => {
  return (
    <>
      <h2 className={styles.title}>Додавання події</h2>
      <BtnBack />
      <h3 className={styles.heading}>Додайте інформацію про подію</h3>
      <form>
        <input placeholder="Вкажіть детальну назву" />
        <input placeholder="Локація" />
        <input placeholder="Дата" />
        <input placeholder="Час" />
        <input placeholder="Контактний телефон" />
        <input placeholder="Категорія /Творче дозвілля/Спорт/Хобі/Навчання/Сімейні розваги/Події" />
        {/* <textarea>Про подію</textarea> */}
      </form>
    </>
  );
};

export default AddActivityForm;