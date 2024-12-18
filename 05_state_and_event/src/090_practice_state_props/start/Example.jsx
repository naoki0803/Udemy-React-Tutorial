import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>練習問題</h3>

      <p>
        カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。
        Exampleコンポーネント内で現在のカウントの値を管理するstateを
        一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。
      </p>
      <CountResult title="カウント" count={count} />
      <CountUpdate setCount={setCount} />
    </>
  );
};

const CountResult = ({ title, count }) => {
  return (
    <h3>
      {title}: {count}
    </h3>
  );
};

const CountUpdate = ({ setCount }) => {
  // const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const countDown = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
