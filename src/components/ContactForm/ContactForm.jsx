import PropTypes from 'prop-types';
import { StyledBtn, StyledForm } from './ContactForm.styled';

export const ContactForm = ({ handleSubmit, handleChangeValue }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        onChange={handleChangeValue}
        type="text"
        name="name"
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h3>Number</h3>
      <input
        onChange={handleChangeValue}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <StyledBtn type="submit">Add contact</StyledBtn>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChangeValue: PropTypes.func,
};
