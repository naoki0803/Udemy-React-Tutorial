import axios from "axios";
import { useEffect } from "react";

/** useEffect 内で async / await を利用する場合
 *  useEffect のコールバック関数に直接 async を付与する事ができない為、
 *  コールバック関数無いの処理に、関数を定義して、その関数に async を付与し、
 *  useEffect の処理内でその関数を呼び出す事で、async / await を利用する事ができる
 */
const Example = () => {
    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get(" http://localhost:3003/user");
            console.log(res.data);
        };
        getUser();
    });

    return <></>;
};

// async / await を利用せず、以下のように、then でつなげて記述することは可能
export const ExampleTHen = () => {
    useEffect(() => {
        // then 内のコールバック関数に取得結果がわたってくるので、引数には res を記述している。
        axios.get(" http://localhost:3003/user").then((res) => {
            console.log(res.data);
        });
    });
    return <></>;
};

export default Example;
