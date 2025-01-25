import { useState, useEffect, useLayoutEffect } from "react";

/**
 * CustomHook として useTimer を定義
 * CustomHook として定義すると、呼び出し先の Top Level に、
 * useState などの ReactHooks を記述せずに利用が可能になる。
 *
 * また、CustomHook の戻り値として、呼び出し先で利用する
 * 変数や関数を、オブジェクトとして戻してあげる事で、
 * 呼び出し先で利用する事ができる。
 */

const useTimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        // console.log('init');
        let intervalId = null;

        if (isRunning) {
            // console.log('timer start');

            intervalId = window.setInterval(() => {
                // console.log('interval running');
                setTime((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            window.clearInterval(intervalId);
            // console.log('end');
        };
    }, [isRunning]);

    useEffect(() => {
        // // console.log('updated');

        document.title = "counter:" + time;
        window.localStorage.setItem("time-key", time);

        return () => {
            // debugger
            // // console.log('updated end');
        };
    }, [time]);

    useLayoutEffect(() => {
        const _time = parseInt(window.localStorage.getItem("time-key"));
        if (!isNaN(_time)) {
            setTime(_time);
        }
    }, []);

    const toggle = () => {
        setIsRunning((prev) => !prev);
    };

    const reset = () => {
        setTime(0);
        setIsRunning(false);
    };

    return { time, isRunning, toggle, reset };
};

export default useTimer;
