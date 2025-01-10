/**関数型プログラミングの観点でreactをどのように記述するか */

// 関数型（純粋関数）とは
// POINT 純粋関数は数式のようなもので、fn(決まった引数) に対して、 決まった戻り値を返す
// 上記を満たす為に以下3つを実行する
//  1. 関数外の状態（データ）は参照・変更しない。
//  2. 関数外に影響を及ぼさない。
//  3. 引数で渡された値を変更しない。

import { useState } from "react";

let value = 0;

const Example = () => {
    const [state, setState] = useState(0);
    const increment = () => {
        setState(state + 1);
    };

    // React では以下のような記述はNG
    let sumValue = value * 2; // 1. 関数外の状態（データ）は参照・変更しない。
    window.alert(sumValue); // 2. 関数外に影響を及ぼさない。

    return (
        <>
            <button onClick={increment}>+</button>
            <h3>{state}</h3>
            {/* <p>{sumValue}</p> */}
        </>
    );
};

export default Example;
