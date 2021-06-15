/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={s.filter_envelope}>
      <input
        className={s.item_element}
        type="text"
        name="filter"
        value={filter}
        onChange={event => onChange(event.target.value)}
        placeholder="Enter name for Search"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
