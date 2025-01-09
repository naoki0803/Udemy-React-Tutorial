const Example = () => {
    // 関数型（純粋関数）
    // POINT 純粋関数は数式のようなもので、fn(決まった引数) に対して、 決まった戻り値を返す
    // 上記を満たす為に以下3つを実行する
    //  1. 関数外の状態（データ）は参照・変更しない。
    //  2. 関数外に影響を及ぼさない。
    //  3. 引数で渡された値を変更しない。

    // 不変性()
    // 上記の要件を満たさない操作は「副作用」と呼ぶ。

    // POINT 引数で渡された値を変更しない。（Immutabilityの保持）
    const useImmutabilityDoubleNum = { val: 2 };
    const immutabilityDouble = (num) => {
        const newNum = {}; //新しいnweNumを定義することで、Immutabilityが保持される。
        newNum.val = num.val * 2; //新しいnweNumを定義することで、Immutabilityが保持される。
        // const newNum = { val: num.val * 2 }; // この1行で記述しても同じ
        return newNum;
    };
    const newNum1 = immutabilityDouble(useImmutabilityDoubleNum);
    console.log(useImmutabilityDoubleNum.val === newNum1.val); // Immutabilityが保持されているので false が返ってくる

    const useInImmutabilityDoubleNum = { val: 2 };
    const inImmutabilityDouble = (num) => {
        num.val = num.val * 2;
        return num;
    };

    const newNum2 = inImmutabilityDouble(useInImmutabilityDoubleNum);
    console.log(useInImmutabilityDoubleNum.val === newNum1.val); // Immutabilityが保持されず true が返ってくる

    return (
        <>
            <h3>不変性（Immutability）</h3>
            <p>引数で渡ってきたオブジェクトを変更しない！</p>

            <div>
                <p>引数num {useImmutabilityDoubleNum.val} ※初期値は2</p>
                <p>immutabilityな関数の実行結果 {newNum1.val}</p>
            </div>

            <div>
                <p>引数num {useInImmutabilityDoubleNum.val} ※初期値は2</p>
                <p>immutabilityではない関数の実行結果 {newNum2.val}</p>
            </div>
        </>
    );
};

export default Example;
