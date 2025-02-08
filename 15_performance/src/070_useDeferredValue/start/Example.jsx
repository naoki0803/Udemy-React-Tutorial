import { useState, useTransition, useDeferredValue } from "react";

const generateDummyItem = (num) => {
    return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(10000);

const Example = () => {
    // const [isPending, startTransition] = useTransition();
    const [filterVal, setFilterVal] = useState("");

    const changeHandler = (e) => {
        // startTransition(() => {
        setFilterVal(e.target.value);
        // });
    };

    const filteredItems = dummyItems
        .filter((item) => {
            if (filterVal === "") return true;
            return item.includes(filterVal);
        })
        .map((item) => <li key={item}>{item}</li>);

    // 遅延させたい値をラップする
    // input の value は changeHandler によりすぐに表示されるが、
    // deferredItems は遅延して画面に表示される
    const deferredItems = useDeferredValue(filteredItems);

    return (
        <>
            <input type="text" onChange={changeHandler} />
            {/* {isPending && <div>Loading...</div>} */}
            {/* <ul>{filteredItems}</ul> */}
            <ul>{deferredItems}</ul>
        </>
    );
};

export default Example;
