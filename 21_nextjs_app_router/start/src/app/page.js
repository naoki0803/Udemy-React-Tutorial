/** page.js とは
 * リクエストが飛んで来た時に、表示する内容を記載するファイル
 * 本ファイルの場合、http://localhost:4020/ にリクエストされた時に表示される内容
 * 記載したコンポーネントの戻り値を、同階層の layout.js の children で受け取る
 */

import Link from "next/link";
import { navList } from "../data/nav";

export default function Home() {
    return (
        <ul>
            {navList.map((item) => {
                return (
                    <li key={item}>
                        <Link href={`/${item}`}>{item}</Link>
                    </li>
                );
            })}
        </ul>
    );
}
