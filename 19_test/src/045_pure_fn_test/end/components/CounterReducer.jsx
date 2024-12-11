import { useReducer } from "react";
import { counterReducer } from "../reducer/counterReducer"

const Counter = (props) => {
  
  const [state, dispatch] = useReducer(counterReducer, { count: props.originCount, step: 1 });
  const countUp = () => {
    dispatch({ type: "up" });
  };

  const countDown = () => {
    dispatch({ type: "down" });
  };

  const countClear = () => {
    dispatch({ type: "clear" });
  };

  const changeStep = (e) =>
    dispatch({ type: "changeStep", payload: e.target.value });

  return (
    <div>
      <h2>数字カウンターのテスト</h2>
      <div>
        <span>現在のカウント:{state.count}</span>
      </div>
      <div>
        <button onClick={countUp}>カウントアップ</button>
        <button onClick={countDown}>カウントダウン</button>
        <button onClick={countClear}>クリア</button>
        <div>
          <label>
            step:
            <input type="number" value={state.step} onChange={changeStep} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Counter;
