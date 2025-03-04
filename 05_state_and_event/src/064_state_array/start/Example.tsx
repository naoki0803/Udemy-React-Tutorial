import React from "react";
import { useState } from "react";

const Example: React.FC = () => {
    const numArray: number[] = [1, 2, 3, 4, 5];
    const [nums, setNums] = useState<number[]>(numArray);

    const shuffle = () => {
        const newNums: number[] = [...nums];
        const popValue = newNums.pop();
        popValue && newNums.unshift(popValue);
        console.log(newNums);

        setNums(newNums);
    };

    return (
        <>
            <h1>{nums}</h1>
            <button onClick={shuffle}>shuffle</button>
        </>
    );
};

export default Example;
