import Child from './components/Child';

const Example = () => {
  const hello = (arg) => {
    return `Hello ${arg}`;
  };

  const o = {
    color: 'red',
    num: 123,
  };

  return (
    <>
      <Child
        // 外でobjectとして定義して、スプレッド公文で代入する事も可能
        {...o}
        // color="red"
        // num={12345}
        fn={hello}
        bool
        obj={{ name: 'Taro', age: 33 }}
      />
      {/* <Child color="" /> */}
      {/* <Child color="red" /> */}
      {/* <Child num={12345} fn={hello} bool /> */}
      {/* 属性を指定しないと、props でデフォルトとして定義していている内容が反映する */}
    </>
  );
};

export default Example;
