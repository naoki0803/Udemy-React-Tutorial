// POINT イベントの型定義を学ぼう
const Example = () => {
  const clickHandler = (event: any) => console.log("MouseEvent", event);
  return (
    <>
      <h1>Eventの型定義</h1>
      <h3>onClickにおけるeventオブジェクトの型: React.MouseEvent{"<T>"}</h3>

      <button onClick={clickHandler}>buttonタグ</button>
      <div onClick={(event) => console.log("MouseEvent", event)}>divタグ</div>
      <br />

      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          console.log("MouseEvent", event)
        }
      >
        ボタン
      </button>

      <h3>onChangeにおけるeventオブジェクトの型: React.ChangeEvent{"<T>"}</h3>

      <input
        type="text"
        onChange={(event) => console.log("ChangeEvent", event)}
      />
      <br />

      <select onChange={(event) => console.log("ChangeEvent", event)}>
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="banana">banana</option>
      </select>
      <br />

      <h3>onSubmitにおけるeventオブジェクトの型: React.FormEvent{"<T>"}</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("FormEvent", event);
        }}
      >
        <button type="submit">送信</button>
      </form>
      <br />
    </>
  );
};

export default Example;
