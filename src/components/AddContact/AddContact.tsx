/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './AddContact.scss';
// import { Contact } from '../../api/contacts';

interface State {
  name: string;
  phone: string;
  email:string;
  website:string;
}

export class AddContact extends React.Component<{}, {}> {
  state: State = {
    name: '',
    phone: '',
    email: '',
    website: '',
  };

  render() {
    const {
      name,
      phone,
      email,
      website,
    } = this.state;

    return (
      <form className="AddContact">
        <div>
          Enter name:
        </div>

        <input
          type="text"
          className="AddContact__name input"
          value={name}
        />

        <div>
          Enter phone:
        </div>

        <input
          type="text"
          className="AddContact__phone input"
          value={phone}
        />

        <div>
          Enter email:
        </div>

        <input
          type="text"
          className="AddContact__email input"
          value={email}
        />

        <div>
          Enter website:
        </div>

        <input
          type="text"
          className="AddContact__website input"
          value={website}
        />

        <button type="submit" className="button AddContact__button">
          Add Contact
        </button>

        <button type="button" className="button AddContact__button">
          Back to contacts
        </button>
      </form>
    );
  }
}
