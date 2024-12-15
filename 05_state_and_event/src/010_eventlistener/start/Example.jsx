const Example = () => {
  const onClickHandler = () => {
    alert('ボタンがクリックされました');
  };

  return (
    <>
      <button onClick={onClickHandler}>button1</button>
      {/** 直接アロー関数の処理を記述してもいいが、可読性が悪いので、別で関数を定義したほうがよい */}
      {/* prettier-ignore */}
      <button onClick={() => {alert('ボタンがクリックされました');}}>
        button2
      </button>
    </>
  );
};

export default Example;
