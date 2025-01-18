import { useReducer, createContext, useContext } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const TodoProvider = ({ children }) => {
    const todosList = [
        {
            id: 1,
            content: "店予約する",
        },
        {
            id: 2,
            content: "卵買う",
        },
        {
            id: 3,
            content: "郵便出す",
        },
    ];

    const reducer = (prevTodos, payload) => {
        console.log("😀😀😀", payload);
        const { type, todo } = payload;
        switch (type) {
            case "addTodo":
                return [...prevTodos, todo];
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
