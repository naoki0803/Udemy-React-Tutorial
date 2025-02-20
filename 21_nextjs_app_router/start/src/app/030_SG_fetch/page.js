// POINT [SG]フェッチしたデータで静的なページを作成
import { ENDPOINT } from "@/constants";
import ArticleList from "../../components/articleList";

// Page 別に表示する metadata を定義する
// ※ metadata は全て小文字！metaData では無いことに注意
export const metadata = {
    title: "ページ一覧",
    description: "記事の一覧を表示します。",
};
export default async function Page() {
    const articles = await fetch(ENDPOINT, { cache: "no-store" }).then((res) =>
        res.json()
    );

    if (!articles) {
        return <div>データがありません。</div>;
    }

    return (
        <>
            <h3>フェッチ&SG</h3>
            <ArticleList basePath="/030_SG_fetch" list={articles} />
        </>
    );
}
