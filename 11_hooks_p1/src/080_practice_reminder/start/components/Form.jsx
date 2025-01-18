import { useState } from "react";
import { useDispatchTodo } from "../context/TodoContext";
const Form = () => {
    const [enteredTodo, setEnteredTodo] = useState("");
    const dispatch = useDispatchTodo();

    const addTodo = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo,
            editing: false,
        };
        // dispatch({ type: 'todo/add', todo: newTodo, editing: false });
        dispatch({ type: "addTodo", todo: newTodo, editing: false });

        // createTodo(newTodo);

        setEnteredTodo("");
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={enteredTodo}
                    onChange={(e) => setEnteredTodo(e.target.value)}
                />
                <button>追加</button>
            </form>
        </div>
    );
};

export default Form;
