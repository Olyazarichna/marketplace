
import Link from "next/link";
import styles from '../page.module.scss';
const UserProfile = () => {
    return (
        <section>
            <h2>Profile page</h2>
            <Link href='/' className={styles.link}>Home Page</Link>
        </section>
    )
}

export default UserProfile;