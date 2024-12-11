// POINT Reactと純粋関数
let value = 0;

const Child = () => {
  value++;
  return <div>{value}</div>
}

const ChildPure = ({ value }) => {
  return <div>{value}</div>
}

const Example = () => {
  let value = 0;

  return (
    <>
      <Child/>
      <Child/>
      <Child/>
      <ChildPure value={++value} />
      <ChildPure value={++value} />
      <ChildPure value={++value} />
    </>
  );
};

export default Example;
