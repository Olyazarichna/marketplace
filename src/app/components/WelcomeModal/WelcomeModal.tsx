import React from "react"; // Make sure to import React
import styles from "./styles.module.scss";
// import getCity from "../../services/getCity";

interface WelcomeModalProps {
  closeModal: () => void;
  handleBtnYes: () => void;
  handleBtnNo: () => void;
  city: string | null; // Keep the type as string | null
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ closeModal, handleBtnYes, handleBtnNo, city }) => {
  return (
    <div className={styles.modal}>
      <button className={styles.modal__btn} type="submit" title="title" onClick={closeModal}>
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
      <h3 className={styles.modal__text}>Ваше місто {city ? city : "Київ"} ?</h3>
      <div>
        <button className={styles.btnYes} type="submit" onClick={handleBtnYes}>
          Так
        </button>
        <button className={styles.btnNo} type="submit" onClick={handleBtnNo}>
          Ні
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;

