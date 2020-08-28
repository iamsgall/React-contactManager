import React, {useState} from 'react';
import AddPersonForm from './AddPersonForm';
import PeopleList from './PeopleList';

export default function ContactManager(props) {
  const [contacts, setContacts] = useState([]);

  const addPerson = name => {
    setContacts([...contacts, name]);
  };

  return (
    <div>
      <h2>Contact Manager</h2>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
