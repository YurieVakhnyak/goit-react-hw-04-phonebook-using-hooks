import { ContactInput } from 'components/ContactForm/ContactForm.styled';
import { FilterLabel } from 'components/Filter/Filter.styled';

export const Filter = ({ handleInput, filter }) => {
  return (
    <FilterLabel>
      Find contact by name:
      <ContactInput
        type="name"
        placeholder="Enter searching name..."
        name="filter"
        value={filter}
        onInput={handleInput}
      />
    </FilterLabel>
  );
};
