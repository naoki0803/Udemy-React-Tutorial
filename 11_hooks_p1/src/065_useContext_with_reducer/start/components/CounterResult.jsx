import { useCounter } from "../context/CounterContext";

const CounterResult = () => {
    const count = useCounter();
    return <h3>{count}</h3>;
};

export default CounterResult;
