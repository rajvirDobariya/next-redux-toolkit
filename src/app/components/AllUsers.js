import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/userSlice';
import { ListGroup, Button } from 'react-bootstrap'; // Import React Bootstrap components

export default function AllUsers() {
  const users = useSelector((data) => data.userData.users);
  const dispatch = useDispatch();

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <h1>User List</h1>
      <ListGroup>
        {users.length !== 0 &&
          users.map((user) => (
            <ListGroup.Item key={user.id} className="d-flex justify-content-between align-items-center">
              {user.name}
              <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
