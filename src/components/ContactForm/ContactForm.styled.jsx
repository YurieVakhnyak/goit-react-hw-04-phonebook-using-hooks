import styled from '@emotion/styled';

export const ContactFormStyled = styled.form`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 20px;
  border: 2px solid cadetblue;
  border-radius: 5px;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactInput = styled.input`
  height: 20px;
  padding-left: 10px;
  &:focus {
    outline-color: cadetblue;
  }
`;

export const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ContactButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  height: 25px;
  border-radius: 5px;
  border-width: 1px;
  border-color: darkgray;
  &:hover {
    background-color: cadetblue;
    border-color: cadetblue;
    cursor: pointer;
  }
`;
