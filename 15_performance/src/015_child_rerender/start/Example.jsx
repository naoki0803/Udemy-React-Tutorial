import { useState, useMemo } from "react";

const Example = () => {
    const [countB, setCountB] = useState(1);
    const [countA, setCountA] = useState(1);
    return (
        <>
            {/* <h3>再レンダリング</h3>
            <p>
                親コンポーネントが再レンダリングされると子コンポーネントも再レンダリングされる
            </p>
            <p>コンソールを要確認</p> */}
            <Parent stateA={[countA, setCountA]} stateB={[countB, setCountB]} />
            <Child countB={countB} />
        </>
    );
};

const Parent = ({ stateA, stateB }) => {
    console.log("Parent Render");
    const [countA, setCountA] = stateA;
    const [countB, setCountB] = stateB;

    const clickHandlerA = () => {
        setCountA((prev) => prev + 1);
    };

    const clickHandlerB = () => {
        setCountB((prev) => prev + 1);
    };

    return (
        <>
            <h3>親コンポーネント領域</h3>
            <div>
                <button onClick={clickHandlerA}>ボタンA</button>
                親のstateを更新
            </div>
            <div>
                <button onClick={clickHandlerB}>ボタンB</button>
                子のpropsにわたすstateを更新
            </div>
            <p>ボタンAクリック回数: {countA}</p>
        </>
    );
};

const Child = ({ countB }) => {
    console.log("Child Render");
    return (
        <>
            <h3>子コンポーネント領域</h3>
            <p>ボタンBクリック回数: {countB}</p>
        </>
    );
};
export default Example;
