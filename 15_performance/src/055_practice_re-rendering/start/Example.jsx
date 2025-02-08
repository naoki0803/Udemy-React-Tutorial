import React, { useCallback, useState } from "react";
import Child from "./Child";
import "./Example.css";

/**
 * React.memo
 * 親コンポーネントが再レンダリングがされた際に、子コンポーネントも再レンダリングされるが、
 * React.memo()の引数に渡した子コンポーネントの props でわたってきている値が同一であれば、
 * 再レンダリングをスキップする事ができる
 *
 * useCallback
 * 親コンポーネントで定義した関数を、React.memoでラップした子コンポーネントに props で渡している場合、
 * 親コンポーネントが再レンダリングされたタイミングで、関数が再レンダリングされ、
 * 中身が同一だが、参照先の異なる別の関数(オブジェクト)として定義される為、
 * React.memoでは、同一の値と認識されず、再レンダリングが発生してしまう。
 *
 * 上記のような場合に、親コンポーネントでuseCallback(処理,[依存配列])として関数を定義することで、
 * 親コンポーネントが再レンダリングされても、依存配列で指定した値が更新されない限り、
 * useCallbackは再レンダリングされない。
 * また、React上に保存している同一の関数が props で渡される事で、
 * 子コンポーネントでは React.memo により、再レンダリングがスキップされる。
 */

const Example = () => {
    console.log("Parent render");
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    // const clickHandler = useCallback(() => {
    //     setCountB(countB + 1);
    // }, [countB]);

    // prevとして定義した場合も、依存配列
    const clickHandler = useCallback(() => {
        setCountB((prev) => prev + 1);
    }, [countB]);

    return (
        <>
            <h3>練習問題</h3>
            <p>
                useCallbackとReact.memoを使って不要な再レンダリングを防ぐコードに変更してください。
            </p>
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
                <Child countB={countB} onClick={clickHandler} />
            </div>
        </>
    );
};

export default Example;
