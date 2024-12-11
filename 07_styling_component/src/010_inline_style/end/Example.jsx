/* POINT
・再利用性が低い
・疑似要素やメディアクエリが使用できない
・レンダリングの度に計算されるのでパフォーマンスが劣る
・動的で頻繁に計算されるスタイルの適用
 */

import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected(prev => !prev);

  /* POINT インラインスタイルのメリットとデメリット
  メリット
    直感的に記述することができる。
  デメリット
    再レンダリングの度に値が計算されるのでパフォーマンス的に優れていない
    要素に直接記述しているので詳細度が一番高くなり、cssのスタイルが何も効かない
    疑似セレクタやメディアクエリにも対応していないため、実装しようとするとわかりづらいコードになってしまう
  */

  /* POINT style属性に適応させるスタイルをオブジェクトで記述します */
  const style = {
    margin: "auto",
    "border-radius": "9999px",
    border: "none",
    display: "block",

    /* POINT 単位を書かない場合
    単位を書かずに文字列ではなく数字を与えてあげると、reactが自動で解釈し値にpxを付けてくれます。 */
    width: 120,
    height: 60,
    fontWeight: "bold",
    cursor: "pointer",
    /* POINT 三項演算子を使用して isSelected が true の場合は 'pink' false の場合は空文字( '' ) を与えています。
    valueに空文字を与えた場合プロパティは適応されません。 */
    backgroundColor: isSelected ? "pink" : "",
    /* POINT 直接記述することによって可読性が大きく低下するので、可読性が向上する方法を考えて実装してみよう */
  };


  return (
    <>
      <button style={style} onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
