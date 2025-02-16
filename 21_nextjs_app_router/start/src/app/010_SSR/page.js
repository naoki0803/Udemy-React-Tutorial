// "use client"; // ClientCompでレンダリングする部分だけコンポネント化する事で、初回読み込みが最適化される

import "./lib";
import ClientComp from "./components/ClientComp";
import { ENDPOINT } from "@/constants";
import ArticleList from "@/components/articleList";

// export default SSR = () => {
//     return <div> SSR Page</div>;
// };
export default async function SSR() {
    // server component 内であれば、非同期処理を useEffect 内で記述しなくてもよい
    // また、nest.js 内で利用できる fetch() はブラウザで利用できる fetch() とは異なり、next.js 独自に定義されており、
    // 第に引数に {cache: 'non-store'} を記述すると、キャッシュを利用せず改めてデータを fetchで取得してくるようになる。
    // ※逆に記述しないと、キャッシュのデータを参照するようになる。

    const articles = await fetch(
        ENDPOINT,
        { next: { revalidate: 10 } } // 10秒間はキャッシュを利用
        // { cache: "none-store" }   // キャッシュを利用しない場合の記述
    ).then((res) => res.json());
    console.log("🚀 ~ SSR ~ articles:", articles);

    return (
        <div>
            <h1>http://localhost:4020/010_SSR のページ</h1>
            <div>
                <h2>layout.js の適用範囲</h2>
                <ul>
                    <li>
                        /layout.js と/010_SSR/layout.js のスタイルが適用される
                    </li>
                </ul>
            </div>
            <div>
                <h2>use Client の実装</h2>
                <ul>
                    <li>
                        client loadedは CSR で実装されており、
                        ページ読み込み後に表示されるまで少しだけ遅延してから画面に表示される。
                    </li>
                </ul>
                <div style={{ background: "white", color: "black" }}>
                    <h2>use client で読み込んだ領域</h2>
                    <ClientComp />
                    <ArticleList list={articles} basePath="/010_SSR" />
                </div>
            </div>
        </div>
    );
}
