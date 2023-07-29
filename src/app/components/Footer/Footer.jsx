import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer=()=>{
    return(
        <footer className={`${'container'} ${styles.footer}`}>
            <Link href="/" className={styles.logo}>Навколо дозвілля</Link>
            <ul className={styles.list}>
                <li className={styles.list__items}><a href='#'>Про нас</a></li>
                <li className={styles.list__items}><a href='#'>Дозвілля</a></li>
                <li className={styles.list__items}><a href='#'>Контакти</a></li>
                <li className={styles.list__items}><a href='#'>Організаторам</a></li>
            </ul>
            <ul className={styles.iconList}>
                <li className={styles.iconList__item}><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none"><path fill="#000" d="M9 2.7h9c3.5 0 6.3 2.8 6.3 6.2V18a6.3 6.3 0 0 1-6.3 6.3H9A6.3 6.3 0 0 1 2.7 18V9A6.3 6.3 0 0 1 9 2.6Zm-.3 2.1a3.9 3.9 0 0 0-3.9 4v9.5c0 2.1 1.8 3.9 4 3.9h9.5a3.9 3.9 0 0 0 3.9-4V8.8c0-2.1-1.8-3.9-4-3.9H8.8Zm10.5 1.7a1.4 1.4 0 1 1 0 2.7 1.4 1.4 0 0 1 0-2.7ZM13.5 8a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8Zm0 2.1a3.3 3.3 0 1 0 0 6.5 3.3 3.3 0 0 0 0-6.5Z"/></svg></li>
                <li className={styles.iconList__item}><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none"><g clipPath="url(#a)"><path fill="#000" fillRule="evenodd" d="M4.8 13.5a8.7 8.7 0 1 1 9.8 8.6v-6.4h2.2a1 1 0 1 0 0-2.2h-2.2v-2.2a1 1 0 0 1 1-1h.6a1 1 0 1 0 0-2.2h-.5a3.2 3.2 0 0 0-3.3 3.2v2.2h-2.2a1 1 0 0 0 0 2.2h2.2V22a8.7 8.7 0 0 1-7.6-8.6Zm8.7 10.8a10.8 10.8 0 1 0 0-21.6 10.8 10.8 0 0 0 0 21.6Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M.5.5h26v26H.5z"/></clipPath></defs></svg></li>
                <li className={styles.iconList__item}><svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" fill="none"><path fill="#000" d="M2.8 18.5c-.7 0-1.2-.2-1.6-.7-.5-.4-.7-1-.7-1.6V2.8c0-.7.2-1.2.7-1.6.4-.5 1-.7 1.6-.7h18c.6 0 1.1.2 1.5.7.5.4.7 1 .7 1.6v13.4c0 .7-.2 1.2-.7 1.6-.4.5-1 .7-1.6.7h-18Zm9-7.9L2.8 5v11.3h18V5l-9 5.6Zm0-2.2 9-5.7h-18l9 5.7ZM2.8 5V2.7v13.6V5Z"/></svg></li>
            </ul>
        </footer>
    )
}

export default Footer;