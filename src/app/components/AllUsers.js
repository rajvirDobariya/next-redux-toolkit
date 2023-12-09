'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/slice';

export default function AllUsers() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {(users !== null) &&
          users.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
