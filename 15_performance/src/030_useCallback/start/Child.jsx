/**
 * memo化をしても、props の onClick は親コンポーネントで定義されており、
 * 親コンポーネントが再レンダリングされる度に、関数が再定義され、
 * 元のonClickと中身は同じだが、メモリ空間の異なる別の関数として渡される。
 * 結果的に、memo化をしていても、props が変更されたとみなされて、再レンダリングが発生する。
 */
import { memo } from "react";

const ChildMemo = memo(({ countB, onClick }) => {
    console.log("%cChild render", "color: red;");

    return (
        <div className="child">
            <h2>子コンポーネント領域</h2>
            <div>
                <button onClick={onClick}>ボタンB</button>
                <span>
                    メモ化しているが、ボタンAをクリックすると再レンダリングされる
                </span>
            </div>
            <span>ボタンBクリック回数：{countB}</span>
        </div>
    );
});

const CallBackChildMemo = memo(({ countB, onClick }) => {
    console.log("%cCallBackChildMemo render", "color: blue;");

    return (
        <div className="child">
            <h2>子コンポーネント領域</h2>
            <div>
                <button onClick={onClick}>ボタンB</button>
                <span>
                    useCallback
                    を定義する事で、ボタンAをクリックしても再レンダリングされない
                </span>
            </div>
            <span>ボタンBクリック回数：{countB}</span>
        </div>
    );
});

export { ChildMemo, CallBackChildMemo };
