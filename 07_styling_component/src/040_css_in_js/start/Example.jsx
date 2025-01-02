/**CSS-in-Jsとは
 * 
 * JavaScript内にCSSを記述する記法
 * 基本的にLib(styledCssなど)を入れて利用する。
 * CSS-moduleと同様に一意のクラス名が付与されるので、コンポーネント単位で疎結合な状態にできる
 * 疑似要素や疑似セレクターを利用することも可能
 * 
 * 以下のように記述することで、テンプレートテラル内で、CSSを記述する事ができる
 * styled.タグ名``
 * ※タグ付きテンプレートと言う記法で、実際には関数を実行している。
 * 
 * また、定義したCSSを継承して、利用する事も可能
 * 継承時は移管ように記述して、テンプレートリテラル内で、オーバーライドをする
 * styled(継承元変数名)``
*/

import { useState } from 'react';
import styled from 'styled-components';

console.dir(styled);

// タブ付きテンプレートの表記で、関数を実行していることと同じ。
const StyledButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background: ${({ isSelected }) => isSelected ? 'pink' : ''};
`;

// StyledButtonを継承した、オレンジボタンの作成
const OrangeButton = styled(StyledButton)`
  background-color: orange;

  :hover {
    color: red;
    opacity: 0.5;
  }

  // ネストしてCSSを記述することも可能
  span {
    font-size: 1.5em;
  }

  @media (max-width: 600px) {
    color:blue;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>
        StyledButton
      </StyledButton>

      <OrangeButton isSelected={isSelected} onClick={clickHandler}>
      <span>オレンジボタン(継承)</span>
      </OrangeButton>
      <button
        className={`btn ${isSelected ? 'selected' : ''}`}
        onClick={clickHandler}
      >
        <span>ボタン</span>
      </button>
      <div style={{ textAlign: 'center' }}>
        {isSelected && 'クリックされました。'}
      </div>
    </>
  );
};

export default Example;
