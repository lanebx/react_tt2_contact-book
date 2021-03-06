import React from 'react';
import './App.scss';
import { Contact, contactsFromServer } from './api/contacts';
import { CurrentContact } from './components/CurrentContact/CurrentContact';

import { ContactsList } from './components/ContactsList/ContactsList';
import { AddContact } from './components/AddContact/AddContact';

const contactList = contactsFromServer.map((contact: Contact) => {
  return { ...contact };
});

interface State {
  selectedContactId: number;
  contacts: Contact[];
  addContact: boolean;
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedContactId: 0,
    contacts: contactList,
    addContact: false,
  };

  selectContact = (userId: number) => {
    this.setState({ selectedContactId: userId });
  };

  onClear = () => {
    this.setState({ selectedContactId: 0 });
  };

  deleteContact = (userId: number) => {
    this.setState((state) => {
      return {
        contacts: state.contacts.filter((contact) => contact.id !== userId),
      };
    });
  };

  addNewContact = (event: React.FormEvent<HTMLFormElement>, object: Contact) => {
    event.preventDefault();

    this.setState((state) => {
      return {
        contacts: [
          ...state.contacts,
          object,
        ],
        addContact: false,
      };
    });
  };

  render() {
    const { selectedContactId, contacts, addContact } = this.state;

    return (
      <div className="App">
        <div className="App__main-content">
          <div className="App__header">
            <h1 className="App__title">
              {!addContact ? 'Contacts book' : 'Add contact'}
            </h1>
            <div className="App__count">
              count:
              {this.state.contacts.length}
            </div>

            {(!selectedContactId && !addContact) && (
              <button
                className="App__button-select"
                type="button"
                onClick={() => {
                  this.setState({ addContact: true });
                }}
              >
                Add contact
              </button>
            )}
          </div>

          {addContact
            ? (
              <div>
                <AddContact
                  addNewContact={this.addNewContact}
                  lengthContact={this.state.contacts.length}
                />

                <button
                  type="button"
                  className="button App__button"
                  onClick={() => {
                    this.setState({ addContact: false });
                  }}
                >
                  Back to contacts
                </button>
              </div>
            )
            : (
              <div>
                {selectedContactId
                  ? (
                    <div>
                      <CurrentContact
                        contact={contacts
                          .find((contact: Contact) => contact.id === selectedContactId) || null}
                      />

                      <button
                        type="button"
                        className="button"
                        onClick={() => {
                          this.setState({ selectedContactId: 0 });
                        }}
                      >
                        To contacts
                      </button>
                    </div>
                  )
                  : (
                    <ContactsList
                      contacts={contacts}
                      onSelectContactID={this.selectContact}
                      deleteContact={this.deleteContact}
                    />
                  )}
              </div>
            )}

        </div>
      </div>
    );
  }
}
