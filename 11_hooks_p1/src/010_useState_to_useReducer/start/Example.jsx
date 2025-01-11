/** 
 * 
 * useStateとuseReducerは、どちらもReactで状態管理を行うためのフックです。
 * useStateはシンプルなカウンターやトグルのような単純な状態に適しており、
 * useReducerはフォームの入力管理や複数の状態を持つコンポーネントに適しています。

 * useState
 * 用途: 単純な状態管理に適しています。
 * 使い方:
 * const [state, setState] = useState(initialState);
 * stateは現在の状態を表し、setStateは状態を更新するための関数です。
 * 状態を更新する際には、setState(newState)のように新しい状態を直接指定します。

* useReducer
 * 用途: 複雑な状態管理に適しています。特に、状態の更新が複数の異なるアクションに基づいて行われる場合に便利です。
 * 使い方:
 * const [state, dispatch] = useReducer(reducer, initialState);
 * stateは現在の状態を表し、dispatchは状態を更新するための関数です。
 * 状態を更新する際には、dispatch({ type: 'ACTION_TYPE', payload: value })のようにアクションオブジェクトを渡します。
 * reducer関数は、第一引数に｢現在の状態｣、第二引数にdispatchの引数で渡された｢アクションオブジェクト｣を受け取り、
 * case文を利用して、処理を記述していきます。
 */

import { useReducer } from "react";
import { useState } from "react";

const Example = () => {
    const [state, setState] = useState(0);
    const countUp = () => setState((prev) => ++prev);

    const [rstate, dispatch] = useReducer((prev, { type, step }) => {
        switch (type) {
            case "+":
                return prev + step;
            case "-":
                return prev - step;
            default:
                throw new Error("不明なactionです");
        }

        // if (action === "+") {
        //       return ++prev;
        //   } else if (action === "-") {
        //       return --prev;
        //   }
    }, 0);

    const rCountUp = () => {
        dispatch({ type: "+", step: 2 });
    };
    const rCountDown = () => {
        dispatch({ type: "-", step: 3 });
    };
    return (
        <>
            <h2>useStatの記述</h2>
            <h3>{state}</h3>
            <button onClick={countUp}>+</button>

            <h2>useReducerの記述</h2>
            <h3>{rstate}</h3>
            <button onClick={rCountUp}>+</button>
            <button onClick={rCountDown}>-</button>
        </>
    );
};

export default Example;
