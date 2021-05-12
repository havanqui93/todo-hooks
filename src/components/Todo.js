import React, { useState } from 'react';
import { Container, ListGroup } from 'reactstrap';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoHeader from './TodoHeader';

const initLocalStorage = () =>{
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
}

const Todo = () => {
    const [todos, setTodos] = useState(() => initLocalStorage());

    const addTodo = todo => {
        const newTodo = [...todos, todo];
        setTodos(newTodo);
        localStorage.setItem('todos', JSON.stringify(newTodo));
    }

    const handleDelete = id =>{
        const newTodo = todos.filter(x=>x.id != id);
        setTodos(newTodo);
        localStorage.setItem('todos', JSON.stringify(newTodo));
    }

    return (
        <Container fluid="sm">
            <div className="todo-container">
                <TodoHeader />
                <TodoForm addTodo={addTodo}/>
                <ListGroup className="todo-list">
                {
                    todos.map((todo, key) => 
                        <TodoItem key={key} item={todo} handleDelete={handleDelete} />
                    )
                }
                </ListGroup>
            </div>
        </Container>
    );
};

export default Todo;