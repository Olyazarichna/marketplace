import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.heading}>Logo</h3>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_listItem}>
            <a href="">Київ</a>
          </li>
          <li className={styles.nav_listItem}>
            <a href="">Події у Києві</a>
          </li>
        </ul>
      </nav>
      <input type="text" placeholder="Пошук" />
      <button>Пропоную дозвілля</button>
      <button>Вхід</button>
    </header>
  );
};

export default Header;
