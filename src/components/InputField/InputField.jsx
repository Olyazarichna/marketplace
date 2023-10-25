import styles from './InputField.module.scss';

const InputField =({htmlFor, label, type, name, id, value, onChange, placeholder})=>{
    return(
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
    )
}
export default InputField;