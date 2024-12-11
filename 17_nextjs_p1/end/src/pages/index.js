import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href={{ pathname: "/07_router", query: { key: "value" } }}>
        <a>/07_router</a>
      </Link>
      <Link href="/07_router/hello/setting">
      <a>/07_router</a>
      </Link>
    </>
  );
}
