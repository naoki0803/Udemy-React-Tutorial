/**
 * useLayoutEffect とは
 * useEffect よりも先地実行される特性を持った Hooks
 * 画面表示の際に、stateの更新タイミングにより、
 * 一瞬stateの初期値が表示されるなどのチラツキが発生した際に、useLayoutEffectを利用する
 * ※実行順以外は、useEffect の挙動と同じ
 *
 * useEffect 実行順
 * state 更新 → 画面描画 → useEffect
 *
 * useLayoutEffect 実行順
 * state 更新 → useLayoutEffect → 画面描画
 */

import { useEffect, useLayoutEffect, useState } from "react";
import Random from "./Random";

const Example = () => {
    const [isDisp, setIsDisp] = useState(true);

    return (
        <>
            {isDisp && <Timer />}
            {isDisp && <LayoutTimer />}
            <button
                style={{ display: "block" }}
                onClick={() => setIsDisp((prev) => !prev)}
            >
                トグル
            </button>

            <article>
                useEffectの場合 - 上から順番に読み込まれるので、以下の getItem
                を実行前に、useState(0)で値が初期化されてしまい、 結果 _time
                の値は0にjなってしまう。 const _time =
                parseInt(window.localStorage.getItem("time-key"));
                useLayoutEffectの場合 -
                画面がレンダリングされる前に処理が実行されるので、以下の getItem
                が先に実行され、 結果 _time の値を localStorage
                に格納された値を取得することができる。 const _time =
                parseInt(window.localStorage.getItem("time-key"));
                つまり、画面更新をしても初期値ではなく、継続して値を利用が可能になる。
            </article>

            <Random />
        </>
    );
};

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        // console.log('init');
        let intervalId = null;
        intervalId = window.setInterval(() => {
            console.log("interval called");
            setTime((prev) => prev + 1);
        }, 1000);
        return () => {
            window.clearInterval(intervalId);
            // console.log('end');
        };
    }, []);
    useEffect(() => {
        // console.log('updated');

        document.title = "counter:" + time;
        window.localStorage.setItem("time-key", time);

        return () => {
            // console.log('updated end');
        };
    }, [time]);

    useEffect(() => {
        const _time = parseInt(window.localStorage.getItem("time-key"));
        if (!isNaN(_time)) {
            setTime(_time);
        }
    }, []);

    return (
        <>
            <h3> useEffectのtime</h3>
            <time>{time}</time>
            <span>秒経過</span>
        </>
    );
};

const LayoutTimer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        // console.log('init');
        let intervalId = null;
        intervalId = window.setInterval(() => {
            console.log("interval called");
            setTime((prev) => prev + 1);
        }, 1000);
        return () => {
            window.clearInterval(intervalId);
            // console.log('end');
        };
    }, []);
    useEffect(() => {
        // console.log('updated');

        document.title = "counter:" + time;
        window.localStorage.setItem("time-key", time);

        return () => {
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
        <>
            <h3> useLayoutEffectのtime</h3>
            <time>{time}</time>
            <span>秒経過</span>
        </>
    );
};

export default Example;
