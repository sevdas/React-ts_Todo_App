import React from 'react';
import classes from './TodoItem.module.css'
interface TodoItemProps {
    text: string;
    id: string;
    handleRemove: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, handleRemove }) => {

    return (
        <li className={classes.item} onClick={handleRemove}>{text}</li>
    )
}

export default TodoItem;

