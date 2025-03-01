const Example = () => {
    // 練習用

    //function の引数への型定義
    function sum1(x: number, y: number) {
        return x + y;
    }
    sum1(1, 2);
    const sum2 = (x: number, y: number) => x + y;

    const result1 = sum2(1, 2);
    console.log("🚀 ~ Example ~ result1:", result1);

    // const result2 = sum2(1); // 引数が足りないとエラーになる。

    // 引数にデフォルト値を設定して、実行時の引数が少なくても実行できるようにする
    const sum3 = (x: number, y: number = 100) => x + y;
    const result3 = sum3(1);
    console.log("🚀 ~ Example ~ result3:", result3);

    // 引数をoptionalにする
    const sum4 = (x: string, y?: string) => x + y; // optionalにすると、yがundefinedになる可能性があるとエラーになる。y: number | undefined
    const result4 = sum4("Helle", "World");
    console.log("🚀 ~ Example ~ result4:", result4);
};

export default Example;
