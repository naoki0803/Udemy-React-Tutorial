"use client";
// POINT API Routesの使い方
import ArticleList from "../../components/articleList";
import ArticleForm from "./components/form";
import { useEffect, useState } from "react";

export default function Page() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const ENDPOINT = "/api/article";
      const result = await fetch(ENDPOINT).then((res) => res.json());
      setArticles(result);
    };
    getArticles();
  }, []);

  return (
    <>
      <h3>API Routes</h3>
      <ArticleForm />

      {articles.length === 0 ? (
        <div>データがありません。</div>
      ) : (
        <>
          <ArticleList basePath="/030_SG_fetch" list={articles} />
        </>
      )}
    </>
  );
}
