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
    console.log("🚀 ~ GET ~ data:", data);

    return Response.json(data);
}

export async function POST(request) {
    console.log("🚀 ~ POST ~ request:", request);

    // const data = await fetch(ENDPOINT, { formData }).then((res) => res.json());
    // return Response.json(data);
}
