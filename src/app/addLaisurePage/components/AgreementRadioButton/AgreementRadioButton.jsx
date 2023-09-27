import styles from './AgreementRadioButton.module.scss';
import { useState } from 'react';

const AgreementRadioButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.buttonWrapper}>
      <button
        type="button"
        className={`${styles.radio} ${isChecked ? styles.checked : ''}`}
        onClick={handleClick}
      ></button>
      <span className={styles.text}> Я ознайомлений з правилами і умовами угоди.</span>
    </div>
  );
};

export default AgreementRadioButton;
