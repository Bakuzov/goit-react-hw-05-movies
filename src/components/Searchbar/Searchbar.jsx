import PropTypes from 'prop-types';

import s from './Serchbar.module.css';
import { useState } from 'react';

export const Serchbar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleUpdateInput = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSubmit(input);
      handleReset();
    }
  };
  const handleReset = () => {
    setInput('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={input}
          onChange={handleUpdateInput}
        />
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>
      </form>
    </>
  );
};

Serchbar.propTypes = {
  onSubmit: PropTypes.func,
};
