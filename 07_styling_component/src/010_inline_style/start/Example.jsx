/** inLineでStyleを当てる方法
 *
 * 1. objectとしてstyleを記述する
 * 2. jsxの要素内に直接styleを記述する
 *
 */

import { useState } from 'react';

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    width: 120,
    height: 60,
    display: 'block',
    fontWeight: 'bold',
    'border-radius': 9999, // css表記にする場合は文字列で記述する
    cursor: 'pointer',
    margin: 'auto',
    background: isSelected ? 'pink' : '',
  };

  return (
    <>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      {/* 要素に直接記述する場合、波カッコを重複して表現する */}
      <div style={{ textAlign: 'center' }}>
        {isSelected && 'クリックされました。'}
      </div>
    </>
  );
};

export default Example;
