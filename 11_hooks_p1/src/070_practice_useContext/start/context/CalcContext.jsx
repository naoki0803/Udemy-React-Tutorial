import { useReducer, createContext, useContext } from "react";

const CalcContext = createContext();
const useCalc = () => useContext(CalcContext);

const CalcDispatchContext = createContext();
const useDispatchCalc = () => useContext(CalcDispatchContext);

const CalcProvider = ({ children }) => {
    const initState = {
        a: 1,
        b: 2,
        result: 3,
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case "change": {
                const { name, value } = payload;
                return { ...state, [name]: value };
            }
            case "add": {
                return { ...state, result: state.a + state.b };
            }
            case "minus": {
                return { ...state, result: state.a - state.b };
            }
            case "divide": {
                return { ...state, result: state.a / state.b };
            }
            case "multiply": {
                return { ...state, result: state.a * state.b };
            }
            default:
                throw new Error("operator is invalid");
        }
    };

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <CalcContext.Provider value={state}>
            <CalcDispatchContext.Provider value={dispatch}>
                {children}
            </CalcDispatchContext.Provider>
        </CalcContext.Provider>
    );
};

export { CalcProvider, useCalc, useDispatchCalc };
