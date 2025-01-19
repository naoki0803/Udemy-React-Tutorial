import { useEffect } from "react";
import { useState } from "react";

/** useEffectとは
 * useEffectは、Reactコンポーネントのライフサイクルに基づいて副作用を管理するためのフックです。
 * 例えば、データの取得、DOMの操作、タイマーの設定などに使用されます。
 *
 * useEffectは、コンポーネントがマウントされたときや更新されたときに実行され、
 * 第二引数に依存配列を指定することで、実行タイミングを制御できます。
 * 第二引数が空の配列の場合、コンポーネントがマウントされたときにのみ実行されます。
 *
 */

const Example = () => {
    const [time, setTime] = useState(0);

    // 以下の実装だと、setTimeによって、コンポーネントがレンダリングされるたびに、
    // 新しいsetIntervalが作成されてしまい、正しい数値を取ることができない。
    // window.setInterval(() => {
    //     setTime((prev) => prev + 1);
    // }, 1000);

    // useEffectを利用した実装
    // 実装時の注意点: 第二引数にからの配列を定義する
    useEffect(() => {
        window.setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
    }, []);

    return (
        <>
            <h3>
                <time>{time}</time>
                <span>秒経過</span>
            </h3>
        </>
    );
};

export default Example;
