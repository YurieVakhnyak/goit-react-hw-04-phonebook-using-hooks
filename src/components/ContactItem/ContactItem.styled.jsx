import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ContactButton } from 'components/ContactForm/ContactForm.styled';

export const ContactItemStyled = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: cadetblue;
  }

  & svg {
    color: cadetblue;
    margin-right: 10px;
  }
`;

export const ContactIcon = styled.svg`
  color: cadetblue;
  margin-right: 10px;
`;

export const ContactName = styled.p`
  margin-right: auto;
`;

export const DeleteButton = styled(ContactButton)`
  ${props => css`
    height: 20px;
  `}
`;
