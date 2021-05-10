import React from 'react';
import { Badge, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faTrash } from '@fortawesome/free-solid-svg-icons';


function TodoItem({ item }, key) {

    const handleDel = id =>{
        console.log(id);
    }

    return (
        <ListGroupItem className="todo-item" key={key}>
            <span>{item.text}</span>
            <Badge color="dark" onClick={handleDel(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </Badge>
        </ListGroupItem>
    );
}

export default TodoItem;