import { useState } from 'react';

const Example = () => {
  // valArr[0] 参照用の値
  // valArr[1] 更新用の値
  let [val, setVal] = useState(0);

  /** useStateについて
   *
   * 1. useState()が実行されると、React内部に状態管理が必要と伝達され、初期値として渡した値が現在の値として'state'として格納される
   * 2. useState()の戻り値として、配列0番目に参照用(現在の値)、配列の1番目に更新用関数が返される。
   * 3. 更新用関数を実行すると、React内の現在の値が更新され、コンポーネントの再レンダリングが実施される
   *
   */

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      = {val};
    </>
  );
};

export default Example;
