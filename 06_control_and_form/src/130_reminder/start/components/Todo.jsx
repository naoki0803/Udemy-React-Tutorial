import { useState } from 'react';

const Todo = () => {
  const [todosList, setTodoList] = useState([
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
    console.log(id);
    todosList.filter((todo) => {
      console.log(todo.id === id);
    });

    // setTodoList((prev) => [...prev].shift());
  };

  return (
    <>
      <ul>
        {todosList.map((todo) => {
          return (
            <li key={todo.id}>
              <button onClick={() => complete(todo.content)}>完了</button>
              {todo.content}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
