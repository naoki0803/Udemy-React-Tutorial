import { useDispatch } from "react-redux";
// 使用していないCounterContextのimport削除

const CounterButton = ({calcType, step}) => {

    const dispatch = useDispatch();
    // const dispatch = useCounterDispatch();

    const clickHandler = () => {
        dispatch({ type: calcType, step });
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;