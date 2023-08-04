import styles from "./BtnBack.module.scss";
import Link from "next/link";

const BtnBack = () => {
  return (
    <Link href="/" className={styles.btn}>
      Назад
    </Link>
  );
};

export default BtnBack;
