import { useState } from 'react';

import {
  ContactFormStyled,
  ContactInput,
  ContactLabel,
  ContactButton,
} from './ContactForm.styled';

export default function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(evt) {
    const { name, value } = evt.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.dataSubmit({ name, number });
    setName('');
    setNumber('');
  }

  return (
    <ContactFormStyled onSubmit={handleSubmit}>
      <ContactLabel>
        Name
        <ContactInput
          type="text"
          placeholder="Enter contact name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters (less then 25), apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          maxlength="25"
          required
          value={name}
          onChange={handleChange}
        />
      </ContactLabel>
      <ContactLabel>
        Number
        <ContactInput
          type="tel"
          name="number"
          placeholder="Enter contact phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </ContactLabel>

      <ContactButton type="submit">Add contact</ContactButton>
    </ContactFormStyled>
  );
}
