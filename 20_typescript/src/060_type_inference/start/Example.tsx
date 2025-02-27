const Example = () => {
    // 練習用
    let str = "hello";
    let num = 123;

    // const で定義すると、型推論がリテラル型になる
    const name = "hoge"; // const name: "hoge" で型推論される
    const age = 32; // const age: 32 で型推論される

    // name = "moge"; // リテラル型なので、'hoge' 意外は代入できない。

    /** オブジェクトの型推論を用いるか否かの基準
     *
     * 1. 外部から使用される場合は型定義が必要
     *    例) 以下のようなクラスのコンストラクタの引数には型定義が必要
     *    class User {
     *      constructor(options: { name: string; age: number }) {}
     *    }
     *
     * 2. 関数やクラス内部でのみ使用する単純な変数は型推論に任せてOK
     *    例) const user = { name: "太郎", age: 20 };
     */
};

export default Example;
