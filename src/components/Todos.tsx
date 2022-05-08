import Todo from '../models/todo'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'

interface CustomesProps {
   items: Todo[];
}

const Todos: React.FC<CustomesProps> = ({items}) => {
    return (
        <ul className={classes.todos}>
          {items.map(({ id, text }) => (
                <TodoItem key={id} text={text}/>
            ))}
        </ul>
    )
}

export default Todos