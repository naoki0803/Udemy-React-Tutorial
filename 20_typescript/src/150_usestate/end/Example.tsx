// POINT useStateの型定義について学ぼう
import { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

type User = {
  name: string;
  age: number;
};

const Example = () => {
  const [text, setText] = useState("hello");
  useState(0);

  const [animals, setAnimals] = useState<string[]>(["dog", "cat"]);
  const [users, setUsers] = useState<User[]>([{ name: "Tom", age: 22 }]);
  const [todos, setTodos] = useState<Todo[]>([{ id: 0, text: "Homework" }]);
};

export default Example;
