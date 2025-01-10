/** 純粋関数
 *     // 関数型（純粋関数）
    // POINT 純粋関数は数式のようなもので、fn(決まった引数) に対して、 決まった戻り値を返す
    // 上記を満たす為に以下3つを実行する
    //  1. 関数外の状態（データ）は参照・変更しない。
    //  2. 関数外に影響を及ぼさない。
    //  3. 引数で渡された値を変更しない。

 */

let value = 0; // 関数外で定義した変数を利用しない

// 外部で定義したvalueを参照しており、変数が変更された場合に結果が変わる為、純粋関数ではない。
const Child = () => {
    value++; //関数外で定義したvalueを利用しており純粋ではない
    return (
        <>
            <div>{value}</div>
        </>
    );
};

// 同じ引数であれば同じ結果になるため、純粋関数
const ChildPure = ({ value }) => {
    return (
        <>
            <div>{value}</div>
        </>
    );
};
const Example = () => {
    let value = 0;
    return (
        <>
            {/* props(引数)は無いが、結果がそれぞれ変わる */}
            <Child /> {/* 結果が 1 */}
            <Child /> {/* 結果が 2 */}
            <Child /> {/* 結果が 3 */}
            {/* 渡されるprops(引数)によって結果が変わらない */}
            <ChildPure value={++value} /> {/* 結果が 1 */}
            <ChildPure value={++value} /> {/* 結果が 2 */}
            <ChildPure value={++value} /> {/* 結果が 3 */}
        </>
    );
};

export default Example;
