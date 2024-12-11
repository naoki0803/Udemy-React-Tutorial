import { useState } from "react";

const Counter = (props) => {
  const { originCount } = props;
  const [count, setCount] = useState(originCount);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  const countClear = () => {
    setCount(0);
  };

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
      </div>
    </div>
  );
};

export default Counter;
