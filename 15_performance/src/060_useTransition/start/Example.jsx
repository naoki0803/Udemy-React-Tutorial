import { useState } from "react";

const generateDummyItem = (num) => {
  return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(10000);

const Example = () => {
  const [filterVal, setFilterVal] = useState("");

  const changeHandler = (e) => {
    setFilterVal(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={changeHandler} />
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
