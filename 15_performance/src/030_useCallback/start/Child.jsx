import { memo } from "react";

const ChildMemo = memo(({ countB, onClick }) => {
  console.log("%cChild render", "color: red;");

  return (
    <div className="child">
      <h2>子コンポーネント領域</h2>
      <div>
        <button
          onClick={onClick}
        >
          ボタンB
        </button>
        <span>子のpropsに渡すstateを更新</span>
      </div>
      <span>ボタンBクリック回数：{countB}</span>
    </div>
  );
});

export default ChildMemo;