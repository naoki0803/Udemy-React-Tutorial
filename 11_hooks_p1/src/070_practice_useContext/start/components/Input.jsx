import { useCalc, useDispatchCalc } from "../context/CalcContext";

const Input = ({ name }) => {
    const state = useCalc();
    const dispatch = useDispatchCalc(); // 追加: dispatchを取得

    const numChangeHandler = (e) => {
        dispatch({
            type: "change",
            payload: { name: e.target.name, value: parseInt(e.target.value) },
        });
    };

    return (
        <div>
            {name}:
            <input
                type="number"
                name={name}
                value={state[name]}
                onChange={numChangeHandler}
            />
        </div>
    );
};
export default Input;
