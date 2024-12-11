import React, { useCallback, useState } from "react";
import Child from "./Child";
import "./Example.css";

const Example = () => {
  console.log("Parent render");
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  // useCallbackで子コンポーネントに渡す関数を囲みます。
  // ※依存配列にcountBを渡さないように気を付けましょう。
  const clickHandler = useCallback(() => {
    setCountB(countB + 1);
  },[countB]);
  
  return (
    <div className="parent">
      <div>
        <h3>親コンポーネント領域</h3>
        <div>
          <button
            onClick={() => {
              setCountA((pre) => pre + 1);
            }}
          >
            ボタンA
          </button>
          <span>親のstateを更新</span>
        </div>
      </div>
      <div>
        <p>ボタンAクリック回数：{countA}</p>
      </div>
      <Child countB={countB} onClick={clickHandler}/>
    </div>
  );
};

export default Example;
