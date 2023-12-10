import React, { useState } from 'react';
import { addUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap'; // Import React Bootstrap components
import Link from 'next/link';

export default function AddUser() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(addUser(name));
    setName('');
  };

  return (
    <div>
      <h1>Add User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nameInput">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter name"
          />
          {name && <Form.Text>You entered: {name}</Form.Text>}
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      <br />
      <Link href='/removeUser'>User List</Link>
    </div>
  );
}
