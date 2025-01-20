import { useEffect, useState } from "react";

/** 依存配列について
 * 依存配列に含めたstateが更新されると、
 * useEffect内のコールバック関数が再実行される
 */

const Example = () => {
    const [time, setTime] = useState(0);
    const upDateTime = () => {
        console.log("upDateTime is called");
        window.setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
    };

    // 依存配列が空なので、初回レンダリング時のみ upDateTime が実行される
    useEffect(() => {
        upDateTime();
    }, []);

    // 依存配列に time が入っているので、初回事項された upDateTime 内で1秒毎に time が更新されるたびに実行される
    useEffect(() => {
        console.log("useEffect upDate");
    }, [time]);

    // その他のサンプルコード
    useEffect(() => {
        document.title = "counter:" + time;
        window.localStorage.setItem("time-key", time);
    }, [time]);

    // useEffect 利用時の注意点
    // useEffect 内で更新関数を呼ぶと、無限ループになるので実施しない。
    useEffect(() => {
        // setTime((prev) => prev + 1);
    }, [time]);

    return (
        <h3>
            <time>{time}</time>
            <span>秒経過</span>
        </h3>
    );
};

export default Example;
