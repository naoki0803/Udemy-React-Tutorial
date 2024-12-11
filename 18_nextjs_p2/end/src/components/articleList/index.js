import Link from "next/link";

export default function ArticleList({ list }) {
  return (
    <ul className="list">
      {list.map((item) => {
        return (
          <li className="listItem" key={item.id}>
            <Link href={`/030_SG_fetch/${item.id}`}>
              <a>
                <article className="container">
                  <h1 className="title">
                    <div className="titleSub">タイトル</div>
                    {item.title}
                  </h1>
                  <div className="date">投稿日: {item.date}</div>
                </article>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
