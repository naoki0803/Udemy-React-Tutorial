/** css Module とは
 *
 * CSS Moduleは、CSSのスコープをコンポーネント単位で管理するための技術です。
 * 通常のCSSでは、クラス名がグローバルスコープで適用されるため、
 * 異なるコンポーネント間でクラス名が衝突する可能性があります。CSS Moduleを使用すると、
 * 各コンポーネントに対してユニークなクラス名が自動的に生成されるため、スタイルの衝突を防ぐことができます。
 *
 * 1. CSSファイルをインポートする際に、import styles from './filename.module.css';のように、
 *    オブジェクトとしてインポートします。
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
