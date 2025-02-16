// "use client"; // ClientCompでレンダリングする部分だけコンポネント化する事で、初回読み込みが最適化される

import "./lib";
import ClientComp from "./components/ClientComp";

// export default SSR = () => {
//     return <div> SSR Page</div>;
// };
export default function SSR() {
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
                </div>
            </div>
        </div>
    );
}
