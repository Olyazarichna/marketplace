import Link from 'next/link'
import '../scss/main.scss';
import styles from './page.module.scss'
import AboutUs from './components/AboutUs/AboutUs';
export default function Home() {
  return (
    <main>
      < AboutUs />
      <Link href="/userProfile" className={styles.link}>Profile</Link>
    </main>
  )
}
