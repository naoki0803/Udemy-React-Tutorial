import { useSelector } from "react-redux";

const CounterResult = () => {
    // redux で唯一存在する グローバルな値として state が用意されるので、コールバック関数に state をそのまま渡すようにしている。
    const state = useSelector((state) => state);
    // const state = useCounter();
    return <h3>{state}</h3>;
};

export default CounterResult;
