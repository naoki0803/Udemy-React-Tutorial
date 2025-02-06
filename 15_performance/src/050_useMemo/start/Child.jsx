import React, { useMemo } from "react";

/** useMemoとは
 * 計算コストの高い処理の結果をメモ化（キャッシュ）するために使用します。
 * これにより、依存関係（dependency）が変わらない限り、
 * 再レンダリング時に毎回同じ計算処理を実行するのではなく、
 * 前回の結果を再利用することができ、パフォーマンスの向上が期待できます。
 *
 * 目的:
 *  高コストな計算結果をキャッシュし、再レンダリングごとに無駄な計算が行われるのを防ぐ。
 *
 * 使い方:
 *  useMemo は第一引数に計算関数、第二引数に依存配列（dependencies）を取ります。
 *  依存配列内の値が変わった場合のみ、計算関数が再実行されます。
 *
 * 注意点:
 *  すべての値について useMemo を使う必要はありません。
 *  計算にかかるコストや頻繁な再レンダリングの有無を考慮して導入するのがベストです。
 *
 * メモと React.memo との違い
 *  React.memo:
 *    コンポーネント自体をメモ化します。
 *    親コンポーネントが再レンダリングされても、
 *    props に変更がない場合は子コンポーネントの再レンダリングを防ぐ仕組みです。
 *  useMemo:
 *    コンポーネント内の特定の値や計算結果をメモ化するため、
 *    不要な計算処理を避けるために使用されます。
 *    両者は役割が異なり、どちらもパフォーマンス最適化に役立ちますが、
 *    使用箇所や目的に合わせて適切に選択しましょう。
 */
const Child = ({ countB, onClick }) => {
    console.log("%cChild render", "color: red;");

    return useMemo(() => {
        console.log("%cuseMemo", "color: green;");
        return (
            <div className="child">
                <h2>子コンポーネント領域</h2>
                <button onClick={onClick}>ボタンB</button>
                {/* <p>ボタンBクリック回数：{countB}</p> */}
            </div>
        );
    }, [countB]);
};

// React.memoで記述した場合
// const Child = React.memo(({ countB, onClick }) => {
//     console.log("%cChild render", "color: red;");

//     return (
//         <div className="child">
//             <h2>子コンポーネント領域</h2>
//             <button onClick={onClick}>ボタンB</button>
//             <p>ボタンBクリック回数：{countB}</p>
//         </div>
//     );
// });

export default Child;
