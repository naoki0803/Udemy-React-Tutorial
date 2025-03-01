const Example = () => {
    /** ジェネリクス型とは
     *  処理内容は同じだが、引数と戻り値の｢型のみ｣異なる場合に、
     *  ジェネリクス型を用いて型を抽象化することで、汎用的に利用できる型を実装すること。
     */

    // Good な実装 (ジェネリクス型を用いた実装)
    // 共通している第一引数の型と、戻り値の型を T っという抽象的な型として定義する
    const repeat = <T>(value: T, times: number): T[] => {
        return new Array(times).fill(value);
    };

    // ジェネリクス型の利用方法
    const strArray = repeat<string>("7", 3);
    console.log("🚀 ~ Example ~ strArray:", strArray);

    const numArray = repeat<number>(7, 3);
    console.log("🚀 ~ Example ~ numArray:", numArray);

    // ジェネリクス型ではない冗長な実装
    const repeatStr = (value: string, times: number): string[] => {
        return new Array(times).fill(value);
    };
    const repeatNum = (value: number, times: number): number[] => {
        return new Array(times).fill(value);
    };

    const strArr = repeatStr("あああ", 5);
    console.log(strArr);

    const numArr = repeatNum(5, 5);
    console.log(numArr);
};

export default Example;
