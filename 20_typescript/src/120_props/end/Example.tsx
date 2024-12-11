// POINT Reactコンポーネントのpropsの型定義を学ぼう
import Hello, { Btn } from "./Hello";

const Example: React.FC = () => {
  return (
    <>
      <Btn fn={(text) => console.log(`Hello ${text}`)} />
      <Hello text="TypeScript">Children</Hello>
    </>
  );
};

export default Example;
