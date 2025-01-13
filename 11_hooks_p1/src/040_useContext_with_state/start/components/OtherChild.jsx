import { useContext } from "react"; //2-1
import { MyContext } from "../Example"; //2-2

const OtherChild = () => {
    const [, setState] = useContext(MyContext);
    const clickHandler = (e) => {
        setState((prev) => prev + 1);
    };

    return (
        <div>
            <h3>他の子コンポーネント</h3>
            <button onClick={clickHandler}>+</button>
        </div>
    );
};

export default OtherChild;
