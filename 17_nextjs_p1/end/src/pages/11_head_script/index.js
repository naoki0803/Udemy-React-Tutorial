// POINT <head>内への挿入方法と<script>タグの挿入方法
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";

export default function Page() {

  const [ load, setLoad ] = useState(false);

  return (
    <>
      <Head>
        <title>ページのタイトル</title>
        <meta property="og:title" content="ページのタイトル" />
      </Head>
      <Script src="/jquery-3.2.1.min.js"
        strategy="lazyOnLoad" 
        onLoad={() => setLoad(true)}
        onError={e => {
          console.error(e)
        }}
      />
      <h3>jQuery loaded: {load ? "true" : "false"}</h3>

      <Script dangerouslySetInnerHTML={{
        __html: `console.log('Inline Script')`
      }} />
    </>
  )
}
