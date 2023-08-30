import React from 'react'; // Make sure to import React

import styles from "./styles.module.scss";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return <button className={styles.btn} type='submit' onClick={onClick}>{title}</button>;
};

export default Button;
