import React from 'react';
import s from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts-actions';
import { connect } from 'react-redux';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={s.item_contact}>
      {name}: {number}{' '}
      <button className={s.item_button} onClick={() => onRemove(id)}>
        delete
      </button>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
