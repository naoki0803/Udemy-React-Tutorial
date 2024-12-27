/** 外部CSSの読み込む方法
 *
 * 1. importでフィルを読み込む
 * 2. 適用したい要素に className={'css内のセレクター'}
 *
 * 注意点
 * 外部CSS読み込みの場合、コンポーネントをまたいで、
 * CSSに記述されているセレクターを利用している全ての要素で共通のCSSが適用される。
 *
 * 例として、SubButton コンポーネント内のSubButton.cssのみ、
 * bg-colorをorangeに設定しているが、start、end内のすべてclassName={'btn'}にorangeが反映してしまう。
 */

import SubButton from './components/SubButton';
import './Example.css';
import { useState } from 'react';

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button
        // className={`btn ${isSelected && 'selected'}`}  //テンプレートリテラル無いで&&を利用するとfalseの場合CSSにfalseが文字列でわたってしまうので利用しない
        className={`btn ${isSelected ? 'selected' : ''}`}
        onClick={clickHandler}
      >
        ボタン
      </button>

      <SubButton />
      <div style={{ textAlign: 'center' }}>
        {isSelected && 'クリックされました。'}
      </div>
    </>
  );
};

export default Example;
