const Example = () => {
    // 関数型（純粋関数）
    // POINT 純粋関数は数式のようなもので、fn(決まった引数) に対して、 決まった戻り値を返す
    // 上記を満たす為に以下3つを実行する
    //  1. 関数外の状態（データ）は参照・変更しない。
    //  2. 関数外に影響を及ぼさない。
    //  3. 引数で渡された値を変更しない。

    // 不変性()
    // 上記の要件を満たさない操作は「副作用」と呼ぶ。

    const val1 = 1;
    const val2 = 2;
    let result;

    //純粋関数の例
    const add = (val1, val2) => {
        return val1 + val2;
    };

    // 純粋関数でない例1 : 1. 関数外の状態（データ）は参照・変更しない。
    const add_1 = (val1) => {
        return val1 + val2; //val2は関数外の状態を参照している
    };

    // 純粋関数でない例1 : 2. 関数外に影響を及ぼさない。
    const add_2 = (val1, val2) => {
        result = val1 + val2; //関数外で定義されている result の値を変更している
        return result;
    };

    return (
        <>
            <h3>純粋関数</h3>
            <p>fn(決まった引数) には 決まった戻り値 を返す</p>

            <div>純粋関数: {add(val1, val2)}</div>
            <div>純粋関数ではない: {add_1(val1)}</div>
            <div>純粋関数ではない: {add_2(val1, val2)}</div>
        </>
    );
};

export default Example;
