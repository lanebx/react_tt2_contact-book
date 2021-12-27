/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './AddContact.scss';
import { Contact } from '../../api/contacts';

interface State {
  name: string;
  phone: string;
  email:string;
  website:string;

  nameCheck: boolean;
  phoneCheck: boolean;
  emailCheck: boolean;
}

interface Props {
  addNewContact(arg0: React.FormEvent<HTMLFormElement>, arg: Contact): void;
  lengthContact: number;
}

export class AddContact extends React.Component<Props, State> {
  state: State = {
    name: '',
    phone: '',
    email: '',
    website: '',
    nameCheck: true,
    phoneCheck: true,
    emailCheck: true,
  };

  handlechange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    if (name === 'name') {
      if (value.length === value.trim().length) {
        this.setState({ nameCheck: true });
      } else {
        this.setState({ nameCheck: false });
      }

      this.setState({ [name]: value });
    }

    if (name === 'phone') {
      const reg = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;

      if (String(value.match(reg)?.join('')) === value) {
        this.setState({ phoneCheck: true });
      } else {
        this.setState({ phoneCheck: false });
      }

      this.setState({ [name]: value });
    }

    if (name === 'email') {
      // eslint-disable-next-line no-useless-escape
      const reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

      if (reg.test(value)) {
        this.setState({ emailCheck: true });
      } else {
        this.setState({ emailCheck: false });
      }

      this.setState({ [name]: value });
    }

    if (name === 'website') {
      this.setState({ [name]: value });
    }
  }

  render() {
    const {
      name,
      phone,
      email,
      website,
      nameCheck,
      phoneCheck,
      emailCheck,
    } = this.state;

    return (
      <form
        className="AddContact"
        onSubmit={(event) => {
          const length = this.props.lengthContact + 1;

          this.props.addNewContact(event, {
            id: length,
            name,
            phone,
            email,
            website,
          });
        }}
      >
        <div>
          Enter name:
        </div>

        <input
          type="text"
          className={nameCheck ? 'input' : 'input error'}
          name="name"
          value={name}
          onChange={(event) => {
            this.handlechange(event);
          }}
          required
        />

        <div>
          Enter phone:
        </div>

        <input
          type="text"
          className={phoneCheck ? 'input' : 'input error'}
          value={phone}
          name="phone"
          onChange={(event) => {
            this.handlechange(event);
          }}
          required
        />

        <div>
          Enter email:
        </div>

        <input
          type="text"
          className={emailCheck ? 'input' : 'input error'}
          value={email}
          name="email"
          onChange={(event) => {
            this.handlechange(event);
          }}
          required
        />

        <div>
          Enter website:
        </div>

        <input
          type="text"
          className="AddContact__website input"
          value={website}
          name="website"
          onChange={(event) => {
            this.handlechange(event);
          }}
        />

        <button type="submit" className="button App__button">
          Add Contact
        </button>
      </form>
    );
  }
}
