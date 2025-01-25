import { useState } from "react";
import useTimer from "./useTimer";

const Example = () => {
    const [isDisp, setIsDisp] = useState(true);

    return (
        <>
            {isDisp && <Timer />}
            <button onClick={() => setIsDisp((prev) => !prev)}>
                {isDisp ? "非表示" : "表示"}
            </button>
        </>
    );
};

const Timer = () => {
    // customHook として作成した useTimer() を実行して、
    // 戻り値のオブジェクトを分割代入で取得している
    const { time, isRunning, toggle, reset } = useTimer();

    return (
        <>
            <h3>
                <time>{time}</time>
                <span>秒経過</span>
            </h3>
            <div>
                <button onClick={toggle}>
                    {isRunning ? "一時停止" : "スタート"}
                </button>
                <button onClick={reset}>リセット</button>
            </div>
        </>
    );
};

export default Example;
