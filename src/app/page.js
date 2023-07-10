import Link from 'next/link'
import '../scss/main.scss';
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <h2>Home Page</h2>
      <Link href="/userProfile" className={styles.link}>Profile</Link>
    </main>
  )
}
