// POINT TypeScriptでは型推論(type inference)によって型をある程度推定してくれる機能がある
// 基本的には、明らかに型が分かるような場合の型定義は型推論に任せるようにする

const Example = () => {
  let str = 'hello';
  let obj = { name: 'Taro', age: 10 };

  const bye = 'bye';
  const num = 123;
};

export default Example;
