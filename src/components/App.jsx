import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styles';
import Notify from 'notifyjs';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'store/selectors';
import { fetchContacts } from 'store/thunk';

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

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <h1>PHONEBOOK</h1>
      <ContactForm addContactData={addContactData} />
      <h2>CONTACTS</h2>
      <Filter filter={filter} getFilterData={getFilterData} />
      {isLoading && <b>Please wait...</b>}
      {error && <b>{error}</b>}
      <ContactList contacts={filterContacts} removeContact={removeContact} getFilterContacts={getFilterContacts} />
    </AppContainer>
  );
}

export default App;
