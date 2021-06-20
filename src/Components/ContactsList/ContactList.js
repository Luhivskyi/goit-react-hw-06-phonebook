import React from 'react';
import s from './ContactsList.module.css';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';

const ContactsList = ({ contacts }) => {
  return (
    <ul className={s.contact_list}>
      {contacts.map(contact => (
        <ContactListItem {...contact} key={contact.id} />
      ))}
    </ul>
  );
};

const filterContacts = (items, filter) => {
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});

export default connect(mapStateToProps)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
