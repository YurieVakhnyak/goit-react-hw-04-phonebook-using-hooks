import { MdPhone } from 'react-icons/md';
import { DeleteButton } from 'components/ContactItem/ContactItem.styled';

import {
  ContactItemStyled,
  ContactName,
} from 'components/ContactItem/ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItemStyled key={id}>
      <MdPhone />
      <ContactName>
        {name} : {number}
      </ContactName>
      <DeleteButton type="button" name={id} onClick={() => onDeleteContact()}>
        Delete
      </DeleteButton>
    </ContactItemStyled>
  );
};
