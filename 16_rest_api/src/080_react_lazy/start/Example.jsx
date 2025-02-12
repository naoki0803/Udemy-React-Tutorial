/** Lazy とは
 *  Lazy は Component を DynamicImport(動的インポート)可能な
 *  react の module
 *
 *  lazy のコールバック関数内で import() を記述することで、
 *  戻り値が Component として利用可能になる
 *
 *  また、Suspense Component でコンポーネントをラップして、
 *  以下のように記述すると、ラップした Component が読み込まれる間
 *  指定した値を表示する事ができる
 *  <Suspense fallback={<div>loading...</div>}>
 *
 *  更に、startTransition() を react で読み込む事で、
 *  fallback で指定した値を表示せずに、もともと表示されていたComponentを表示しつづける事も可能
 */
import { useState, useEffect, lazy, Suspense, startTransition } from "react";

const LazyComponentA = lazy(() => import("./components/ComponentA"));
const LazyComponentB = lazy(() => import("./components/ComponentB"));

// Lazyを利用しない場合、以下のような記述をする必要がある。
const DynamicComponentC = () => {
    const [ComponentC, setComponentC] = useState(null);

    useEffect(() => {
        // import() を利用して ComponentC のモジュールを非同期に読み込む
        import("./components/ComponentC")
            .then((module) => {
                // module.ComponentC を取得して state に設定
                setComponentC(() => module.ComponentC);
            })
            .catch((error) => {
                console.error("ComponentCの読み込みに失敗しました:", error);
            });
    }, []);

    // ComponentC がまだ読み込まれていない場合はローディング状態を表示
    if (!ComponentC) {
        return <div>loading...</div>;
    }

    // 読み込まれたら ComponentC をレンダリング
    return <ComponentC />;
};

const Example = () => {
    const [compA, setCompA] = useState(true);

    return (
        <>
            <button
                onClick={() =>
                    startTransition(() => {
                        setCompA((prev) => !prev);
                    })
                }
            >
                ComponentA
            </button>
            <Suspense fallback={<div>loading...</div>}>
                {/* {compA ? <LazyComponentA /> : <LazyComponentB />} */}
                {compA ? <LazyComponentA /> : <DynamicComponentC />}
            </Suspense>
        </>
    );
};

export default Example;
