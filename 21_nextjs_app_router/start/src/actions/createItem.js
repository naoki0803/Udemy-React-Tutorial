"use server";

/** server action を利用する手順
 *
 * 1. フロント側の form の action 属性に関数を渡す(今回は createItem が渡されている。 )
 * 2. 実際にServerで実行するアクション(本ファイル)の先頭に ' use server' と記述する(server action として事項する目印)
 * 3. server action が実行された場合の引数には formData が自動的に渡される
 *      ※ restAPIの場合、フロント側でAPI (/api/article/route.js) を呼び出し、
 *        AppRouter の機能で http method に応じた関数が実行され、その中で server に fetch が行われる
 *        また、渡されてくるdataは const formData = await request.formData(); として取得する必要がある。
 * 4. server action 内で route.js で記述していたロジックと同じ内容を実行する
 *      ※ 値を返す際は、Response オブジェクトではなく、data をそのまま返してOK
 *  */
import { ENDPOINT } from "@/constants";

// useFormState を 利用しない場合 serverAction が 自動的にformData を渡してくれる
// export async function createItem(formData) {

// useFormAction の更新関数から実行した場合、 serverAction の引数は 1: state 2: formData となる
export async function createItem(state, formData) {
    const id = formData.get("id");
    const title = formData.get("title");

    if (id === "" || title === "") {
        // return Response.json(
        //     { msg: "入力フィールドが空です。" },
        //     { status: 500 }
        // );
        return { msg: "入力フィールドが空です。", status: 500 };
    }
    try {
        const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, title }),
        });
        const data = await res.json();
        // return Response.json(data);
        return { msg: `${data.id}: ${data.title}を登録しました。` };
    } catch {
        // return Response.json({ mes: "登録に失敗しました。" }, { status: 500 });
        return { msg: "登録に失敗しました。", status: 500 };
    }
}
