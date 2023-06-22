import { styled } from 'styled-components';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, handleDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </DeleteBtn>
        </li>
      ))}
    </ul>
  );
};

const DeleteBtn = styled.button`
  width: 50px;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 5px;
  border-color: initial;
`;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  filter: PropTypes.string,
  handleDelete: PropTypes.func,
};
