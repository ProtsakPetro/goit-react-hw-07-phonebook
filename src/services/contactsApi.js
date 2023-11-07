import axios from 'axios';

axios.defaults.baseURL = 'https://654374c501b5e279de2066c5.mockapi.io/phonebook';

export const fetchAll = async () => {
    const { data } = await axios.get(`/contacts`);
    return data;
  };
  
  export const addContact = async (name, phone) => {
    const { data } = await axios.post(`/contacts`, { name, phone });
    return data;
  };
  
  export const deleteContact = async (contactId) => {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  };