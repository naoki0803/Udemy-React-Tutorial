import { useDispatch } from "react-redux";
import { add, minus } from "../store/modules/counter";
const CounterButton = ({ calcType, step }) => {
    const dispatch = useDispatch();
    // const dispatch = useCounterDispatch();

    const clickHandler = () => {
        const action = calcType === "+" ? add(step) : minus(step);
        console.log("🚀 ~ clickHandler ~ action:", action);

        dispatch(action);
        // dispatch({ type: "counter/" + calcType, payload: step });
    };

    return (
        <button onClick={clickHandler}>
            {calcType}
            {step}
        </button>
    );
};
export default CounterButton;
