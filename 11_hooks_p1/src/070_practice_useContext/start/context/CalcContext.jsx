import { useReducer, createContext, useContext } from "react";

const CalcContext = createContext();
export const useCalc = () => useContext(CalcContext);

const CalcDispatchContext = createContext();
export const useDispatchCalc = () => useContext(CalcDispatchContext);

const CalcProvider = ({ children }) => {
    const initState = {
        a: 1,
        b: 2,
        result: 3,
    };

    const [state, dispatch] = useReducer(reducer, initState);

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

    const numChangeHandler = (e) => {
        dispatch({
            type: "change",
            payload: { name: e.target.name, value: e.target.value },
        });
    };

    return (
        <CalcContext.Provider value={useCalc}>
            <CalcDispatchContext.Provider value={useDispatchCalc}>
                {children}
            </CalcDispatchContext.Provider>
        </CalcContext.Provider>
    );
};

export default CalcProvider;
