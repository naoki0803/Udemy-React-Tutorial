/** useContextとは
 *
 * propsのバケツリレーをせず、任意のコンポーネントで定義した変数を任意のコンポーネントで利用することができる。
 *
 * 利用方法
 * <useContextの定義元  ※今回は Example.jsx>
 * 1-1. reactから createContext を import する。
 * 1-2. createContext()の引数にデフォルト値を指定して、変数を定義し export する。
 *
 * <useContextの利用先  ※今回は GrandChild.jsx>
 * 2-1. react から useContext を import する。
 * 2-2. 上記1-2で定義した変数を import する。
 * 2-3. useContext(2-2でimportした変数名)を実行すると、記述したコンポーネントで1-2で定義した変数を利用できる。
 *
 * 例:
 * const value = useContext(MyContext); // MyContextから値を取得
 */

import { useContext } from "react"; //2-1
import { MyContext } from "../Example"; //2-2

const GrandChild = () => {
    const value = useContext(MyContext); //2-3
    return (
        <div style={{ border: "1px solid black" }}>
            <h3>孫コンポーネント</h3>
            {value}
        </div>
    );
};
export default GrandChild;
