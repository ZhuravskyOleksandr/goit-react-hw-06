// import { useState, useEffect } from 'react';
// import phoneContacts from '/src/contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';

// const LS_KEY = 'saved-contacts';

export default function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <strong>The phonebook is empty. Add a contact using the form.</strong>
      )}
    </div>
  );
}
