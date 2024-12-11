// POINT テストコードを実行してみよう
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it('should have h1 tag', () => {
    render(<Greet />);
    const h1El = screen.getByText("こんにちは");
    expect(h1El).toBeInTheDocument();
})

// 失敗テスト
// test('if h1 tag exists', () => {
//     render(<Greet />);
//     const h1El = screen.getByText("こんばんは");
//     expect(h1El).toBeInTheDocument();
// })
