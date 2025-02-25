"use client";

import { createItem } from "@/actions/createItem";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function ArticleForm() {
    const [newId, setNewId] = useState();
    const [newTitle, setNewTitle] = useState();

    /**useFormState
     * 引数
     * 第一引数: serverAction
     * 第二引数: useFormState の state の初期値
     *
     * Form の action が実行されると、第一引数の severAction が実行される
     * 戻り値 ※配列
     * 1番目: state → serverAction の戻り値
     * 2番目: state を更新する為の関数 (From の action 属性に設定する関数)
     *
     * 注意点 更新関数を利用した場合、第一引数の serverAction(createItem)が実行されるが、
     * その際、 serverAction の引数は以下のようになる
     *      第一引数: useFormState の state
     *      第二引数: formData
     *
     */

    const [state, createItemAction] = useFormState(createItem, { msg: null });
    console.log("🚀 ~ ArticleForm ~ state:", state);

    return (
        // <form action={createItem}> // useFromState を利用しない場合の serverAction
        <form action={createItemAction}>
            <div>
                <label>
                    {" "}
                    Id:
                    <input
                        type="number"
                        name="id"
                        value={newId}
                        onChange={(e) => setNewId(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    {" "}
                    Title:
                    <input
                        name="title"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">送信</button>
            <div style={{ color: "red" }}>{state.msg}</div>
        </form>
    );
}
