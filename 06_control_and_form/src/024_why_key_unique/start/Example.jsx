import { useState } from 'react';
import './Example.css';

/** Keyをつけるときの注意点
 *
 * 1. keyはUniqueな値を設定する
 * 2. keyの値は変更しない。
 * 3. 配列noインデックスはなるべく利用しない
 */

const Example = () => {
  const makeObj = () => ({
    key: Math.floor(Math.random() * 1e3),
    value: <input />,
  });

  const [inputs, setInputs] = useState([makeObj(), makeObj(), makeObj()]);

  // addListと命名したが、unShiftInputの方が、追加場所も追加要素も明確
  const unshiftInput = () => {
    return setInputs((prev) => [makeObj(), ...prev]);
  };
  return (
    <>
      <div>
        <p style={{ textAlign: 'center' }}>
          startフォルダの内容が表示されます。
          <br />
          練習用に使ってください！
        </p>
      </div>
      <button onClick={unshiftInput}>先頭に追加</button>
      <div className="flex">
        <div style={{ display: 'flex' }}>
          <div>
            <strong>{`key={ユニークキー}`}</strong>
            <ul>
              {inputs.map((input) => (
                <li key={input.key}>
                  {input.key}: {input.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div>
            <strong>{`key={index}`}</strong>
            <ul>
              {inputs.map((input, index) => (
                <li key={index}>
                  {input.key}: {input.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
