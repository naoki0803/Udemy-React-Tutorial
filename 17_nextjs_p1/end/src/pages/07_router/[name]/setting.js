
import { useRouter } from "next/router";

// http://localhost:4000/07_router/hello/setting

// router.pushのドキュメント
// https://nextjs-ja-translation-docs.vercel.app/docs/api-reference/next/router#routerpush

export default function Setting({ query }) {
    const router = useRouter();
    const clickHandler = () => {
        // router.push('/', '/dummy-url')
        // router.replace('/', '/dummy-url')
        router.reload()
    }
    return (
        <>
            <h1>routerから取得:{router.query.name}</h1>
            <button onClick={clickHandler}>アクションによる画面遷移</button>
        </>
    )
}

export async function getServerSideProps({ query }) {
    return {
        props: { query }
    }
}
