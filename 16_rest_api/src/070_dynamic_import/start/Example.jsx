/** dynamic import とは
 *  普段ファイル先頭に記述している import { add } from "./add"; という記述は、static importという名称で、
 *  固定のファイルやlibからmoduleを読み込んでいる。
 *  dynamic import は import()として関数として記述することで、動的にmodule を読み込むことができる
 *  また、static import と異なり、必要なタイミングで import をするため、不要な読み込みなども発生しない。
 */

const Example = () => {
    /** import()とは
     *
     *  @params インポートしたいパス
     *  @return Promise が返り、インポート先の export 方法で受け取る値が変わる
     *  1. export: module
     *  2. export default: default
     */

    //直接実行する方法
    import("./add").then((module) => {
        console.log(module);
        console.log("直接記述", module.add(1, 3));
    });

    //関数として実行する場合
    const dynamicImport = async () => {
        const module = await import("./add");
        console.log(module.add(1, 1)); // 2
        console.log(module.default(1, 1)); // 0
    };

    dynamicImport();
};

export default Example;

/** add の記述内容
    export const add = (a, b) => a + b;
    const minus = (a, b) => a - b;
    export default minus;
 */
