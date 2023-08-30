'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import InputField from '../../../components/InputField/InputField';
import styles from './styles.module.scss';
import login from '../../../services/login';

const LoginForm: React.FC = () => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim() === '' || email.trim() === '') {
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
      {/* Rest of the JSX code */}
    </form>
  );
};

export default LoginForm;

