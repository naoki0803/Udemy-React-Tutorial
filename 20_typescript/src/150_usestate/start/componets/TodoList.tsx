import type { Todo } from "../Example";

type TodoListProps = {
    todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
};

export default TodoList;
