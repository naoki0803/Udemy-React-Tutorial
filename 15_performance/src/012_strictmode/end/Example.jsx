// POINT　StrictModeによる挙動の変化
import { useState, StrictMode } from "react";
import "./Example.css";

const StrictComp = () => {
  return (
    <StrictMode>
      <Example />
    </StrictMode>
  )
}

const Example = () => {
  console.log("render");
  
  const [countA, setCountA] = useState({
    val: 0
  });

  const obj1 = {val:0};
  const obj3 = {val:0};
  const obj2 = { ...obj1};
  const isSame = Object.is("",false);
  const isSameEqual = "" == false;
  console.log(isSameEqual);
  
  return (
    <div className="parent">
      <div>
        <h3>再レンダリング？</h3>
        <button
          onClick={() => {
            setCountA(prev => {
              const newState = { ...prev };
              // prev.val = 1;
              return newState;
            });
          }}
        >
          ボタンA
        </button>
      </div>
      <div>
        <p>ボタンAクリック回数：{countA.val}</p>
      </div>
    </div>
  );
};

export default StrictComp;
