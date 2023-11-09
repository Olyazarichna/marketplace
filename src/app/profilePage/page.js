import Navigation from './components/Navigation/Navigation';
import ContactInfo from './userInfo/components/ContactInfo/ContactInfo';
import BtnBack from '@/components/BtnBack/BtnBack';
import styles from './page.module.scss';

const ProfilePage = () => {
  return (
    <section className={styles.profilePageEWrapper}>
      <BtnBack route={'/'} className={styles.btn} />
      <Navigation />
      {/* <ContactInfo className={styles.contactInfo}/> */}
    </section>
  );
};

export default ProfilePage;
