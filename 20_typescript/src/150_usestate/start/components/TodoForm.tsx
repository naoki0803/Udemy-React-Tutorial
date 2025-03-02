import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Todo } from "../Example";

type TodoFormProps = {
    todosState: [Todo[], Dispatch<SetStateAction<Todo[]>>];
};

const TodoForm: React.FC<TodoFormProps> = ({ todosState }) => {
    const [todos, setTodos] = todosState;
    const [value, setValue] = useState<string>("");
    console.log(todos);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 100000),
            text: value,
        };
        setTodos([...todos, newTodo]);
        console.log(todos);
        setValue("");
    };
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                id="todoInput"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">ボタン</button>
        </form>
    );
};

export default TodoForm;
