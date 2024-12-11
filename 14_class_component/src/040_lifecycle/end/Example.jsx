import EffectDemo from "./component/EffectDemo";
import LifecycleDemo from "./component/LifecycleDemo";

/* POINT ライフサイクルメソッドについて学び、useEffectとの比較をします。
ブラウザのコンソールを開いて、下記三つステップを実施しながら出力内容を観察してください。
１、F5を押下する。
２、各サンプルのボタン「+1」を一回押下する。
３、レクチャードロップダウンリストから別のレクチャーを選択する。
 */
const Example = () => {
  return (
    <>
      <div>
        <h3>Class lifecycle</h3>
        <div id="demo1">
          <LifecycleDemo />
        </div>
        <h3>useEffect</h3>
        <div id="demo2">
          <EffectDemo />
        </div>
      </div>
    </>
  );
};

export default Example;
