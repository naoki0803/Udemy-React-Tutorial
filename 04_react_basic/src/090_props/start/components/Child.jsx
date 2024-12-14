/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import './Child.css';

{
  /* default値を'greenとして設定' */
}
const Child = ({ color = 'green', num, fn, bool, obj }) => {
  return (
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
      <h3>{fn('Function')}</h3>
      <h3>{num}</h3>
      <h3>{bool ? 'true' : 'false'}</h3>
      <h3>{obj.name}</h3>
      <h3>{obj.age}</h3>
    </div>
  );
};

export default Child;
