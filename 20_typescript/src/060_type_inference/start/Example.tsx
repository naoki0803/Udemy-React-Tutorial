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
     * 1. 外部から仕様される物
     *  ※ 例) class にわたすオプションなどは型定義が必要
     *
     * この関数やClass内で利用するものは、簡易なものだれば方の定義は不要
     */
};

export default Example;
