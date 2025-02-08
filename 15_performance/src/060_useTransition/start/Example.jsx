/**
 * 
 * useTransition の概要
非同期更新と低優先度更新の実現
useTransition は、React 18 で導入されたフックで、ユーザーの入力などの高優先度な更新と、大量データのフィルタリングや再レンダリングといった重い更新（低優先度の更新）を分離するために用いられます。これにより、UI の応答性を向上させ、ユーザーがストレスを感じることなくアプリケーションを利用できるようになります。
2 つの値を返す
useTransition は配列として 2 つの値を返します：
isPending：現在トランジション中の更新がある場合に true になります。これを使って、ロード中のインジケータ（例：loading...）を表示できます。
startTransition：低優先度で実行したい更新処理をコールバック関数として渡すための関数です。この関数内で行われるステート更新は、通常の同期的な更新とは異なり、React によって適切なタイミングで処理されます。
---
実際のコードにおける利用例
例えば、以下の Example.jsx ファイル上では、ユーザーがテキスト入力を行ったときに、即座に高優先度な UI の反応（入力値の変更）は行いながら、大量のアイテムに対するフィルター処理は低優先度としてバッチ処理されます。


この例でのポイント
startTransition の利用
入力ハンドラー (changeHandler) 内で、startTransition を使用して setFilterVal をラップしています。これにより、フィルター処理のような負荷のかかる処理が、低優先度のタスクとしてスケジュールされます。
isPending の活用
isPending が true の間、ローディング用の UI（<div>loading...</div>）を表示することで、ユーザーに対して処理が進行中であることを明示しています。
---
まとめ
useTransition は、ユーザーインターフェースの応答性を向上させるための強力なツールです。重い計算やデータ処理の更新を低優先度に設定することで、ユーザーからの入力などの即時反応が必要な部分のパフォーマンスを損なわずに済むため、よりスムーズなユーザー体験を実現できます。

*/

import { useState, useTransition } from "react";

const generateDummyItem = (num) => {
    return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(50000);

const Example = () => {
    const [filterVal, setFilterVal] = useState("");
    const [isPending, startTransition] = useTransition();

    // const changeHandler = (e) => {
    //     setFilterVal(e.target.value);
    // };

    const changeHandler = (e) => {
        startTransition(() => {
            setFilterVal(e.target.value);
        });
    };

    return (
        <>
            <input type="text" onChange={changeHandler} />
            {isPending && <div>loading...</div>}
            <ul>
                {dummyItems
                    .filter((item) => {
                        if (filterVal === "") return true;
                        return item.includes(filterVal);
                    })
                    .map((item) => (
                        <li key={item}>{item}</li>
                    ))}
            </ul>
        </>
    );
};

export default Example;
