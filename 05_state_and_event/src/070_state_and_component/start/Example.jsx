import { useState } from "react";

const Example = () => {
    const [toggle, setToggle] = useState(true);
    const toggleComponent = () => {
        setToggle((prev) => !prev);
    };

    const [toggleAddKey, setToggleAddKey] = useState(true);
    const toggleComponentAddKey = () => {
        setToggleAddKey((prev) => !prev);
    };

    return (
        <>
            <h3>Component の属性に key が未設定</h3>
            <p>ボタンを押してもカウントの値が引き継がれる</p>
            <button onClick={toggleComponent}>toggle</button>
            {/* ツリー構造の同一の場所にある場合、かつ属性に key が無い場合は、stateの値が引き継がれる
          つまり、toggleが切り替わっても、countの値だけは切り替わらない。
      */}
            {toggle ? (
                <Count title="A コンポーネント" />
            ) : (
                <Count title="B コンポーネント" />
            )}

            <hr />
            <h3>Component の属性に key を設定</h3>
            <p>ボタンを押すとカウントの値はリセットされる</p>
            <button onClick={toggleComponentAddKey}>toggle</button>
            {/* ツリー構造の同一の場所にある場合、かつ属性に key が無い場合は、stateの値が引き継がれる
          つまり、toggleが切り替わっても、countの値だけは切り替わらない。
      */}
            {toggleAddKey ? (
                <Count key="A" title="A コンポーネント" />
            ) : (
                <Count key="B" title="B コンポーネント" />
            )}
        </>
    );
};

const Count = ({ title }) => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount((prevState) => prevState + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };
    return (
        <>
            <h3>
                {title}カウント: {count}
            </h3>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    );
};

export default Example;
