import { useState } from 'react';

const InputForm = ({ setTodoList }) => {
  // onchange で入力値を取得し useState で状態を管理する 管理名は newTodoValue
  // TodoListコンポーネントから 既存の TodoList で状態管理している配列を取得し、その配列に、上記で管理したnewTodoValueを追加する関数、addTodoを作成する
  // onclick 関数で、addTodoを実行する

  const [enteredValue, setEnteredValue] = useState('');

  const newTodoValue = (e) => {
    setEnteredValue(e.target.value);
  };

  const addTodo = () => {
    setTodoList((prev) => {
      [...prev], enteredValue;
    });
  };

  return (
    <div>
      <input type="text" value={enteredValue} onChange={newTodoValue} />
      <button onClick={addTodo}>追加</button>
    </div>
  );
};

export default InputForm;
