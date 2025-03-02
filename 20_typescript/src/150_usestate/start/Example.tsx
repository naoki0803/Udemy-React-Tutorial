import { useState } from "react";
import TodoList from "./componets/TodoList";
import TodoForm from "./componets/TodoForm";

export type Todo = {
    id: number;
    text: string;
};

type User = {
    name: string;
    age: number;
};

const Example = () => {
    const [animals, setAnimals] = useState<string[]>(["dog", "cat"]);
    const [users, setUsers] = useState<User[]>([{ name: "taro", age: 23 }]);

    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: "本を読む" },
        { id: 2, text: "寝る" },
        { id: 3, text: "起きる" },
        { id: 4, text: "洗濯" },
        { id: 5, text: "炊事" },
        { id: 6, text: "ご飯を作る" },
    ]);

    return (
        <>
            <TodoForm todosState={[todos, setTodos]} />
            <TodoList todos={todos} />
        </>
    );
};

export default Example;
