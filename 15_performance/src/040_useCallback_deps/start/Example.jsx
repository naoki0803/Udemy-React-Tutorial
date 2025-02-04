import React, { useCallback, useState } from "react";
import Child from "./Child";

const Example = () => {
    console.log("Parent render");

    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    // useCallback は依存配列に記述した値が更新されると、再レンダリングが発生する
    const clickHandler = useCallback(() => {
        // // setCountB((pre) => pre + 1);

        /**
         *  上記のコメントアウトしている、更新関数にコールバック関数を定義した場合、現在の値を取得してくれるが、
         * 以下のような state の値を直接変更した場合、再レンダリングがされないと値が増加しないので、
         * 依存配列に state を記述することで、Count を正しく表示する事ができる
         */
        setCountB(countB + 1);
    }, [countB]);

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
            <Child countB={countB} onClick={clickHandler} />
        </div>
    );
};

export default Example;
