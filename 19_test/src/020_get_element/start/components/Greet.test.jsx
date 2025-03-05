import { screen, render } from "@testing-library/react";
import Greet from "./Greet";

test("should have h1 tag", () => {
    const { debug } = render(<Greet />);
    const h1EL = screen.getByText("氏名");
    expect(h1EL).toBeInTheDocument();

    const radioEl = screen.getByRole("radio");
    
    // 取得した要素を確認する debug の利用方法
    debug(radioEl);
    screen.debug(radioEl);

    expect(radioEl).toBeInTheDocument();
});
