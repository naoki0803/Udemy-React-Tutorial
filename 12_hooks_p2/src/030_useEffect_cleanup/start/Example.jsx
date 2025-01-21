import { useEffect, useState } from "react";

/** useEffect の return について
 *  useEffect の return に設定した関数は、以下タイミングで実施される
 *    1. useEffect が記載されているコンポーネントが削除時
 *    2. 依存配列で指定した値が更新されと時
 *
 */

const Example = () => {
    const [isDisplay, setIsDisplay] = useState(true);
    return (
        <>
            {isDisplay && <Timer />}
            <button onClick={() => setIsDisplay((prev) => !prev)}>
                トグル
            </button>
        </>
    );
};

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        // console.log("init");
        let intervalId = null;
        intervalId = window.setInterval(() => {
            console.log("interval called");
            setTime((prev) => prev + 1);
        }, 1000);

        return () => {
            // コンポーネントが削除されたタイミングで intervalId を clear している
            // この処理が無いと、コンポーネントが削除された後に、裏で setInterval が動き続けてしまう。
            window.clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        // console.log("updated");
        document.title = "counter:" + time;
        window.localStorage.setItem("time-key-end", time);

        return () => {
            // debugger;
            // console.log("updated end");
        };
    }, [time]);

    return (
        <h3>
            <time>{time}</time>
            <span>秒経過</span>
        </h3>
    );
};

export default Example;
