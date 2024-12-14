// POINT propsの流れは一方通行
// 子コンポーネントのHelloで定義したnameを兄弟のByeにわたす事は基本的にできない
// POINT propsは読み取り専用

import Bye from './components/Bye';
import Hello from './components/Hello';

const name = 'Taro';

const Example = () => {
  return (
    <>
      <Hello name={name} />
      <Bye name={name} />
    </>
  );
};

export default Example;
