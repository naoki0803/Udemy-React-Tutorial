import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
    // setCountを複数回呼ぶ場合、関数を実行することでレンダリング前に即時的にcountの値を更新できる
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
