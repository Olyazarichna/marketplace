import styles from "./AboutUs.module.scss";
import Image from "next/image";
import img from "../../../../public/images/things.jpg";
const AboutUs = () => {
  return (
    <section className={styles.wrapper}>
      <Image src={img} alt="things" width={180} height={215} />
      <div>
        <h2>Про нас</h2>
        <p>
          Маркетплейс допомагає українцям знайти дозвілля в своєму місті, а
          також онлайн. Допомагаємо бізнесу донести свою пропозицію цільовій
          аудиторії.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
