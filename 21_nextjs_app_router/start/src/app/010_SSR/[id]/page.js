/** Dynamic Routing の方法
 *
 * 1. routPathフォルダ直下に[id]というフォルダを作成する
 * 2. フォルダ内に page.js を設置する
 * 3. page.js 内の関数コンポーネントの props でわたっってくる { params } に routPath/id の id 部分が渡ってくる
 *    http://localhost:4020/010_SSR/1 → この場合 params = 1 が渡ってくる
 *
 *   */

import { ENDPOINT } from "@/constants";
import Article from "@/components/article";

export default async function SSR({ params }) {
    console.log("🚀 ~ SSR ~ params:", params); // 🚀 ~ SSR ~ params: { id: '1' }

    const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
        res.json()
    );
    console.log("🚀 ~ SSR ~ article:", article);

    return (
        <div>
            <div>
                <h2>Dynamic Routing を用いた動的な Article Page</h2>
                <div style={{ background: "white", color: "black" }}>
                    <h2>use client で読み込んだ領域</h2>
                    <Article data={article} />
                </div>
            </div>
        </div>
    );
}
