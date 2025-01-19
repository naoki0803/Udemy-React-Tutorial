import { useReducer, createContext, useContext } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const TodoProvider = ({ children }) => {
    const todosList = [
        {
            id: 1,
            content: "店予約する",
            editing: false,
        },
        {
            id: 2,
            content: "卵買う",
            editing: false,
        },
        {
            id: 3,
            content: "郵便出す",
            editing: false,
        },
    ];

    const reducer = (prevTodos, payload) => {
        switch (payload.type) {
            case "todo/new":
                const { newTodo } = payload;
                return [...prevTodos, newTodo];
            case "todo/destroy":
                return prevTodos.filter((_todo) => {
                    return _todo.id !== payload.todo.id;
                });
            case "todo/edit":
                return prevTodos.map((_todo) => {
                    return _todo.id === payload.newTodo.id
                        ? { ...payload.newTodo }
                        : { ..._todo };
                });
            case "todo/update":
                return prevTodos.map((_todo) => {
                    return _todo.id === payload.newTodo.id
                        ? { ...payload.newTodo }
                        : { ..._todo };
                });
        }
    };

    const [state, dispatch] = useReducer(reducer, todosList);

    return (
        <TodoContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
};

const useTodo = () => useContext(TodoContext);
const useDispatchTodo = () => useContext(TodoDispatchContext);

export { TodoProvider, useTodo, useDispatchTodo };
