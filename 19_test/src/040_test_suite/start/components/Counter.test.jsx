import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

// describe('テストのグループ名', () => {});

test("「カウントアップ」押下で「現在のカウント」が+1されるか", () => {
  render(<Counter originCount={0} />);

  const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
  expect(spanElBeforeUpdate).toBeInTheDocument();

  const btn = screen.getByRole("button", { name: "カウントアップ" });
  fireEvent.click(btn);

  const spanEl = screen.getByText("現在のカウント:1");
  expect(spanEl).toBeInTheDocument();
});
