import styles from './SearchForm.module.scss';
import { useState } from 'react';

const SearchForm = ({ showSearchField, onSubmit }) => {
  const [searchField, setSearchField] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (searchField.trim() === '') {
      alert('введіть назву події');
      return;
    }
    onSubmit(searchField);
    alert('Пошук');
    setSearchField('');
  };
  return (
    <form
      className={showSearchField ? styles.formWrapper : styles.form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Пошук"
          className={styles.input}
          value={searchField}
          onChange={e => setSearchField(e.target.value.toLowerCase())}
        />
        <button className={styles.searchBtn} type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path d="m18.2 19.8-6.8-6.9a6.5 6.5 0 0 1-4.1 1.4c-2 0-3.6-.6-5-2s-2-3-2-5 .6-3.6 2-5 3-2 5-2 3.6.6 5 2 2 3 2 5a6.6 6.6 0 0 1-1.4 4.1l6.8 6.8-1.5 1.6Zm-11-7.6c1.4 0 2.6-.5 3.5-1.5 1-.9 1.5-2 1.5-3.4s-.5-2.5-1.5-3.5c-.9-1-2-1.4-3.4-1.4S4.8 3 3.8 3.8c-1 1-1.4 2.1-1.4 3.5 0 1.3.5 2.5 1.4 3.4 1 1 2.1 1.5 3.5 1.5Z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
