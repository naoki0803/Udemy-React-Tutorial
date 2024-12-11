import { useDispatch } from "react-redux";

const CounterButton = ({calcType, step, actionCreator}) => {
    
    const dispatch = useDispatch();
    const clickHandler = () => {
        // const action = calcType === '+' ? add(step) : minus(step);
        dispatch(actionCreator(step));
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;