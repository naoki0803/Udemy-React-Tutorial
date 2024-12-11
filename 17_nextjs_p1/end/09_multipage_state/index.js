// POINT 複数ページでの状態の共有（Context使用）
import { useState } from "react";
import Form from "../../components/form";
import List from "../../components/list";

export default function PageLink() {
  const initialState = { name: "", birth: "" };
  const [value, setValue] = useState(initialState);
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    setValue((prev) => ({ ...prev, [inputId]: inputValue }));
  };
  const handleAddClick = () => {
    setList((prev) => [...prev, { ...value, id: new Date().getTime() }]);
    setValue(initialState);
  };
  const handleResetClick = () => {
    setList([]);
  };
  return (
    <div>
      <Form
        handleAddClick={handleAddClick}
        handleResetClick={handleResetClick}
        handleChange={handleChange}
        nameValue={value.name}
        birthValue={value.birth}
      />
      <List list={list} />
    </div>
  );
}
