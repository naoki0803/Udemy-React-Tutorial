import { useSelector } from "react-redux";
const CounterResult = () => {
    // const state = useCounter();

    // useSelector()で redux で定義したグローバルな state というオブジェクトを取得できる
    // 13_redux/start/src/020_actionCreator/store/index.js ここで定義している以下記述により、
    // state.counter でcounter.jsxで管理しているcountのstateを取得できる
    // const reducers = combineReducers({
    //     counter: reducer
    // });

    const state = useSelector((state) => {
        console.log("🚀 ~ state ~ state:", state); // {counter: 0}
        return state.counter;
    });

    // console.log(state);
    return <h3>{state}</h3>;
};

export default CounterResult;
