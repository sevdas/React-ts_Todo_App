import Todo from '../models/todo'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'

interface CustomeProps {
   items: Todo[];
   handleRemove: (id: string) => void;
}

const Todos: React.FC<CustomeProps> = ({items, handleRemove}) => {

    return (
        <ul className={classes.todos}>
          {items.map(({ id, text }) => (
                <TodoItem key={id} text={text} handleRemove={handleRemove.bind(null, id)} id={id} />
            ))}
        </ul>
    )
}

export default Todos