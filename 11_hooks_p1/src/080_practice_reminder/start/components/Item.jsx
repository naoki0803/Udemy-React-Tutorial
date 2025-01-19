import { useDispatchTodo } from "../context/TodoContext";
import { useState, useRef } from "react";

const Item = ({ todo }) => {
    const [editValue, setEditValue] = useState(todo.content);
    const dispatch = useDispatchTodo();
    const inputRef = useRef();

    const ChangeHandler = (e) => {
        setEditValue(e.target.value);
    };

    const complete = () => {
        dispatch({ type: "todo/destroy", todo });
    };

    const editHandler = () => {
        const newTodo = { ...todo, content: editValue, editing: true };
        dispatch({ type: "todo/edit", newTodo: newTodo });
        // setTimeoutを使用してフォーカスを遅延させる
        setTimeout(() => {
            inputRef.current.focus();
        }, 0);
    };

    const updateHandler = (e) => {
        e.preventDefault();
        const newTodo = { ...todo, content: editValue, editing: false };
        console.log("🚀 ~ toggleHandler ~ newTodo:", newTodo.id);
        dispatch({ type: "todo/update", newTodo: newTodo });
    };

    return (
        <div key={todo}>
            <button onClick={complete}>完了</button>
            <form onSubmit={updateHandler} style={{ display: "inline" }}>
                {todo.editing ? (
                    <input
                        onChange={ChangeHandler}
                        value={editValue}
                        ref={inputRef}
                    />
                ) : (
                    <span onDoubleClick={editHandler}>{todo.content}</span>
                )}
            </form>
        </div>
    );
};

export default Item;
