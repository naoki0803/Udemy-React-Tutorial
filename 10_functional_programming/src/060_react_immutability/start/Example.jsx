import { useState } from "react";

const Child = (props) => {
  return (
    <>
      <span>{props.state.value}</span>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state}/>
      </div>
    </>
  );
};

export default Example;
