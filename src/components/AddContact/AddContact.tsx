/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './AddContact.scss';

export class AddContact extends React.Component<{}, {}> {
  render() {
    return (
      <div className="AddContact">
        <input
          type="text"
          className="AddContact__name"
        />

        <input
          type="text"
          className="AddContact__phone"
        />

        <input
          type="text"
          className="AddContact__email"
        />

        <input
          type="text"
          className="AddContact__website"
        />
      </div>
    );
  }
}
