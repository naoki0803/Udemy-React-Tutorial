import { useReducer, useContext, createContext } from "react";

const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext);

const CounterDispatchContext = createContext();
export const useCounterDispatch = () => useContext(CounterDispatchContext);

export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer((prev, { type, step }) => {
        switch (type) {
            case "+":
                return prev + step;
            case "-":
                return prev - step;
            default:
                throw new Error("不明なactionです。");
        }
    }, 0);

    return (
        <CounterContext.Provider value={state}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterContext.Provider>
    );
};
