'use client';
import styles from './TermsAndConditions.module.scss';
import AgreementRadioButton from '../../../../addLaisurePage/components/AgreementRadioButton/AgreementRadioButton';

const TermsAndConditions = () => {
  return (
    <section className={`${'container'} ${styles.termWrapper}`}>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur. Fringilla turpis nunc quisque lacus. Faucibus orci
        quis odio odio justo viverra risus. Potenti sed neque sapien tincidunt sit nam cursus a
        nullam. Tincidunt elit nam tellus ut dictum pharetra eget. Egestas adipiscing odio auctor
        viverra viverra cras.
        <br />
        Lorem ipsum dolor sit amet consectetur. Fringilla turpis nunc quisque lacus. Faucibus orci
        quis odio odio justo viverra risus. Potenti sed neque sapien tincidunt sit nam cursus a
        nullam. Tincidunt elit nam tellus ut dictum pharetra eget. Egestas adipiscing odio auctor
        viverra viverra cras.
      </p>
      <AgreementRadioButton />
      <button className={styles.btnReady}>Готово</button>
    </section>
  );
};

export default TermsAndConditions;
