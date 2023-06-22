import { styled } from 'styled-components';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChangeValue = ({ target }) => {
    const { name, value } = target;
    return this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContact = { id: crypto.randomUUID(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Card>
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChangeValue={this.handleChangeValue}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChangeValue={this.handleChangeValue} />
        <ContactList
          contacts={contacts}
          filter={filter}
          handleDelete={this.handleDelete}
        />
      </Card>
    );
  }
}

const Card = styled.div`
  margin-left: 20px;
`;

export default App;
