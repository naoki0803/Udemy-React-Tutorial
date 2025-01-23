import { useEffect, useState, useLayoutEffect } from "react";

const Example = () => {
    const [isDisp, setIsDisp] = useState(true);
    const [isStop, setIsStop] = useState(true);
    const [time, setTime] = useState(0);

    // 初期状態は Timerが停止している
    // スタートをクリックすると、Timer がスタートする
    // リセットをクリックすると、Timer の値が0になる

    const handleReset = () => {
        window.localStorage.setItem("time-key", setTime(0));
    };

    const handleStart = () => {
        setIsStop((prev) => !prev);
    };

    return (
        <>
            {isDisp && <Timer state={[time, setTime]} isStop={isStop} />}
            {isDisp && (
                <button onClick={handleStart}>
                    {isStop ? "スタート" : "一時停止"}
                </button>
            )}
            {isDisp && <button onClick={handleReset}>リセット</button>}
            <button
                style={{ display: "block" }}
                onClick={() => setIsDisp((prev) => !prev)}
            >
                {isDisp ? "非表示" : "表示"}
            </button>
        </>
    );
};

const Timer = ({ state, isStop }) => {
    // debugger;
    const [time, setTime] = state;

    useEffect(() => {
        // console.log('init');
        let intervalId = null;
        intervalId = window.setInterval(() => {
            // console.log("interval running");
            if (!isStop) {
                setTime((prev) => prev + 1);
            }
        }, 1000);
        return () => {
            window.clearInterval(intervalId);
            // console.log('end');
        };
    }, [isStop]);

    useEffect(() => {
        // console.log('updated');

        document.title = "counter:" + time;
        window.localStorage.setItem("time-key", time);

        return () => {
            // debugger
            // console.log('updated end');
        };
    }, [time]);

    useLayoutEffect(() => {
        const _time = parseInt(window.localStorage.getItem("time-key"));
        if (!isNaN(_time)) {
            setTime(_time);
        }
    }, []);

    return (
        <h3>
            <time>{time}</time>
            <span>秒経過</span>
        </h3>
    );
};

export default Example;
