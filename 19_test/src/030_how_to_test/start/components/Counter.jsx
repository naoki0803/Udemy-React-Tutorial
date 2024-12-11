import { useState } from "react";

const Counter = (props) => {
  const { originCount } = props;
  const [count, setCount] = useState(originCount);

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>カウントアップのテスト</h2>
      <div>
        <span>現在のカウント:{count}</span>
      </div>
      <div>
        <button onClick={countUp}>カウントアップ</button>
      </div>
    </div>
  );
};

export default Counter;
