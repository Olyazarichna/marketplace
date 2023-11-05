import styles from "./BtnBack.module.scss";
import Link from "next/link";

const BtnBack = ({route,className}) => {
  return (
    <Link href={route} className={`${styles.btn} ${className ? className : ''}`}>
      Назад
    </Link>
  );
};

export default BtnBack;
