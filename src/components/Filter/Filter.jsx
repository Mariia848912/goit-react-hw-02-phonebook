import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <label className={css.label} htmlFor={filterInputId}>
      <span className={css.text}>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        value={value}
        id={filterInputId}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
