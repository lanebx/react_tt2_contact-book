/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Contact } from '../../api/contacts';
import './ContactsList.scss';

interface Props {
  contacts: Contact[];
  onSelectContactID(userId: number) : void;
  deleteContact(userId: number) : void;
}

export class ContactsList extends React.Component<Props, {}> {
  render() {
    const {
      contacts,
      onSelectContactID,
      deleteContact,
    } = this.props;

    return (
      <div className="ContactsList">
        <h2 className="ContactsList__title">
          Contacts:
        </h2>

        <div className="ContactsList__list-container">
          <ul className="ContactsList__list">
            {contacts.map((contact: Contact) => {
              return (
                <li
                  key={contact.email}
                  className="ContactsList__item"
                >
                  <div
                    className="ContactsList__container"
                    onClick={() => {
                      onSelectContactID(contact.id);
                    }}
                  >
                    <div className="ContactsList__label">
                      {contact.name}
                    </div>

                    <div className="ContactsList__label">
                      {contact.phone}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="ContactsList__button"
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
