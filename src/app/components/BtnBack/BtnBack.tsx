import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const BtnBack: React.FC = () => {
  return (
    <Link href="/" passHref>
      <li className={styles.btn}>Назад</li>
    </Link>
  );
};

export default BtnBack;