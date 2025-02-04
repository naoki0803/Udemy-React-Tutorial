import React, { useState } from "react";
import { ChildMemo, CallBackChildMemo } from "./Child";
import { useCallback } from "react";

const Example = () => {
    console.log("Parent render");

    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    /**
     * 子コンポーネント内で、memo化をしてイルが、props で渡している clickHandler は、
     * 親コンポーネント(本コンポーネント)で定義しており、
     * 親コンポーネント(本コンポーネント)が再レンダリングされる度に、関数が再定義され、
     * 元の clickHandler と中身は同じだが、メモリ空間の異なる別の関数として props で渡される。
     * 結果的に、memo化をしていても、props が変更されたとみなされて、再レンダリングが発生する。
     */
    const clickHandler = () => {
        setCountB((pre) => pre + 1);
    };

    const callbackClickHandler = useCallback(() => {
        setCountB((pre) => pre + 1);
    }, []);

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
            <ChildMemo countB={countB} onClick={clickHandler} />
            <CallBackChildMemo countB={countB} onClick={callbackClickHandler} />
        </div>
    );
};

export default Example;
