/* POINT css-in-js（styled-components） */

import { useState } from "react";
import styled from "styled-components";

// POINT 拡張機能 styled-components.vscode-styled-components

/* POINT 生成する要素を指定し、スタイルをテンプレートリテラルで記述します */
// React要素扱いなので変数名は大文字で記述！
const StyledButton = styled.button`
  margin-inline: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  margin: 10px auto;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
  /* POINT valueを関数にすることで、引数にpropsを受け取ることができる。
  { $isSelected } の部分を変更することで受け取る名前を変更することができる。
  2024/04 Transient props を使用するように修正 isSelected →　$isSelected
  参考: https://styled-components.com/docs/api#transient-props
  */
  background-color: ${( $isSelected ) => ($isSelected ? "pink" : "darkcyan")};
  transition: all 0.3s ease-out;

  /* POINT 疑似クラスの追加 */
  /* 2924/04 ホバー時のスタイルが正しく適用していないの修正*/
  &:hover,
  :active {
    opacity: 0.7;
    transform: scale(1.1);
  }
  span {
    color: purple;
  }
  /* POINT メディアクエリ */
  @media (max-width: 600px) {
    border-radius: 0;
  }

  :global {
    background-color: black;
  }
`;

// POINT スタイルの継承。styled()でラップする
//　２０２４/04 Transient props を使用するように修正
const StyledSubButton = styled(StyledButton)`
  background-color: ${({ $isSelectedSub }) =>
    $isSelectedSub ? "crimson" : "coral"};
`;

const StyledOliveButton = styled(StyledButton)`
  background-color: olive;
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelectedSub, setIsSelectedSub] = useState(false);

  const onClickHandler = () => setIsSelected(!isSelected);
  const onClickSubHandler = () => setIsSelectedSub(!isSelectedSub);

  /* POINT css-in-jsのメリットとデメリット
  メリット
    スタイルをコンポーネントで定義するので、外部のcssに依存することなくコンポーネント単体で動作する
    JavaScriptで記述するため、JSの文法が使用出来たり、propsとして値を渡すこともできる
    ユニークなクラス名が自動生成され他のコンポーネントに影響を与えないことが保証される
    cssの設計が必要なくなる
    コンポーネントで完結しているため、他のプロジェクトで再利用がしやすい
  デメリット
    自動生成されるユニークなクラス名が読めない
    cssに比べパフォーマンスに劣る
    ※ 些細な差なのでデメリットというほどでも無い
    ※ どうしても気になる方は、Nextjsを使用することでパフォーマンスの面は気にしなくてよくなります。
  */

  return (
    // 属性にある isSelected は 上記で定義されています。
    // background-color: ${({ isSelected }) => ~~~ };
    <>
      <StyledButton $isSelected={isSelected} onClick={onClickHandler}>
        ボタン
      </StyledButton>
      <StyledSubButton
        $isSelectedSub={isSelectedSub}
        onClick={onClickSubHandler}
      >
        サブボタン
      </StyledSubButton>
      <StyledOliveButton>
        <span>オリーブ</span>
      </StyledOliveButton>
    </>
  );
};

export default Example;
