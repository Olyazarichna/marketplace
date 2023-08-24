'use client';
import styles from './LoginForm.module.scss';
import { useState } from 'react';
import login from '../../../services/login';
import { useRouter } from 'next/navigation';
import InputField from '../InputField/InputField';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailOrPassError, setEmailOrPassError] = useState(false);

  const onPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password.trim() === '' || email.trim === '') {
      setEmailOrPassError(true);
      return;
    }

    setIsLoading(true);
    const user = {
      email,
      password,
    };
    try {
      const response = await login(user);

      if (response?.accessToken) {
        router.push('/');
        reset();
      } else {
        setEmailError(true);
        setEmailOrPassError(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off" noValidate>
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
      {emailError && <p className={styles.error}>Пароль або електронна пошта не вірні</p>}
      <button type="submit" className={styles.form__btn} disabled={isLoading}>
        {isLoading ? 'Зачекайте...' : 'Увійти'}
      </button>
    </form>
  );
};

export default LoginForm;
