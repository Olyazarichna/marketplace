'use client';

import Link from 'next/link';
import '../scss/main.scss';
import styles from './page.module.scss';
import AboutUs from './components/AboutUs/AboutUs';
import Cart from './components/Cart/Cart';

export default function Home() {
    return (
        <main>
            <AboutUs />
            <Cart />
            <Link href="/userProfile" className={styles.link}>
                Profile
            </Link>
        </main>
    );
}
