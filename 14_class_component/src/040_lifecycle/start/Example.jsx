const Example = () => {
  return (
    <>
      <h3>Lifecycleの実行タイミング</h3>
      <p>
        コンソールを開いて、下記三つのステップを実施しながら出力内容を観察してください。
      </p>
      <ol>
        <li>[Mount] ブラウザを再読み込み</li>
        <li>[Update] +1ボタンを押下</li>
        <li>[Unmount] 別のレクチャーを選択</li>
      </ol>
    </>
  );
};

export default Example;
