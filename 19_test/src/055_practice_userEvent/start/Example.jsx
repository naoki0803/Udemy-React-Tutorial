import Message from './components/Message';

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>
        startフォルダ内にあるcomponentsフォルダにテストファイルを作成して、Messageコンポーネントのテストをおこなってください。テストは以下のQ1・Q2に従って作成してください。Q1.画面内にinput要素が表示されていることをテストしてください。Q2.input要素に値を入れると正しく値が更新されることをテストしてください。
      </p>
      <Message />
    </>
  );
};

export default Example;
