import React, { useState, useEffect } from "react";

const EffectDemo = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((preCount) => preCount + 1);
  };

  useEffect(() => {
    if (count === 0) {
      console.log("useEffect:マウント済み");
    } else {
      console.log("useEffect:更新済み");
    }
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("useEffect:アンマウント済み");
    };
  }, []);

  return (
    <div>
      <p>カウント数：{count}</p>
      <button onClick={add}>+1</button>
    </div>
  );
};
export default EffectDemo;
