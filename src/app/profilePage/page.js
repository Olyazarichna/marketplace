import Navigation from "./components/Navigation/Navigation";
import ContactInfo from "./userInfo/components/ContactInfo/ContactInfo";
import styles from './page.module.scss';
const ProfilePage = () => {
  return(
    <section className={styles.profilePageEWrapper}> 
    <Navigation/>
    <ContactInfo className={styles.contactInfo}/>
    </section>
    )
};

export default ProfilePage;