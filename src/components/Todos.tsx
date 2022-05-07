import Todo from '../models/todo'
import TodoItem from './TodoItem'

interface CustomesProps {
   items: Todo[];
}
debugger

const Todos: React.FC<CustomesProps> = ({items}) => {
    return (
        <ul>
          {items.map(({ id, text }) => (
                <TodoItem key={id} text={text}/>
            ))}
        </ul>
    )
}

export default Todos