/** Css Module
 *
 * 1. 読み込むCSSファイルの名前に'module'を追加する ※｢ファイル名.module.css｣
 *  ※moduleをつけないと、エラーになる。
 * 2. cssファイルをimportするさいに、 import styles や classes と名前をつけて、読み込む
 *
 * module.cssは、class名に独自のclass名が自動的に付与されるので、
 * 外部読み込みCSSと切り分けたcssを適用する事ができる。
 */
import styles from './CssModuleButton.module.css';

const CssModuleButton = ({ clickHandler, isSelected }) => {
  console.log('🚀🚀🚀 ~ CssModuleButton ~ clickHandler:', clickHandler);

  return (
    <button
      className={`${styles.btn} ${isSelected ? styles.selected : ''}`}
      onClick={clickHandler}
    >
      cssModuleボタン
    </button>
  );
};

export default CssModuleButton;
