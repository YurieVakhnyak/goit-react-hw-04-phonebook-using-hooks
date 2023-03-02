import { useState, useEffect, useRef } from 'react';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Phonebook, ContactTitle, TitlePhonebook } from './App.styled';

export default function App() {
  const INITIAL_CONTACTS = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'));
      if (contactsFromStorage) {
        setContacts(contactsFromStorage);
      }
      isFirstRender.current = false;
      return;
    }
  }, []);

  useEffect(
    prev => {
      if (prev !== contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    },
    [contacts]
  );

  const deleteContact = contactId => {
    // delete contact by click button 'Delete'
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleInput = evt => {
    const { value } = evt.target;
    setFilter(value);

    return evt.target.value;
  };
  const addNewContact = data => {
    const { name, number } = data;
    const filteredContacts = contacts.filter(contact => contact.name === name);
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    filteredContacts.length > 0
      ? Notify.info(`${name} is allready in contacts`)
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  return (
    <Phonebook>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm dataSubmit={addNewContact} />
      <ContactTitle>Contacts</ContactTitle>

      <Filter handleInput={handleInput} filter={filter} />
      {contacts.length > 0 && (
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={deleteContact}
        />
      )}
    </Phonebook>
  );
}
