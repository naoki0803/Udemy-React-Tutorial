# 学習メモ

## 010_first_test_run

```
19_test/src/010_first_test_run
```

### 要素の取得(getByText)

-   render で指定したコンポーネントをレンダリング
-   getByText で指定したテキストを含む要素を取得
-   expect でアサーションを実施（期待値と実際の値を比較して検証を行う）
-   toBeInTheDocument(マッチャー) で要素が DOM に存在することを確認

```jsx
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/*
第一引数:テスト名 (npm run test 実行時に表示される名前)
第二引数:テストを記述するコールバック関数
*/
//
test("h1が存在するかどうか", () => {
    render(<Greet />);
    const h1EL = screen.getByText("こんにちは");
    expect(h1EL).toBeInTheDocument();
});
```

## 020_get_element

```
19_test/src/020_get_element
```

### debug 方法

1. render()から分割代入で `debug` を取得して利用する
2. screen.debug で呼び出す
   ※上記ずれも同じ結果を得られる。

```jsx
import { screen, render } from "@testing-library/react";
import Greet from "./Greet";

test("should have h1 tag", () => {
    const { debug } = render(<Greet />);
    // getBy･･･で要素を取得する
    const radioEl = screen.getByRole("radio");

    //
    debug(radioEl);
    screen.debug(radioEl);

    expect(radioEl).toBeInTheDocument();
});
```

<<<<<<< Updated upstream
=======
### getByRole

タグの種類を指定して取得する

#### 見出しタグ

const h1EL = screen.getByRole('headibg');

#### radio

const radioEL = screen.getByRole('radio ');

## テストの準備

テストは以下の 3 工程をモデルとして実装をする

### Arrange（準備）

テストに必要な事前準備を行う段階。

-   コンポーネントのレンダリング
-   dataFetch でデータを取得する
-   必要なオブジェクトを作成する

### Act（実行）

実際にテスト対象のコードを実行する段階。

-   btn を押した時に Count アップが正常に実施されたか確認

### Assert（アサート、検証）

実行結果が期待通りであるかを検証する段階。

e

>>>>>>> Stashed changes
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
