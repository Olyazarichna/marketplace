'use client';
import styles from './RegisterForm.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '../../../../components/InputField/InputField';
import { useDispatch } from 'react-redux';
import { setToken } from '@/redux/authSlice';
import { useRegisterMutation } from '@/redux/usersSlice';

const RegisterForm = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailOrPassError, setEmailOrPassError] = useState(false);
  const dispatch = useDispatch();
  const [register, status] = useRegisterMutation();

  console.log('status', status);

  const onPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'repeatPassword':
        setRepeatPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!password.trim() || !email.trim()) {
      setEmailOrPassError(true);
      setPasswordError(false);
      return;
    }

    const emailRegex = /^[A-Za-z0-9]+[A-Za-z0-9._]*@[A-Za-z]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailOrPassError(false);
      setEmailError(true);
      return;
    }
    if (password !== repeatPassword) {
      setEmailOrPassError(false);
      setEmailError(false);
      setPasswordError(true);
      return;
    }
    try {
      const {
        data: { accessToken },
      } = await register({ firstName: firstName || '', lastName: lastName || '', email, password });
      dispatch(setToken(accessToken));
      if (accessToken) {
        router.push('/');
        reset();
      } else {
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEmailOrPassError(false);
    }
  };
  const reset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off" noValidate>
      <InputField
        htmlFor="firstName"
        label={`Ім'я`}
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={handleChange}
        placeholder={`Ім'я`}
      />
      <InputField
        htmlFor="lastName"
        label="Прізвище"
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={handleChange}
        placeholder="Прізвище"
      />
      <InputField
        htmlFor="email"
        label={`Eлектронна пошта`}
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleChange}
        placeholder="email@gmail.com"
      />
      {emailOrPassError && (
        <p className={styles.error}>Поля електронної пошти та пароля не можуть бути порожніми</p>
      )}
      {emailError && <p className={styles.error}>Некоректна електронна пошта</p>}
      <div className={styles.passwordField}>
        <InputField
          htmlFor="password"
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          placeholder="aaaAA_1aaaa"
        />
        {emailOrPassError && (
          <p className={styles.error}>Поля електронної пошти та пароля не можуть бути порожніми</p>
        )}
        <button className={styles.form__btnIcon} onClick={onPasswordClick} type="button">
          <svg
            className={styles.form__icon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 488.85 488.85"
          >
            <path d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z" />
          </svg>
        </button>
      </div>
      <div className={styles.passwordField}>
        <InputField
          htmlFor="repeatPassword"
          label="Повторіть пароль"
          type={showPassword ? 'text' : 'password'}
          name="repeatPassword"
          id="repeatPassword"
          value={repeatPassword}
          onChange={handleChange}
          placeholder="aaaAA_1aaaa"
        />
        {passwordError && <p className={styles.error}>Паролі не співпадають</p>}
        <button className={styles.form__btnIcon} onClick={onPasswordClick} type="button">
          <svg
            className={styles.form__icon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 488.85 488.85"
          >
            <path d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z" />
          </svg>
        </button>
      </div>
      <button
        type="submit"
        className={status?.isLoading ? styles.form__btnDisabled : styles.form__btn}
        disabled={status?.isLoading}
      >
        {status?.isLoading ? 'Зачекайте...' : 'Зареєструватись'}
      </button>
    </form>
  );
};

export default RegisterForm;
