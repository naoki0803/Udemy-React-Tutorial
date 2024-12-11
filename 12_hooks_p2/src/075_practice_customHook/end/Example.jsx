import { useCount } from './hooks';

// POINT カスタムフックの練習
const Example = () => {
  const { count, countUp } = useCount();
  return (
    <>
      <div>Counts: {count}</div>
      <button onClick={countUp}>Count Up!</button>
    </>
  );
};

export default Example;
