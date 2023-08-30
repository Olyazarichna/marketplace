import React, { ChangeEvent } from 'react';
import styles from './InputField.module.scss';

interface InputFieldProps {
  htmlFor: string;
  label: string;
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  htmlFor,
  label,
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className={styles.form__wrapper}>
      <label htmlFor={htmlFor} className={styles.form__label}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={styles.form__input}
        autoComplete="off"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
