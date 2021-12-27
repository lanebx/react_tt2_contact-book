import React from 'react';
import { Contact } from '../../api/contacts';
import './CurrentContact.scss';

interface Props {
  contact: Contact | null;
}

export const CurrentContact: React.FC<Props> = ({ contact }) => {
  return (
    <div className="CurrentContact">
      <div className="CurrentContact__name">
        {contact?.name}
      </div>

      <div className="CurrentContact__phone">
        {contact?.phone}
      </div>

      <div className="CurrentContact__email">
        {contact?.email}
      </div>

      <div className="CurrentContact__website">
        {contact?.website}
      </div>
    </div>
  );
};
