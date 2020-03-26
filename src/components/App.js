import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import css from "./App.module.css";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  componentDidMount(){
    const contacts=(localStorage.getItem("contacts")!==null)?JSON.parse(localStorage.getItem("contacts")):this.state.contacts;
    this.setState({contacts});
  }

  componentDidUpdate(){
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  submitContact = data => {
    const isNameExist = this.state.contacts.some(
      contact => contact.name === data.name
    );
    !isNameExist
      ? this.setState(prevState =>
          data.name
            ? {
                contacts: [...prevState.contacts, data]
              }
            : alert("empty name")
        )
      : alert("This name exist");
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  getFilteredContacts = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <div className={css.phonebook}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm submitContact={this.submitContact} />
          {this.state.contacts.length > 2 && (
            <Filter getFilteredContacts={this.getFilteredContacts} />
          )}
        </div>
        <div>
          <h2>Contacts</h2>
          {this.state.contacts.length > 2 ? (
            <ContactList
              contacts={this.filterContacts()}
              deleteContact={this.deleteContact}
            />
          ) : (
            <ContactList
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            />
          )}
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  contacts: []
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
};

export default App;
