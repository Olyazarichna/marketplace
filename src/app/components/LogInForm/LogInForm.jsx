"use client";
import styles from "./LogInForm.module.scss";
import { useState } from "react";
import Link from "next/link";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = () => {
    if (password.trim() === "" || email.trim === "") {
      alert("Email and password are required fields");
      return;
    }
    console.log("send");
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        Увійти/<span className={styles.span}>Зареєструватись</span>
      </h3>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.form__wrapper}>
          <label htmlFor="email" className={styles.form__label}>
            Eлектронна пошта
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            className={styles.form__input}
            autoComplete="off"
            placeholder="namemail@gmail.com"
          />
        </div>
        <div className={styles.form__wrapper}>
          <label htmlFor="password" className={styles.form__label}>
            Пароль
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className={styles.form__input}
            value={password}
            onChange={handleChange}
          />
          <button
            className={styles.form__btnIcon}
            onClick={onPasswordClick}
            type="button"
          >
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
        <button type="submit" className={styles.form__btn}>
          Увійти
        </button>
      </form>
      <span className={styles.info}>
        Під час входу, ви погоджуєтесь з{" "}
        <Link href="" className={styles.info__accent}>
          умовами користування
        </Link>
      </span>
    </div>
  );
};

export default LogInForm;
