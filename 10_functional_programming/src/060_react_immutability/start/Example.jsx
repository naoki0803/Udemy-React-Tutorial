// 関数型（純粋関数）とは
//  1. fn(決まった引数) に対して、 決まった戻り値を返す
//  2. 関数外の状態（データ）は参照・変更しない。
//  3. 関数外に影響を及ぼさない。
//  4. 引数で渡された値を変更しない。

import { useState } from "react";

const Child = ({ state, setState }) => {
    // state = { value: 1 }; //  4. 引数で渡された値を変更しない。

    // 上記のようにstateの値を変更したい場合は、setStateをpropsで受取り変更する
    // setState({ value: 1 }); // 実際にはレンダリングの無限ループになるので、stateの更新時はクリックイベントなどで実装する

    const increment = () => {
        setState((prev) => {
            // prev.value += 1;  // 4. 引数で渡された値を変更しない。
            // return prev;
            const newState = { value: prev.value + 1 }; // 新しいObjectを作成し、それをreturnしている。
            return newState;
        });
    };
    return (
        <>
            <span>{state.value}</span>
            <button onClick={increment}>+</button>
        </>
    );
};

const Example = () => {
    const [state, setState] = useState({ value: 0 });

    return (
        <>
            <div>
                <Child state={state} setState={setState} />
            </div>
        </>
    );
};

export default Example;
