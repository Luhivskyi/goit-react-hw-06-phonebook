/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './Filter.module.css';

import actions from '../../redux/contacts-actions';

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

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: filterValue => dispatch(actions.changeFilter(filterValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
