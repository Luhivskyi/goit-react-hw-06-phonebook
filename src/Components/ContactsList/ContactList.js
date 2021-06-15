import React from 'react';
import s from './ContactsList.module.css';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

const ContactsList = ({ contacts, onRemove }) => {
  return (
    <ul className={s.contact_list}>
      {contacts.map(contact => (
        <ContactListItem {...contact} onRemove={onRemove} key={contact.id} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

// export default ContactsList;

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
const mapStateToProps = ({ state: { contacts, filter } }) => ({
  contacts: filterContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(contactsActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
