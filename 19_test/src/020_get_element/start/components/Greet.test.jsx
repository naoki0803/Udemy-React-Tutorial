import { screen, render } from "@testing-library/react";
import Greet from "./Greet";

test("should have h1 tag", () => {
    const { debug } = render(<Greet />);
    const h1EL = screen.getByText("氏名");
    expect(h1EL).toBeInTheDocument();
});

test("getByRole: radioタグを取得", () => {
    const { debug } = render(<Greet />);
    const h1EL = screen.getByText("氏名");
    expect(h1EL).toBeInTheDocument();

    const radioEl = screen.getByRole("radio");

    // 取得した要素を確認する debug の利用方法は2種類
    debug(radioEl); // <input type="radio" />
    screen.debug(radioEl); // <input type="radio" />

    // debug();を引数無しで呼び出すと、renderで指定したコンポーネントのタグ要素が全て取得できる
    debug();
    // <body>
    //     <div>
    //         <div>
    //             <form>
    //                 <h1>こんにちは</h1>
    //                 <input type="radio" />
    //                 <label for="fullname">氏名</label>
    //                 <input id="fullname" placeholder="氏名" type="text" />
    //                 <button>ボタン１</button>
    //                 <button>ボタン２</button>
    //                 <img alt="React Logo" src="/logo512.png" />
    //             </form>
    //         </div>
    //     </div>
    // </body>;

    expect(radioEl).toBeInTheDocument();
});

test("getByRole: imgタグを取得", () => {
    render(<Greet />);
    const imgEL = screen.getByRole("img");
    screen.debug(imgEL); // <img alt="React Logo" src="/logo512.png"/>
    expect(imgEL).toBeInTheDocument();
});

test("getByAltText: imgタグの alt属性を取得", () => {
    render(<Greet />);
    const imgAltEL = screen.getByAltText("React Logo");
    screen.debug(imgAltEL); // <img alt="React Logo" src="/logo512.png"/>
    expect(imgAltEL).toBeInTheDocument();
});

// heading の場合<hx></hx>が複数存在する場合エラーになる(単体であれば第一引数だけで成功する)
test("getByRole: heading を指定して見出しを取得する", () => {
    const { container } = render(<Greet />);
    // ①見出しタグが1つだけの場合
    // const headingEL = screen.getByRole("heading");

    // ②見出しタグが複数 / 要素が異なる場合(h1=おはよう , h2=こんにちは)
    // const headingEL = screen.getByRole("heading", { name: "こんにちは" });

    // ③見出しタグが複数 / 要素が同一の場合(h1=おはよう , h2=おはよう)
    // render()の戻り値内にあるオブジェクトから container を分割代入で取得し、querySelector で要素を取得する
    const h1EL = container.querySelector(".h1EL");
    screen.debug(h1EL); // <h1 class="h1EL"> こんにちは </h1>

    expect(h1EL).toBeInTheDocument();
});
