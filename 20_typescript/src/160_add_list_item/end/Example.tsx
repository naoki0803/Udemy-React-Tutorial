// 今まで学んできたことを活かして簡易Todoリストを作成する
import { useState } from "react";
import { TaskList } from "./TaskList";

export type Todo = {
  id: number;
  text: string;
};

const Example: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Todo1" },
    { id: 2, text: "Todo2" },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    setTodos([...todos, { id: todos.length + 1, text: inputText }]);
    setInputText("");
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        追加
      </button>
      <TaskList todos={todos} />
    </div>
  );
};

export default Example;
