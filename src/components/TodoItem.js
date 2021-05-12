import React from 'react';
import { Badge, ListGroupItem, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ item, handleDelete }, key) {

    return (
        <ListGroupItem className="todo-item" key={key}>
            <span>{item.text}</span>
            <span className="badge badge-dark" onClick={() => handleDelete(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </ListGroupItem>
    );
}

export default TodoItem;