import { useState } from "react";

const Child = () => {
    console.log("childRender");
    const [count, setCount] = useState(0);
    const clickHandler = (prev) => {
        // setCount(0); // 再レンダリングされない: 初期値と同じ値の為
        setCount(1); // 再レンダリングがされる: 初期値と異なる `1` の為再レンダリングされる。
        // また、さらに1回、再々レンダリングがされ、それ以降は再レンダリングされない。
    };
    return (
        <>
            <h3>setCount(1) を実行すると</h3>
            <p>
                再レンダリングがされる: 初期値と異なる `1`
                の為再レンダリングされる。 //
                また、さらに1回、再々レンダリングがされ、それ以降は再レンダリングされない。
            </p>

            <button onClick={clickHandler}>ボタンA</button>
            <p>ボタンクリック回数:{count}</p>
        </>
    );
};

const Example = () => {
    console.log("render");
    const [count, setCount] = useState({ value: 0 });
    const clickHandler = (prev) => {
        // setCount(0); // 再レンダリングされない: 初期値と同じ値の為
        // setCount(1); // 再レンダリングがされる: 初期値と異なる `1` の為再レンダリングされる。
        //                 また、さらに1回、再々レンダリングがされ、それ以降は再レンダリングされない。

        const obj1 = { value: 1 };
        const obj2 = (prev) => ({ ...prev, value: prev.value + 1 });
        const obj3 = count;

        // 異なるobj
        // setCount(obj1);
        // const count_obj1 = Object.is(count, obj1);
        // console.log("🚀 ~ clickHandler ~ count_obj1:", count_obj1);

        // スプレット構文で異なるobj
        setCount(obj2);
        const count_obj2 = Object.is(count, obj2); // false
        console.log("🚀 ~ clickHandler ~ count_obj2:", count_obj2);

        // 同一obj
        // setCount(obj3);
        // const count_obj3 = Object.is(count, obj3);
        // console.log("🚀 ~ clickHandler ~ count_obj3:", count_obj3);
    };
    return (
        <>
            <Child />
            <h3>再レンダリングが発生する条件</h3>
            <p>stateの値が変更された時</p>
            <p>Object.isによって変更は検知される</p>

            <button onClick={clickHandler}>ボタンA</button>
            <p>ボタンクリック回数:{count.value}</p>
        </>
    );
};

export default Example;
