import React from "react";

const Child = React.memo(({ countB, onClick }) => {
  console.log("%cChild render", "color: red;");

  return (
    <div className="child">
      <h2>子コンポーネント領域</h2>
      <button onClick={onClick}>ボタンB</button>
      <p>ボタンBクリック回数：{countB}</p>
    </div>
  );
});

export default Child;
