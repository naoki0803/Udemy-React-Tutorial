import { useState } from "react";

const Counter = (props) => {
  const { originCount } = props;
  const [count, setCount] = useState(originCount);
  const [step, setStep] = useState(1);

  const countUp = () => {
    setCount(count + step);
  };

  const countDown = () => {
    setCount(count - step);
  };

  const countClear = () => {
    setCount(0);
  };

  const changeStep = (e) => setStep(parseInt(e.target.value));

  return (
    <div>
      <h2>数字カウンターのテスト</h2>
      <div>
        <span>現在のカウント:{count}</span>
      </div>
      <div>
        <button onClick={countUp}>カウントアップ</button>
        <button onClick={countDown}>カウントダウン</button>
        <button onClick={countClear}>クリア</button>
        <label>
          <input type="number" value={step} onChange={changeStep} />
        </label>
      </div>
    </div>
  );
};

export default Counter;
