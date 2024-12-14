import Child from './components/Child';

const Example = () => {
  return (
    <>
      <Child color="" />
      <Child color="red" />
      <Child />{' '}
      {/* 属性を指定しないと、props でデフォルトとして定義していている内容が反映する */}
    </>
  );
};

export default Example;
