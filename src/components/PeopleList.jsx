import React from 'react';

export default function PeopleList(props) {
  const datas = props.data;

  if (datas) {
    return (
      <ul>
        {datas.map((contact, index) => (
          <li key={index}>{contact}</li>
        ))}
      </ul>
    );
  }
  return <p>Nothing contact yet.</p>;
}
