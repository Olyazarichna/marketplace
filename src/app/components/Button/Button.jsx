import styles from "./Button.module.scss";

const Button = ({ title }) => {
  return <button className={styles.btn}>{title}</button>;
};

export default Button;
