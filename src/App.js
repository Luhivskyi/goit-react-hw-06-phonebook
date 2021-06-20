import React from 'react';
import ContactForm from './Components/ContactForm';
import ContactsList from './Components/ContactsList';
import Filter from './Components/Filter';

export default function App() {
  return (
    <>
      <h2> Form Contact</h2>
      <ContactForm />
      <h2> Contacts</h2>
      <ContactsList />

      <h3> Find contacts by name</h3>
      <Filter />
    </>
  );
}
