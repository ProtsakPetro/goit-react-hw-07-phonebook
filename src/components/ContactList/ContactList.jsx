import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { filteredContacts } from 'redux/contact/selectors';

const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  return (
    <ul>{contacts.length > 0 && <ContactListItem contacts={contacts} />}</ul>
  );
};

export default ContactList;