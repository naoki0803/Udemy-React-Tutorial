import List from "./List";
import Form from "./Form";
import { TodoProvider } from "../context/TodoContext";

const Todo = () => {
    return (
        <>
            <TodoProvider>
                <Form />
                <List />{" "}
                {/* <List todos={todos} deleteTodo={deleteTodo} />
                <Form createTodo={createTodo} /> */}
            </TodoProvider>
        </>
    );
};
export default Todo;
