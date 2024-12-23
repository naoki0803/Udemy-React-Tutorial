const TodoList = ({ todoList, complete }) => {
  console.log(todoList);
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            {todo.content}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
