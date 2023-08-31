'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import InputField from '../../../components/InputField/InputField';
import styles from './styles.module.scss';
import register from '../../../services/auth';

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailOrPassError, setEmailOrPassError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim() === '' || email.trim() === '') {
      setEmailOrPassError(true);
      setEmailError(false);
      return;
    }
    setIsLoading(true);
    const user = {
      firstName: firstName || '',
      lastName: lastName || '',
      email,
      password,
    };
    const emailRegex = /^[A-Za-z0-9]+[A-Za-z0-9._]*@[A-Za-z]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      setIsLoading(false);
      setEmailOrPassError(false);
      return;
    }
    try {
      await register(user);
      router.push('/');
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setEmailOrPassError(false);
    }
  };

  const reset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off" noValidate>
      {/* Rest of the JSX code */}
    </form>
  );
};

export default RegisterForm;

