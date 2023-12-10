'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/userSlice';
import Link from 'next/link';



export default function Page() {
    const users = useSelector((data) => data.userData.users);
    const dispatch = useDispatch();
  
    const handleDeleteUser = (userId) => {
      dispatch(deleteUser(userId));
    };
  
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {(users !== 0) &&
            users.map((user) => (
              <li key={user.id}>
                {user.name}
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </li>
            ))}
        </ul>
        <Link href='/'>Back</Link>
      </div>
    );
  }
  