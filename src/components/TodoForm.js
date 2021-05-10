import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import { InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';


const TodoForm = ({ addTodo }) => {

    const [todo, setTodo] = useState({ id: '', text: '' });

    const handleOnChangetext = e => {
        setTodo({
            id: uuidv4(),
            text: e.target.value
        });
    }

    const handleAddText = () => {

        if (!todo.text) return false;

        addTodo(todo);
        setTodo({ id: 0, text: '' });
    }

    return (
        <div className="form-input">
            <InputGroup>
                <Input placeholder="Please input text" value={todo.text} onChange={e => handleOnChangetext(e)} />
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={handleAddText}>Submit</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default TodoForm;