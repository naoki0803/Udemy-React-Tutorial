import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    return setCount(count + 1);
  };

  const countDown = () => {
    return setCount(count - 1);
  };
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように+と-ボタンをクリックすると現在のカウント数が1ずつ増減する機能を実装してください。*useStateを用いてcountとsetCountを定義してください。
      </p>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
