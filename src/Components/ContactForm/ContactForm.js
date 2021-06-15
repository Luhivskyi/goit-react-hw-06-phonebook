import { Component } from 'react';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

const INITIAL__STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    onCheckUnique: PropTypes.func.isRequired,
  };

  state = INITIAL__STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;
    const isValidatedForm = this.validateForm();
    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, number });

    this.resetForm();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !number) {
      alert('Some fild is empty');
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.item_form} onSubmit={this.handleFormSubmit}>
        <input
          className={s.item_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChangeForm}
          value={name}
        />

        <input
          className={s.item_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChangeForm}
          value={number}
        />

        <button className={s.btn_submit} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

// export default ContactForm;
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
