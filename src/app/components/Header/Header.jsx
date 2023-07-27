import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          fill="none"
        >
          <path stroke="#000" stroke-width="2" d="M0 1h20M0 8.3h20M0 15.5h20" />
        </svg>
      </button>
      <h3 className={styles.heading}>Logo</h3>

      <ul className={styles.list}>
        <li className={styles.list__dropdown}>
          <button className={styles.list__btn}>Київ</button>
          <ul class={styles.dropdown}>
            <li class={styles.dropdown__content} href=""><button>Київ</button></li>
            <li class={styles.dropdown__content} href=""><button>Львів</button></li>
            <li class={styles.dropdown__content} href=""><button>Харків</button></li>
          </ul>
        </li>

        <li className={styles.list__dropdown}>
          <button className={styles.list__btn}>Види дозвілля</button>
          <ul class={styles.dropdown}>
            <li class={styles.dropdown__content} href="#"><a href="#">Курси</a></li>
            <li class={styles.dropdown__content} href="#"><a href="#">Активний відпочинок</a></li>
            <li class={styles.dropdown__content} href="#"><a href="#">Події</a></li>
          </ul>
        </li>
      </ul>

      <input type="text" placeholder="Пошук" />
      <button>Пропоную дозвілля</button>
      <button>Вхід</button>
    </header>
  );
};

export default Header;
