'use client'
import React, { useState } from 'react';
import { addTodo, deleteTodo } from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, ListGroup } from 'react-bootstrap'; // Import React Bootstrap components

export default function AddTodo() {
  const todos = useSelector((state) => state.todoData.todos);
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  return (
    <>
      <div>
        <h1>Add Todo</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="todoInput">
            <Form.Label>Todo:</Form.Label>
            <Form.Control
              type="text"
              value={todoText}
              onChange={handleTodoTextChange}
              placeholder="Enter todo"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Todo
          </Button>
        </Form>
      </div>
      <div>
        <h1>Todo List</h1>
        <ListGroup>
          {todos.length !== 0 &&
            todos.map((todo) => (
              <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
                {todo.text}
                <Button variant="danger" onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </>
  );
}
