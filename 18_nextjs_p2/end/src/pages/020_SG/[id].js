// POINT [SG]ダイナミックルーティングの記述方法
import { useRouter } from "next/router";

export default function Page({ id, date }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
  return <h3>このページは{id}です。{date}</h3>;
}

export async function getStaticPaths() {
  console.log("getStaticPaths executed");
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  console.log("getStaticProps executed");
  const date = new Date;
  return {
    props: {
      id: params.id,
      date: date.toJSON()
    },
    // revalidate: 5
  };
}
