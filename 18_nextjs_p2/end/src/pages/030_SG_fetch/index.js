// POINT [SG]フェッチしたデータで静的なページを作成
import axios from "axios";
import ArticleList from "../../components/articleList";
import Head from "next/head";

export default function Page({ articles }) {
    if(!articles) {
        return <div>データがありません。</div>
    }

    return (
        <>
            <Head>
                <title>ページ一覧</title>
            </Head>
            <h3>フェッチ&SG</h3>
            <ArticleList list={articles} />
        </>
    )
}

export async function getStaticProps() {
    const ENDPOINT = 'http://localhost:4030/articles';
    const result = await axios.get(ENDPOINT).then(res => res.data);
    return { props: { articles: result } }
}