import classes from './TodoItem.module.css'
interface TodoItemProps {
    text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {

    return (
        <li className={classes.item}>{text}</li>
    )
}

export default TodoItem;

