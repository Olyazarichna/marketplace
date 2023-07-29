import styles from "./AboutUs.module.scss";
import ImageSlider from "../ImageSlider/ImageSlider";

const AboutUs = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h2 className={styles.heading}>Знайди своє дозвілля!</h2>
        <p className={styles.text}>
          Наш ресурс допомагає українцям знайти дозвілля в своєму місті, а також
          онлайн. Допомагаємо бізнесу донести свою пропозицію цільовій
          аудиторії.
        </p>
        <ul className={styles.textList}>
          <li className={styles.textList__item}>
            <h3 className={styles.textList__heading}>Події</h3>
            <p className={styles.textList__text}>
              Відкрийте для себе захопливі події свого міста на будь-який смак!
            </p>
          </li>
          <li className={styles.textList__item}>
            <h3 className={styles.textList__heading}>Дозвілля для усіх</h3>
            <p className={styles.textList__text}>
              Події, гуртки та розваги для дорослих та малих!
            </p>
          </li>
        </ul>
      </div>
      <ImageSlider />
    </section>
  );
};

export default AboutUs;
