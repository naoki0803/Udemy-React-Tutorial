/* POINT テストコードを書く際の注意点
Arrange:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("カウントアップ押下で｢現在のカウント｣が+1されるか", () => {
    // Arrange:(テストデータ、条件、環境の設定).
    const { debug } = render(<Counter originCount={0} />);

    // 更新前の値を確認する
    const beforeSpanEl = screen.getByText("現在のカウント:0");
    expect(beforeSpanEl).toBeInTheDocument();

    // Act:(ロジックの実行、関数の実行).
    const btn = screen.getByRole("button", { name: "カウントアップ" });
    fireEvent.click(btn);

    // Assertion:(実行結果と期待する結果の比較).
    const spanEl = screen.getByText("現在のカウント:1");
    expect(spanEl).toBeInTheDocument();
});
