// POINT [Concurrent Mode]useTransitionでユーザビリティを向上
import { useState, useTransition } from "react";

const generateDummyItem = (num) => {
  return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(10000);

const Example = () => {
  const [isPending, startTransition] = useTransition();
  const [filterVal, setFilterVal] = useState("");

  const changeHandler = (e) => {
    startTransition(() => {
      setFilterVal(e.target.value);
    })
  };

  return (
    <>
      <input type="text" onChange={changeHandler} />
      {isPending && <div>Loading...</div>}
      <ul>
        {dummyItems
          .filter((item) => {
            if (filterVal === "") return true;
            return item.includes(filterVal);
          })
          .map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
