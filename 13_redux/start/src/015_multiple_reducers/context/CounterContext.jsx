import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();
const CounterDispatchContext = createContext();

const reducer = (prev, { type, step }) => {
  switch (type) {
    case "+":
      return prev + step;
    case "-":
      return prev - step;
    default:
      throw new Error('不明なactionです。')
  }
};

const CounterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <CounterContext.Provider value={state}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterContext.Provider>
    )
}

const useCounter = () => {
    return useContext(CounterContext);
}

const useCounterDispatch = () => {
    return useContext(CounterDispatchContext);
}

export { CounterProvider, useCounter, useCounterDispatch }