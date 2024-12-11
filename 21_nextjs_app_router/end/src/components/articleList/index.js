import Link from "next/link";

export default function ArticleList({ basePath, list }) {
  return (
    <ul className="list">
      {list.map((item) => {
        return (
          <li className="listItem" key={item.id}>
            <Link href={`${basePath}/${item.id}`}>
              <article className="container">
                <h1 className="title">
                  <div className="titleSub">タイトル</div>
                  {item.title}
                </h1>
                <div className="date">投稿日: {item.date}</div>
              </article>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
