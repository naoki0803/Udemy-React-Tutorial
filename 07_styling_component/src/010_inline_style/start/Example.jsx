import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    return (
        <>
            <button onClick={clickHandler}>ボタン</button>
            <div>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
