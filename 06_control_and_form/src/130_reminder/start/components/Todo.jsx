import { useState } from 'react';
import TodoList from './TodoList';

const Todo = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      content: '店予約する',
    },
    {
      id: 2,
      content: '卵買う',
    },
    {
      id: 3,
      content: '郵便出す',
    },
  ]);

  const complete = (id) => {
    //自分で記述したコード
    //setTodoList内で、直接filterした結果を利用しており、可読性が低い
    // setTodoList((prevTodos) => {
    //   return prevTodos.filter((todo) => todo.id !== id);
    // });

    //ENDコード
    //filterメソッドで返される新しい配列で、setTodoListを実行する。
    //可読性が高い
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    console.log('🚀🚀🚀 ~ complete ~ newTodoList:', newTodoList);
    setTodoList(newTodoList);
  };

  return (
    <>
      <TodoList todoList={todoList} complete={complete} />
    </>
  );
};

export default Todo;
