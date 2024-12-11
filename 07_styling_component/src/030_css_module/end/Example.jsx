/* POINT css moduleのメリットとデメリット
  メリット
    class名を気にすることなくcssを記述することができる。
    cssと変わらないので学習コストがない
    標準の機能なので、導入コストがない
  デメリット
    将来日推奨になる可能性がある。
    https://github.com/webpack-contrib/css-loader/issues/1050#:~:text=In%20the%20near%20future%20we%20want%20to%20deprecate%20CSS%20modules
  */
 
import { useState } from "react";

import SubButton from "./components/SubButton";
import styles from "./Example.module.css";

// console.log(styles);

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button className={`${styles.btn} ${isSelected ? styles.selected : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <SubButton />
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
