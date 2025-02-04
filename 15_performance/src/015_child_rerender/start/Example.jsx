import { useState, memo } from "react";
import { MemoizedChild, NonMemoizedChild } from "./components/Child";
import "./Example.css";

const Example = () => {
    const [countA, setCountA] = useState(1);
    const [countB, setCountB] = useState(1);
    const clickHandlerA = () => setCountA((prev) => prev + 1);
    const clickHandlerB = () => setCountB((prev) => prev + 1);
    console.log("Parent Render");

    return (
        <>
            <div className="parent">
                <h3>親コンポーネント領域</h3>
                <div>
                    <button onClick={clickHandlerA}>ボタンA</button>
                    親のstateを更新
                </div>
                <div>
                    <button onClick={clickHandlerB}>ボタンB</button>
                    子のpropsにわたすstateを更新
                </div>
                <p>ボタンAクリック回数: {countA}</p>

                <MemoizedChild countB={countB} />
                <NonMemoizedChild countB={countB} />
            </div>
        </>
    );
};

export default Example;
