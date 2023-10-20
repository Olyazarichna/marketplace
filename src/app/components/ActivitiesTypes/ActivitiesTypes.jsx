'use client';
import styles from './ActivitiesTypes.module.scss';
import { useState } from 'react';

const ActivitiesTypes = () => {
  const [showCategory, setShowCategory] = useState(false);

  const chooseCategory = () => {
    setShowCategory(!showCategory);
  };
  return (
    <div className={styles.categoryWrapper}>
      <button className={showCategory ? styles.btnOpen : styles.btn} onClick={chooseCategory}>
        Види дозвілля
      </button>

      {showCategory && (
        <ul className={styles.activityList}>
          <li className={styles.activityList__item}>
            <button className={styles.activityList__btn}>Для дорослих</button>
          </li>
          <li className={styles.activityList__item}>
            <button className={styles.activityList__btn}>Для дітей</button>
          </li>
          <li className={styles.activityList__item}>
            <button className={styles.activityList__btn}>Для всіх</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ActivitiesTypes;
