import { useState } from "react";
import "./Example.css";
import { StrictMode } from "react";

/** strict mode
 *  開発環境で非推奨のコードやバグを発見できるように、2回レンダリングが実行される機能
 *  npm run build で作成した本番環境用のsrcでは strict mode は適用されない
 *
 *  ## 実装方法
 *  1. import { StrictMode } from "react";
 *  2. StrictMode のコンポーネントで、適用したいコンポーネントを囲う
 *      ※一般的には<App />を囲い、すべてのコンポーネントに適用させる。
 *      <StrictMode>  
            <App />
        </StrictMode>
 */

const StrictComp = () => {
    return (
        <StrictMode>
            <Example />
        </StrictMode>
    );
};

const Example = () => {
    console.log("render");

    const [countA, setCountA] = useState({
        val: 0,
    });

    const obj1 = { val: 0 };
    const obj3 = { val: 0 };
    const obj2 = { ...obj1 };
    const isSame = Object.is("", false);
    const isSameEqual = "" == false;
    // console.log(isSameEqual);

    return (
        <div className="parent">
            <div>
                <h3>再レンダリング？</h3>
                <button
                    onClick={() => {
                        setCountA((prev) => {
                            const newState = { ...prev };
                            // prev.val = 1;
                            return newState;
                        });
                    }}
                >
                    ボタンA
                </button>
            </div>
            <div>
                <p>ボタンAクリック回数：{countA.val}</p>
            </div>
        </div>
    );
};

export default StrictComp;
