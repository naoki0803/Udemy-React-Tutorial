import { useSelector } from "react-redux";
const CounterResult = () => {
    const count = useSelector((state) => {
        console.log("🚀 ~ CounterResult ~ state:", state);
        return state.counter.count;
    });
    return <h3>{count}</h3>;
};

export default CounterResult;
