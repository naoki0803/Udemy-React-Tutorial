
export default function Page({ params }) {
  const date = new Date;
  return <h3>このページは{params.id}です。{date.toJSON()}</h3>;
}

