/** SG の利用方法
 *
 * 1. generateStaticParams を定義し export する
 * 2. 処理内の return に生成したいページの id を配列内にオブジェクト形式で渡す。
 *      [{ id: "1" }, { id: "2" }]
 * 3. next.config.mjs の設定に以下のプロパティを追加する
        const nextConfig = {
            output: "export",       // 静的なHTMLを出力する設定
            trailingSlash: true,    // path の末尾に / を付加する設定
        };
 * 
 */

import { paths } from "../paths";

export default function Page({ params }) {
    const date = new Date();
    return (
        <h3>
            このページは{params.id}です。{date.toJSON()}
        </h3>
    );
}

// ダイナミックルートに当てはまる値が何になるかを定義する
// 今回の場合、Pageコンポーネントで受け取っている { params } を定義する。
// 配列で値が受け取れる。

export async function generateStaticParams() {
    return paths;
}

// export const paths = [{ id: "1" }, { id: "2" }];
