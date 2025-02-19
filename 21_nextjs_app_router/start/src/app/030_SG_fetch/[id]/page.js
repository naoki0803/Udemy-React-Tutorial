import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";

/** dynamic routing に必要なidの情報を取得する流れ
 * 1. fetch で API にリクエストを投げる
 * 2. then でつなげ、1.で取得した res を res.json() で json に変換する
 * 3. 変換した data を map で [{id: n},{id: n}...] として配列で返す
 * 4. 21_nextjs_app_router/start/next.config.mjs 内で
 *      output: "export", を記述しているので、
 *    generateStaticParams()が実行され、 Detail コンポーネントの props に params として 3 の配列が渡ってくる
 */

export async function generateStaticParams() {
    const data = await fetch(ENDPOINT).then((res) => res.json());
    const paths = data.map((record) => ({ id: record.id }));
    // data を直接返しても、 Detail コンポーネントの params は 🚀 ~ Detail ~ params: { id: '1' } が渡ってくる
    return paths;
}

export default async function Detail({ params }) {
    console.log("🚀 ~ Detail ~ params:", params);

    const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
        res.json()
    );
    return (
        <>
            <Article data={article} />
        </>
    );
}
