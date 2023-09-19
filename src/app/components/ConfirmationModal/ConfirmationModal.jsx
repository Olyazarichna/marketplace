'use client';
import styles from "./ConfirmationModal.module.scss";

const ConfirmationModal = ({ closeModal, handleBtnYes, handleBtnNo,title }) => {
  return (
    <div className={styles.modal}>
      <button className={styles.modal__btn} onClick={closeModal}>
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
      <h3 className={styles.modal__text}>{title}</h3>
      <div>
        <button className={styles.btnYes} onClick={handleBtnYes}>
          Так
        </button>
        <button className={styles.btnNo} onClick={handleBtnNo}>
          Ні
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
