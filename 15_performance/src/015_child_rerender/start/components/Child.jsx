import { memo } from "react";

// memo化をすることで、props で渡された値が更新されない限り、
// 再レンダリングを発生させず、パフォーマンスを最適化できる
const MemoizedChild = memo(({ countB }) => {
    console.log("%cMemoizedChild render", "color: red;");
    return (
        <>
            <div className="child">
                <h3>メモ化した子コンポーネント領域</h3>
                <p>ボタンAをクリックしたときに再レンダリングされる</p>
                <p>ボタンBクリック回数: {countB}</p>
            </div>
        </>
    );
});

// メモ化をしていないと、ボタンAをクリック時の処理で、
// NonMemoizedChild で利用している countB は更新され無いが、
// NonMemoizedChild が再レンダリングされてしまう。
const NonMemoizedChild = ({ countB }) => {
    console.log("%cNonMemoizedChild render", "color: blue;");
    return (
        <>
            <div className="child">
                <h3>メモ化していない子コンポーネント領域</h3>
                <p>ボタンAをクリックしたときに再レンダリングされない</p>
                <p>ボタンBクリック回数: {countB}</p>
            </div>
        </>
    );
};

export { MemoizedChild, NonMemoizedChild };
