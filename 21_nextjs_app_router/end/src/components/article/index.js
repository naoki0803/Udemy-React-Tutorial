export default function Article({ data }) {
  return (
    <div className="container">
      <h1 className="title">{data.title}</h1>
      <p className="text">{data.text}</p>
      <div className="date">投稿日: {data.date}</div>
    </div>
  );
}
