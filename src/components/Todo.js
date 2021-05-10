import React, { useState } from 'react';
import { Container, ListGroup } from 'reactstrap';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodo = [...todos, todo];
        setTodos(newTodo);
        console.log(todos);
    }

    return (
        <Container fluid="sm">
            <div className="todo-container">
                <TodoForm addTodo={addTodo} />
                <ListGroup className="todo-list">
                {
                    todos.map((todo, key) => 
                        <TodoItem key={key} item={todo} />
                    )
                }
                </ListGroup>
            </div>
        </Container>
    );
};

export default Todo;