import React from "react";

interface UserInputTodoProps {
    onAddTodo: (text: string) => void
}


const UserInputTodo: React.FC<UserInputTodoProps> = ({ onAddTodo }) => {

    const inputEl = React.useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        if (inputEl && inputEl.current) {
            onAddTodo(inputEl.current.value)
        }
        return
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <label htmlFor="todoInput">TODO</label>
            <input ref={inputEl} id="todoInput" type="text" name="todo" />
            <button>Add Todo</button>
        </form>
    )
}

export default UserInputTodo;

