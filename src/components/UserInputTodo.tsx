import React from 'react'
import classes from './UserInputTodo.module.css'

interface UserInputTodoProps {
    onAddTodo: (text: string) => void
}


const UserInputTodo: React.FC<UserInputTodoProps> = ({ onAddTodo }) => {

    const inputEl = React.useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        if (inputEl && inputEl.current) {
            onAddTodo(inputEl.current.value)
            inputEl.current.value = '' // reset
        }
        return
    }

    return (
        <form action="" onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="todoInput">TODO</label>
            <input ref={inputEl} id="todoInput" type="text" name="todo" />
            <button>Add Todo</button>
        </form>
    )
}

export default UserInputTodo;

