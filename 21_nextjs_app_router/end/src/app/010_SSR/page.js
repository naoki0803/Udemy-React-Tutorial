import './lib';
import ClientComp from "./components/ClientComp";
import { ENDPOINT } from '@/constants';
import ArticleList from '@/components/articleList';

export default async function SSR() {

    const articles = await fetch(ENDPOINT, {
        next: { revalidate: 10 }
    }).then(res => res.json());
    return (
        <>
            <div>SSR Page</div>
            <ClientComp />
            <ArticleList list={articles} basePath="/010_SSR" />
        </>
    )
}