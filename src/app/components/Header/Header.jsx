import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
        <h3 className={styles.heading}>Header</h3>
      <nav className={styles.nav}>
        <ul  className={styles.nav_list}>
          <li  className={styles.nav_listItem}>
            <a href="">example nav 1</a>
          </li>
          <li className={styles.nav_listItem}>
            <a href="">example nav 2</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
