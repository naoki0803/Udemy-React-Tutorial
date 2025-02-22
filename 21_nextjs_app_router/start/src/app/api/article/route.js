// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route

/**
 * API フォルダに route.js を作成9する
 * ※ APIフォルダを/として、内部に/article/route.js と作成すると、
 *  http://ENDPOINT/articleの Path にリクエストが来た場合に、
 *  リクエストの method に応じた、route.js 内の関数が、実行される。
 * その中に、
 */

import { ENDPOINT } from "@/constants";

export async function GET() {
    const data = await fetch(ENDPOINT).then((res) => res.json());
    // console.log("🚀 ~ GET ~ data:", data);

    return Response.json(data);
}

export async function POST(request) {
    const formData = await request.formData();
    const id = formData.get("id");
    const title = formData.get("title");

    if (id === "" || title === "") {
        return Response.json(
            { msg: "入力フィールドが空です。" },
            { status: 500 }
        );
    }

    try {
        const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, title }),
        });
        console.log("🚀 ~ POST ~ res:", res);

        const data = await res.json();
        console.log("🚀 ~ POST ~ data:", data);
        return Response.json(data);
    } catch {
        return Response.json({ msg: "登録に失敗しました。" }, { status: 500 });
    }

    // const data = await fetch(ENDPOINT, { formData }).then((res) => res.json());
    // return Response.json(data);
}
