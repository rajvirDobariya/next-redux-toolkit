'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; // Import React Bootstrap components
import AddUser from './AddUser';

export default function Login() {
  const [showAddUser, setShowAddUser] = useState(false);

  const handleUserLinkClick = () => {
    setShowAddUser(true); // Set showAddUser to true when the link is clicked
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Button variant="primary" onClick={handleUserLinkClick}>Add User</Button>
        <br /><br /><br />
        {showAddUser && <AddUser />}
      </div>
      <br />
      <Link href='/todo'>TO DO</Link>
    </div>
  );
}
