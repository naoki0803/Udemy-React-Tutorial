/* POINT テストコードの基本
Arrage:(準備)
Act:(実行)
Assertion:(結果の確認)
*/
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test('「カウントアップ」押下で「現在のカウント」が+1されるか', () => {
  // Arrage
  render(<Counter originCount={0} />);
  
  // 更新前
  const spanElBeforeUpdate = screen.getByText('現在のカウント:0')
  expect(spanElBeforeUpdate).toBeInTheDocument();

  // Act
  const btn = screen.getByRole('button', { name: 'カウントアップ'});
  fireEvent.click(btn);

  // Assertion
  const spanEl = screen.getByText('現在のカウント:1')
  expect(spanEl).toBeInTheDocument();
})