import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styles'; 
import Notify from 'notifyjs';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Misjko Lutij', number: '555-15-15' },
    { id: 'id-2', name: 'Antonio Linuvui', number: '444-14-14' },
    { id: 'id-3', name: 'Marusia Nechemna', number: '666-55-44' },
  ]);

  const [filter, setFilter] = useState('');

  const addContactData = (newContact) => {
    const isTrue = contacts.some(({ name }) => name === newContact.name);
    if (isTrue) {
      Notify.failure(`${newContact.name} is already with us`);
      return;
    }
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  }

  const removeContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  }

  const getFilterContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase().trim()));
  }

  const getFilterData = ({ target: { value } }) => {
    setFilter(value);
  }

  const filterContacts = getFilterContacts();

  return (
    <AppContainer>
      <h1>PHONEBOOK</h1>
      <ContactForm addContactData={addContactData} />
      <h2>CONTACTS</h2>
      <Filter filter={filter} getFilterData={getFilterData} />
      <ContactList contacts={filterContacts} removeContact={removeContact} getFilterContacts={getFilterContacts} />
    </AppContainer>
  );
}

export default App;
