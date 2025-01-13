/** useState の値を useContext で管理する
 *
 *
 * useContext の挙動
 * 1. useContext() が実行されると、親コンポーネントを順番に遡る
 * 2-1. Provider が見つかった場合、 Provider.value の値を取得する
 * 2-2. Provider が見つからなかった場合、 createContext(initialValue) の初期値を取得する
 *
 * useContext の実装 (Provider を利用する方法)
 * <定義元>
 *  1-1. createContext()で定義した <変数(オブジェクト).Provider> で、利用先のコンポーネントを囲む
 *  1-2. 1-1 で定義した<変数(オブジェクト).Provider value={参照したいstate}> と記述する
 *  ※今回の場合、<MyContext.Provider value={[value, setValue]}> と記述
 *
 * <利用先>
 *  2-1. useContext() で利用したいcontextを取得し、実装する
 *  ※今回は、以下実装をしている
 *    1. <OtherChild />で setState の更新関数を読み込み、+ ボタンクリック時に state を更新する実装
 *    2･ <GrandChild />で 上記で更新される state を実装
 */

import { createContext, useState } from "react";
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext();

const Example = () => {
    // state を useContext で管理する場合、state の定義元と、
    // 利用先をいずれも記述しているコンポーネントで useState() を実装する必要がある。
    const [value, setValue] = useState(0);
    return (
        <>
            <MyContext.Provider value={[value, setValue]}>
                <Child />
                <OtherChild />
            </MyContext.Provider>
        </>
    );
};

export default Example;
