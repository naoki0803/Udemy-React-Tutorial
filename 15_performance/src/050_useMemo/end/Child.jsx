import { useMemo } from "react";

const Child = ({ countB, onClick }) => {
  console.log("%cChild render", "color: red;");

  return useMemo(() => {
    console.log("%cuseMemo", "color: green;");
    return (
      <div className="child">
        <h2>子コンポーネント領域</h2>
        <button onClick={onClick}>ボタンB</button>
        {/* <p>ボタンBクリック回数：{countB}</p> */}
      </div>
    );
  }, []);
};

export default Child;
