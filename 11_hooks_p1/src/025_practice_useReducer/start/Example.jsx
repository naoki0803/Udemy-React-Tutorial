import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, action) => {
    switch (action.type) {
        case "change":
            const { name, value } = action.payload;
            return { ...state, [name]: value }; // 状態を更新
        case "add":
            return { ...state, result: state.a + state.b };
        case "minus":
            return { ...state, result: state.a - state.b };
        case "divide":
            return { ...state, result: state.a / state.b };
        case "multiply":
            return { ...state, result: state.a * state.b };
        default:
            return state; // デフォルトの状態を返す
    }
};

const Example = () => {
    const initState = {
        a: 1,
        b: 2,
        result: 3,
    };

    const [state, dispatch] = useReducer(reducer, initState);

    const calculate = (e) => {
        dispatch({
            type: e.target.value,
        });
    };

    const numChangeHandler = (e) => {
        const name = e.target.name;
        const value = Number(e.target.value);
        dispatch({
            type: "change",
            payload: { name, value },
        });
    };

    return (
        <>
            <h3>練習問題</h3>
            <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
            <div>
                a:
                <input
                    type="number"
                    name="a"
                    value={state.a}
                    onChange={numChangeHandler}
                />
            </div>
            <div>
                b:
                <input
                    type="number"
                    name="b"
                    value={state.b}
                    onChange={numChangeHandler}
                />
            </div>
            <select value={state.type} onChange={calculate}>
                {CALC_OPTIONS.map((cal) => {
                    return (
                        <option key={cal} value={cal}>
                            {cal}
                        </option>
                    );
                })}
            </select>
            <h3>結果：{state.result}</h3>
        </>
    );
};

export default Example;
