import React from 'react';
import {useState} from 'react';

export default function AddPersonForm(props) {
  const [person, setPerson] = useState('');

  const handleChange = e => {
    setPerson(e.target.value);
  };

  const handleSubmit = e => {
    if (person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add new person'
        onChange={handleChange}
        value={person}
      />
      <button type='submit' style={{marginLeft: 10}}>
        Add
      </button>
    </form>
  );
}
