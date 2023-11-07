import React from 'react';
import {
  ContactItemContainer,
  ContactTextName,
  ContactTextNumber,
  ContactDeleteBtn,
} from './ContactItem.styles';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'store/thunk';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <ContactItemContainer>
      <div>
        <ContactTextName>Name: {contact.name}</ContactTextName>
        <ContactTextNumber>Phone: {contact.phone}</ContactTextNumber>
      </div>
      <ContactDeleteBtn onClick={handleDelete}>Delete</ContactDeleteBtn>
    </ContactItemContainer>
  );
};

export default ContactItem;
