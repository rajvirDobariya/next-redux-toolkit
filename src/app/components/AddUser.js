'use client'
import React, { useState } from 'react';
import { addUser } from '../redux/slice';
import { useDispatch } from 'react-redux';

export default function AddUser() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(addUser(name))
    setName('');
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter name"
        />
        {name && <p>You entered: {name}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
